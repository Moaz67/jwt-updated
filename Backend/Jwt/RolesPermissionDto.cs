namespace Jwt
{
    public class RolesPermissionDto
    {
        public int RoleId { get; set; }
        public List<int> PerIds { get; set; }
        public string PerName { get; set; } = string.Empty;
        public int PermissionId { get; set; }
       
        public bool IsCheck { get; set; }
    }
}
