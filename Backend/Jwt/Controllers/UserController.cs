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
        public UserController(UserDbContext userDbContext)
        {

            _userDbContext = userDbContext;
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



    }
}
