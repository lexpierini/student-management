using Microsoft.AspNetCore.Mvc;
using StudentManagementApi.Models;
using StudentManagementApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace StudentManagementApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class StudentsController : ControllerBase
    {
        private IStudentService _studentService;

        public StudentsController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Student>>> GetStudents()
        {
            IEnumerable<Student> students = await _studentService.GetStudents();
            return Ok(students);
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Student>>> GetStudentsByName([FromQuery] string name)
        {
            IEnumerable<Student> students = await _studentService.GetStudentByName(name);

            if (students.Count() == 0)
            {
                return NotFound($"There are no students with the {name} criteria");
            }

            return Ok(students);
        }

        [HttpGet]
        public async Task<ActionResult<Student>> GetStudentsById([FromQuery] int id)
        {
            Student student = await _studentService.GetStudentById(id);
            
            if (student == null)
            {
                return NotFound($"There is no student with id={id}");
            }

            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {
            try
            {
                await _studentService.CreateStudent(student);
                return CreatedAtAction(nameof(GetStudentsById), new { id = student.Id }, student);
            }
            catch
            {
                return BadRequest("Invalid request");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Student>> UpdateStudent(Student student)
        {
            try
            {
                await _studentService.UpdateStudent(student);
                return Ok($"The student data with id={student.Id} has been successfully updated");
            }
            catch
            {
                return BadRequest("Invalid request");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<Student>> DeleteStudent(Student student)
        {
            try
            {
                Student studentFound = await _studentService.GetStudentById(student.Id);
                
                if (studentFound != null)
                {
                    await _studentService.DeleteStudent(studentFound);
                    return Ok($"The student of id={student.Id} has been successfully deleted");
                }
                else
                {
                    return NotFound($"The student with id={student.Id} could not be found");
                }                
            }
            catch
            {
                return BadRequest("Invalid request");
            }
        }
    }
}