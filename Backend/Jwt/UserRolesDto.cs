namespace Jwt
{
    public class UserRolesDto
    {
        public int UserId { get; set; } 
        public List<int> RoleIds { get; set; }
        public string RoleName { get; set; } = string.Empty;
        public int RoleId { get; set; }
        public bool IsCheck { get; set; }
    }
}
