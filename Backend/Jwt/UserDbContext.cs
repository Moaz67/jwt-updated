using Microsoft.EntityFrameworkCore;
using System;

namespace Jwt
{
    public class UserDbContext :DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Permissions> Permissions { get; set; }
        public DbSet<RolesPermission> RolesPer { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
    }
}
