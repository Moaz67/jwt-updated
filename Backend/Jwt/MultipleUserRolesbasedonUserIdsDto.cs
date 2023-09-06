using System.Collections.Generic;

namespace Jwt
{
    public class MultipleUserRolesbasedonUserIdsDto
    {
        public int UserId { get; set; }
        public int RoleId { get; set;
        }
        public string RoleName { get; set; }
        public string UserName { get; set; }
    }
}
