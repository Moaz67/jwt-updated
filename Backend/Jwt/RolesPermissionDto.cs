namespace Jwt
{
    public class RolesPermissionDto
    {
        public int RoleId { get; set; }
        public List<int> PerIds { get; set; }
        public string PerName { get; set; } = string.Empty;
        public int PerId { get; set; }
       
        public bool IsCheck { get; set; }
    }
}
