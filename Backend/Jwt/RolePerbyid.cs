namespace Jwt
{
    public class RolePerbyid
    {
        public List<RolesPermissionDto> RolePer { get; set; }
        public List<Permissions> Permissions { get; set; }
        public List<Permissions> PermissionAgainstRole { get; set; }    
    }
}
