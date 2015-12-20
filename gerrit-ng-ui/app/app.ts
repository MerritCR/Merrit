import {Component} from 'angular2/core';
import {Header} from './header'

@Component({
    selector: 'gerrit-ui',
    template:`
        <h1>Main page for Gerrit review.</h1>
        <header></header>
    `,
    directives:[Header]
})

export class App {

}


