namespace Jwt
{
    public class RolesPermission
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public Roles Role { get; set; }

        public int PermissionId { get; set; }
        public Permissions Permission { get; set; }

    }
}
