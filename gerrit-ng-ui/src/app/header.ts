/**
 * Created by josh on 12/12/15.
 */
import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {menu} from './menu'

@Component({
    selector: 'header',
    template:`
        <menu></menu>
    `,
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES, menu]
})

class AppComponent {

}

bootstrap(AppComponent);