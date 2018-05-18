import { SecondPageComponent } from "./second-page/second-page.component";
import { CanDeactivate } from '@angular/router';

/**路由守卫-> 路由跳出 处理路由离开的情况 */
export class FocusGuard implements CanDeactivate<SecondPageComponent> {
    canDeactivate(component: SecondPageComponent) {

        if(component.changeFocus()){
            console.log(component.changeFocus())
            return true
        }else{
            console.log(component.changeFocus())
            return false
        }
        
    }
}