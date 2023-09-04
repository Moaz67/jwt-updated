using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

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
        //public async Task<ActionResult<RolePerbyid>> GetRolePerById(int roleid)
        //{
        //    var Per = await _userDbContext.Permissions.ToListAsync();
        //    var userRoles = await _userDbContext.RolesPer
        //           .Where(ur => ur.RoleId == roleid)
        //           .Select(ur => new RolesPermissionDto
        //           {
        //               PerId = ur.PermissionId,
        //               RoleId = ur.RoleId,
        //               PerName = ur.Permission.Name,
        //               IsCheck = true
        //           })
        //           .ToListAsync();
        //    var assignedPerIds = userRoles.Select(ur => ur.PerId).ToList();
        //    var remainingPer = Per.Where(r => !assignedPerIds.Contains(r.Id)).ToList();
        //    var response = new RolePerbyid
        //    {
        //        RolePer = userRoles,
        //        Permissions = remainingPer
        //    };
        //    return Ok(response);

        //}
       

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
        [HttpPost("addPermissionToRole"),Authorize]
        public async Task<ActionResult<RolesPermissionDto>> addPermissionToRole(RolesPermissionDto data)
        {
            foreach (var role in data.PerIds)

            {
                    var newRolePer = new RolesPermission
                    {
                        RoleId = data.RoleId,
                        PermissionId=role,
                        
                    };

                    _userDbContext.RolesPer.Add(newRolePer);
            }

            await _userDbContext.SaveChangesAsync();

            return Ok();
        }
        [HttpPut("update-roles-permission")]
        public async Task<IActionResult> UpdateRolesPermission(RolesPermissionDto rolesPermissionUpdate)
        {
            try
            {
                
                var role = await _userDbContext.Roles.FirstOrDefaultAsync(r => r.Id == rolesPermissionUpdate.RoleId);

                if (role == null)
                {
                    return NotFound("Role not found.");
                }

                
                var existingRolePermissions = await _userDbContext.RolesPer
                    .Where(rp => rp.RoleId == rolesPermissionUpdate.RoleId)
                    .ToListAsync();

                _userDbContext.RolesPer.RemoveRange(existingRolePermissions);

                
                foreach (var perId in rolesPermissionUpdate.PerIds)
                {
                    var newRolePermission = new RolesPermission
                    {
                        RoleId = rolesPermissionUpdate.RoleId,
                        PermissionId = perId
                    };

                    _userDbContext.RolesPer.Add(newRolePermission);
                }

                await _userDbContext.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }




    }
}
