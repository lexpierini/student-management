using StudentManagementApi.Models;

namespace StudentManagementApi.Services
{
    public interface IStudentService
    {
        Task<IEnumerable<Student>> GetStudents();
        Task<IEnumerable<Student>> GetStudentByName(string name);
        Task<Student> GetStudentById(int id);
        Task CreateStudent(Student student);
        Task UpdateStudent(Student student);
        Task DeleteStudent(Student student);
    }
}
