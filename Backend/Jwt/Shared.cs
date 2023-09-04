using Jwt.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Jwt
{
    public class Shared
    {
        private readonly UserDbContext _context;
        public Shared(UserDbContext userDbContext) { 
            _context = userDbContext;
        }

        //public async Task<ActionResult<IEnumerable<Roles>>> GetRolesAsync()
        //{
        //    var data = await _context.Roles.ToListAsync();
        //    return data;
        //}
        public async Task<UserRolesbyId> GetUserRolesById(int userId)
        {
            //var roleaccess = await _shared.GetRolesAsync();
            var roles = await _context.Roles.ToListAsync();
            var userRoles = await _context.UserRoles
                    .Where(ur => ur.UserId == userId)
                    .Select(ur => new UserRolesDto
                    {
                        UserId = ur.UserId,
                        RoleId = ur.RoleId,
                        RoleName = ur.Role.Name,
                        IsCheck = true
                    })
                    .ToListAsync();
            var userPermissions =await _context.UserRoles
                  .Where(ur => ur.UserId == userId)
                  .SelectMany(ur => ur.Role.RolePermissions)
                  .Select(rp => rp.Permission.Name)
                  .ToListAsync();


            var assignedRoleIds = userRoles.Select(ur => ur.RoleId).ToList();
            var remainingRoles = roles.Where(r => !assignedRoleIds.Contains(r.Id)).ToList();

            var response = new UserRolesbyId
            {
                UserRoles = userRoles,
                Roles = remainingRoles,
                PerName=userPermissions
            };
            return response;


        }


    }
}
