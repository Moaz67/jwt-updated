import { Permissions } from "./permissions"
import { Roles } from "./roles"
import { User } from "./user"
import { UserRole } from "./user-role"

export class Dashboarddata {
    userCount:number=0
    roleCount:number=0
    permissionCount:number=0
    permissions:Permissions[]=[]
    roles:Roles[]=[]
    users:User[]=[]
    userRoles:UserRole[]=[]
}
