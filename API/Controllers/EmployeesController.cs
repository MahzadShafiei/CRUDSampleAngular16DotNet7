using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/employees")]
    public class EmployeesController : Controller
    {
        private readonly DataContext _context;

        public EmployeesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetALL()
        {
            var employees = await _context.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Get([FromRoute]Guid id)
        {
            var employee= await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            
            if (employee == null)
                return NotFound();
            
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] Employee updatedEmployee)
        {
            var employee= await _context.Employees.FirstOrDefaultAsync(c=> c.Id == id);

            if(employee == null)
                return NotFound();

            employee.Name = updatedEmployee.Name;
            employee.Email = updatedEmployee.Email;
            employee.Phone = updatedEmployee.Phone;
            employee.Salary = updatedEmployee.Salary;
            employee.Department = updatedEmployee.Department;

            await _context.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var employee= await _context.Employees.FirstOrDefaultAsync(e=> e.Id == id);

            if(employee == null)
                return NotFound();

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return Ok(employee);
        }
    }
}
