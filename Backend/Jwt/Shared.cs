using Jwt.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Jwt
{
    public class Shared:ControllerBase
    {
        private readonly UserDbContext _context;
        public Shared(UserDbContext userDbContext) { 
            _context = userDbContext;
        }

        public async Task<ActionResult<IEnumerable<Roles>>> GetRolesAsync()
        {
            var data = await _context.Roles.ToListAsync();
            return data;
        }


    }
}
