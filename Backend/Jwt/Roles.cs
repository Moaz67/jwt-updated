using System.ComponentModel.DataAnnotations;
using System.Security;

namespace Jwt
{
    public class Roles
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public List<RolesPermission> RolePermissions { get; set; }
    }
}
