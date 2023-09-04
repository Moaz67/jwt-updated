using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

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
        [HttpGet("permissions/{roleId}")]
        public async Task<ActionResult<List<RolePerbyid>>> GetPermissionsByRoleId(int roleId)
        {
            try
            {

                var role = await _userDbContext.Roles.FindAsync(roleId);



                var permissions = await _userDbContext.Permissions.ToListAsync();
                var permissionsagainstroles = await _userDbContext.RolesPer
                    .Where((r => r.RoleId == roleId)).Select(P=>new RolesPermissionDto
                    {
                        PerId=P.PermissionId, RoleId=roleId,PerName=P.Permission.Name,IsCheck=true
                        
                    }
                    )
                    .ToListAsync();
                var assignedPermissions = permissionsagainstroles.Select(ur => ur.PerId).ToList();
                var remainingPermissions = permissions.Where(r => !assignedPermissions.Contains(r.Id)).ToList();
                //var remainingPermissions = permissions.Except(permissionsagainstroles).ToList();
                    var response = new RolePerbyid
                {
                    RolePer = permissionsagainstroles,
                    Permissions = remainingPermissions
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
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

