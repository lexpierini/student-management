namespace StudentManagementApi.Services
{
    public interface IAutenticate
    {
        Task<bool> Authenticate(string email, string password);
        Task Logout();
    }
}
