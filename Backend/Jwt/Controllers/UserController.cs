using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Jwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        //private readonly Shared _shared;
        public UserController(UserDbContext userDbContext)
        {

            _userDbContext = userDbContext;
             //_shared = shared;
        }
        [HttpGet("getdata"), Authorize]
        public async Task<ActionResult> getdata()
        {
            var usercount = await _userDbContext.Users.CountAsync();
            var Rolecount = await _userDbContext.Roles.CountAsync();
            var Permissioncount = await _userDbContext.Permissions.CountAsync();
            var userdata = await _userDbContext.Users.ToListAsync();
            var Roles = await _userDbContext.Roles.ToListAsync();
            var Permissions = await _userDbContext.Permissions.ToListAsync();

            return Ok(new
            {
                UserCount = usercount,
                RoleCount = Rolecount,
                PermissionCount = Permissioncount,
                Users = userdata,
                Roles = Roles,
                Permissions = Permissions
            });

        }
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult> GetUserById(int id)
        {
            var user = await _userDbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            var userPermissions = _userDbContext.UserRoles
    .Where(ur => ur.UserId == id)
    .SelectMany(ur => ur.Role.RolePermissions)
    .Select(rp => rp.Permission.Name)
    .ToList();
            return Ok(user);
        }
        [HttpPut("update{id}"), Authorize]
        public async Task<ActionResult> UpdateUser(int id, string username)
        {
            var user = await _userDbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            user.Username = username;
            await _userDbContext.SaveChangesAsync();

            return Ok();
        }
        [HttpDelete("delete{id}"), Authorize]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var user = await _userDbContext.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            _userDbContext.Users.Remove(user);
            await _userDbContext.SaveChangesAsync();

            return NoContent();
            
        }
        [HttpPost("addRolestoUsers"),Authorize]
        public async Task<ActionResult<UserRolesDto>> addRoleinUser(UserRolesDto data)
        {
            foreach (var role in data.RoleIds)

            {
                var newRolePer = new UserRoles
                {
                    RoleId = role,
                    UserId = data.UserId

                };

                _userDbContext.UserRoles.Add(newRolePer);
            }

            await _userDbContext.SaveChangesAsync();

            return Ok();
        }
        [HttpGet("GetUserRolesbyId")]
        public async Task<ActionResult<UserRolesbyId>> GetUserRolesById(int userId)
        {
            //var roleaccess = await _shared.GetRolesAsync();
            var roles=await _userDbContext.Roles.ToListAsync();
            var userRoles = await _userDbContext.UserRoles
                    .Where(ur => ur.UserId == userId)
                    .Select(ur => new UserRolesDto
                    {
                        UserId = ur.UserId,
                        RoleId = ur.RoleId,
                        RoleName=ur.Role.Name,
                        IsCheck=true
                    })
                    .ToListAsync();
    //        var userPermissions = _userDbContext.UserRoles
    //.Where(ur => ur.UserId == userId)
    //.SelectMany(ur => ur.Role.RolePermissions)
    //.SelectMany(rp => rp.Permission.Name)
    //.ToList();


            var assignedRoleIds = userRoles.Select(ur => ur.RoleId).ToList();
            var remainingRoles = roles.Where(r => !assignedRoleIds.Contains(r.Id)).ToList();

            var response = new UserRolesbyId
            {
                UserRoles = userRoles,
                Roles = remainingRoles
            };
            return Ok(response);
            

        }
        [HttpPut("updateUserRoles"), Authorize]
        public async Task<IActionResult> UpdateUserRoles(UserRolesDto userRolesUpdate)
        {
            try
            {
                var user = await _userDbContext.Users.FirstOrDefaultAsync(u => u.Id == userRolesUpdate.UserId);

                if (user == null)
                {
                    return NotFound("User not found.");
                }

                // Clear existing user roles
                var existingUserRoles = await _userDbContext.UserRoles.Where(ur => ur.UserId == userRolesUpdate.UserId).ToListAsync();
                _userDbContext.UserRoles.RemoveRange(existingUserRoles);

                // Add new user roles
                foreach (var roleId in userRolesUpdate.RoleIds)
                {
                    var newUserRole = new UserRoles
                    {
                        UserId = userRolesUpdate.UserId,
                        RoleId = roleId
                    };

                    _userDbContext.UserRoles.Add(newUserRole);
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
