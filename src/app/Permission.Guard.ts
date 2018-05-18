/**路由守卫-> 路由跳入 */

import { CanActivate } from '@angular/router';

export class PermissionGuard  implements CanActivate {
    canActivate() {
        console.log("路由跳入")
        return true
    }
}