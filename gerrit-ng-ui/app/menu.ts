/**
 * Created by josh on 12/12/15.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'menu',
    template:`
        <div (click)='onClick()'>
            {{menuName}}
        </div>

    `
})
export class Menu {
    public menuName='menu-title';
    public onClick(){
        alert('add code')
    }
}
