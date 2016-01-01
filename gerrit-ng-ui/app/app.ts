import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component'

@Component({
    selector: 'gerrit-ui',
    template:`
        <h1>Main page for Gerrit review.</h1>
        <header-component></header-component>
    `
})

export class App {

}


