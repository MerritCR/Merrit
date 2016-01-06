/**
 * Created by josh on 12/12/15.
 */
import {Component} from 'angular2/core';
import {Menu} from './menu';
import {Search} from './search';

@Component({
    selector: 'header-component',
    template:`
        <div class='header'>
            <img src="./img/Eclipse-logo-2014.svg">
            <menu></menu>
            <search></search>
            Create account | Sign in
        </div>

    `,
    styles: [`
        .header {
            height: 1.8em;
        }
    `],
    directives: [Menu, Search]
})
export class HeaderComponent {

}
