using Microsoft.AspNetCore.Mvc;
using StudentManagementApi.Services;
using StudentManagementApi.ViewModels;

namespace StudentManagementApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthenticate _authenticate;

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
                ModelState.AddModelError("ConfirmePassword", "Passwords do not match");
                return BadRequest(ModelState);
            }

            var result = await _authenticate.RegisterUser(register.Email, register.Password);

            if (result)
            {
                return Ok($"User {register.Email} created successfully");
            }
            else
            {
                ModelState.AddModelError("CreateUser", "Invalid register");
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
                ModelState.AddModelError("Login", "Invalid login");
                return BadRequest(ModelState);
            }
        }
    }
}
