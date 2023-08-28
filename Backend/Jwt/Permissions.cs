using System.ComponentModel.DataAnnotations;
// this is a test comment
namespace Jwt
{
    public class Permissions
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
       
        public List<RolesPermission> RolePermissions { get; set; }
    }
}
