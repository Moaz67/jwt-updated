using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Jwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        public RoleController(UserDbContext userDbContext)
        {

            _userDbContext = userDbContext;
        }
        [HttpPost("addrole"),Authorize]
        public async Task<ActionResult<Roles>> Register(RolesDto request)
        {
            var rolesEntity = new Roles
            {
                Name=request.Name
            };
            _userDbContext.Roles.Add(rolesEntity);
            await _userDbContext.SaveChangesAsync();

            return Ok();

        }
        [HttpGet("getdata"), Authorize]
        public async Task<ActionResult<Roles>> getdata()
        {
            var data = await _userDbContext.Roles.ToListAsync();
            return Ok(data);
        }
        [HttpPut("update/{id}"), Authorize]
        public async Task<ActionResult<RolesDto>> UpdateRole(int id, RolesDto updatedRole)
        {
            var role = await _userDbContext.Roles.FirstOrDefaultAsync(r => r.Id == id);

            if (role == null)
            {
                return NotFound();
            }

            role.Name = updatedRole.Name; 

            _userDbContext.Entry(role).State = EntityState.Modified;
            await _userDbContext.SaveChangesAsync();

            return Ok(updatedRole);
        }
        [HttpDelete("delete/{id}"), Authorize]
        public async Task<ActionResult> DeleteRole(int id)
        {
            var role = await _userDbContext.Roles.FirstOrDefaultAsync(r => r.Id == id);

            if (role == null)
            {
                return NotFound();
            }

            _userDbContext.Roles.Remove(role);
            await _userDbContext.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<Roles>> GetRoleById(int id)
        {
            var role = await _userDbContext.Roles.FindAsync(id);

            if (role == null)
            {
                return NotFound();
            }

            return Ok(role);
        }



    }
}
