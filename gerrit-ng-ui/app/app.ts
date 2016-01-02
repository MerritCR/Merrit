import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component'

@Component({
    selector: 'gerrit-ui',
    template:`
        <header-component></header-component>

    `,
    directives: [HeaderComponent]
})

export class App {

}


