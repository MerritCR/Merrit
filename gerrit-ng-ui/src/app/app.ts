import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {header} from './header'

@Component({
    selector: 'my-app',
    template:`
        <h1>Main page for Gerrit review.</h1>
        <header></header>
    `,
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES, header]
})

class AppComponent {

}

bootstrap(AppComponent);