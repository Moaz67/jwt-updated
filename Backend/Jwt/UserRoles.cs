namespace Jwt
{
    public class UserRoles
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public Roles Role { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
