import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'gerrit-ui',
    template:`
        <header-component></header-component>
        <h1>Main page for Gerrit review.</h1>
    `,
    directives: [HeaderComponent]
})
export class App {

}


