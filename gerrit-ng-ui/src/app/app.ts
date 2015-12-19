import {Component} from 'angular2/angular2';
import {header} from './header'

@Component({
    selector: 'my-app',
    template:`
        <h1>Main page for Gerrit review.</h1>
        <header></header>
    `,
    directives:[header]
})

export class AppComponent {

}


