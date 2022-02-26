﻿using Microsoft.AspNetCore.Identity;

namespace StudentManagementApi.Services
{
    public class AuthenticateService : IAutenticate
    {
        private readonly SignInManager<IdentityUser> _signInManager;

        public AuthenticateService(SignInManager<IdentityUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public async Task<bool> Authenticate(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, false, lockoutOnFailure: false);
            return result.Succeeded;
        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }
    }
}
