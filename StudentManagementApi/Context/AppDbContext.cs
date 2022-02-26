using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StudentManagementApi.Models;

namespace StudentManagementApi.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Student>().HasData(
        //        new Student
        //        {
        //            Id = 1,
        //            Name = "Maria da Penha",
        //            Age = 23,
        //            Email = "mariadapenha@gmail.com",
        //        },

        //        new Student
        //        {
        //            Id = 2,
        //            Name = "Manuel Bueno",
        //            Age = 22,
        //            Email = "manuelbueno@gmail.com"
        //        }
        //    );
        //}
    }
}
 