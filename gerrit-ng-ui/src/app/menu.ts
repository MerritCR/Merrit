/**
 * Created by josh on 12/14/15.
 */
/**
 * Created by josh on 12/12/15.
 */
import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'menu',
    template:`
        <div (click)='onClick()'>
            {{menuName}}
        </div>
    `,
    directives:[]
})

class MenuComponent {
    public menuName='menu-title';
    public onClick(){
        alert('add code')
    }
}

bootstrap(MenuComponent);