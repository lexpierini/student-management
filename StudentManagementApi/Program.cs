using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using StudentManagementApi.Context;
using StudentManagementApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<AppDbContext>(option => option.UseNpgsql("Host=localhost;Port=5432;Database=studentManagement;User Id=dev;Password=dev123"));

builder.Services.AddScoped<IStudentService, StudentService>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
