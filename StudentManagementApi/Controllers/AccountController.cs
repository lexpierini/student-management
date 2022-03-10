
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StudentManagementApi.Services;
using StudentManagementApi.ViewModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace StudentManagementApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAuthenticate _authenticate;
        private readonly IConfiguration _configuration;

        public AccountController(IConfiguration configuration, IAuthenticate authenticate)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _authenticate = authenticate ?? throw new ArgumentNullException(nameof(authenticate));
        }

        [HttpPost]
        public async Task<ActionResult<UserTokenVM>> CreateUser([FromBody] RegisterVM register)
        {
            if (register.Password != register.ConfirmPassword)
            {
                ModelState.AddModelError("ErrorMsg", "Passwords do not match");
                return BadRequest(ModelState);
            }

            var result = await _authenticate.RegisterUser(register.Email, register.Password);

            if (result)
            {
                return Ok($"User {register.Email} created successfully");
            }
            else
            {
                ModelState.AddModelError("ErrorMsg", "Invalid register");
                return BadRequest(ModelState);
            }
        }

        [HttpPost]
        public async Task<ActionResult<UserTokenVM>> Login([FromBody] LoginVM login)
        {
            var result = await _authenticate.Authenticate(login.Email, login.Password);

            if (result)
            {
                return GenerateToken(login);
            }
            else
            {
                ModelState.AddModelError("ErrorMsg", "Invalid login");
                return BadRequest(ModelState);
            }
        }

        private ActionResult<UserTokenVM> GenerateToken(LoginVM login)
        {
            var claims = new[]
            {
                new Claim("email", login.Email),
                new Claim("myToken", "token for test"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddHours(1);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: expiration,
                signingCredentials: creds);

            return new UserTokenVM()
            {
                //Token = $"Bearer {new JwtSecurityTokenHandler().WriteToken(token)}",
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration,
            };
        }
    }
}
