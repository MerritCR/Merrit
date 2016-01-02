/**
 * Created by josh on 12/14/15.
 */
/**
 * Created by josh on 12/12/15.
 */
import {Component} from 'angular2/core';
import {Search} from './search'

@Component({
    selector: 'menu',
    template:`
        <div (click)='onClick()'>
            {{menuName}}
        </div>
        <search></search>
    `,
    directives: [Search]
})

export class Menu {
    public menuName='menu-title';
    public onClick(){
        alert('add code')
    }
}
