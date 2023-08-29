import { Permissions } from "./permissions"
import { Roles } from "./roles"
import { User } from "./user"

export class Dashboarddata {
    userCount:number=0
    roleCount:number=0
    permissionCount:number=0
    permissions:Permissions[]=[]
    roles:Roles[]=[]
    users:User[]=[]
}
