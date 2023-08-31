using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Jwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        public PermissionController(UserDbContext userDbContext)
        {

            _userDbContext = userDbContext;
        }
        [HttpPost("addper"), Authorize]
        public async Task<ActionResult<Permissions>> Register(PermissionsDto request)
        {
            var PerEntity = new Permissions
            {
                Name = request.Name
            };
            _userDbContext.Permissions.Add(PerEntity);
            await _userDbContext.SaveChangesAsync();

            return Ok();

        }
        [HttpGet("getdata"), Authorize]
        public async Task<ActionResult<Permissions>> getdata()
        {
            var data = await _userDbContext.Permissions.ToListAsync();
            return Ok(data);
        }
        [HttpPut("update/{id}"), Authorize]
        public async Task<ActionResult<PermissionsDto>> UpdatePer(int id, PermissionsDto updatedPer)
        {
            var Per = await _userDbContext.Permissions.FirstOrDefaultAsync(r => r.Id == id);

            if (Per == null)
            {
                return NotFound();
            }

            Per.Name = updatedPer.Name;

            _userDbContext.Entry(Per).State = EntityState.Modified;
            await _userDbContext.SaveChangesAsync();

            return Ok(updatedPer);
        }
        [HttpDelete("delete/{id}"), Authorize]
        public async Task<ActionResult> DeletePer(int id)
        {
            var Per = await _userDbContext.Permissions.FirstOrDefaultAsync(r => r.Id == id);

            if (Per == null)
            {
                return NotFound();
            }

            _userDbContext.Permissions.Remove(Per);
            await _userDbContext.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<Roles>> GetPerById(int id)
        {
            var Per = await _userDbContext.Permissions.FindAsync(id);

            if (Per == null)
            {
                return NotFound();
            }

            return Ok(Per);
        }



    }
}

