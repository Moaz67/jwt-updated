using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        [HttpPost("addrole")]
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
    }
}
