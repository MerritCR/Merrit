/**
 * Created by josh on 12/12/15.
 */
import {Component} from 'angular2/core';
import {Menu} from './menu'

@Component({
    selector: 'header',
    template:`
        <menu></menu>
    `,
    directives:[Menu]
})

export class Header {

}
