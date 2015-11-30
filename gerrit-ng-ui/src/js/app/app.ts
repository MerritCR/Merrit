import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'my-app',
  template: '<h1>{{ title }}</h1>'
})

class AppComponent {
  public title = 'Welcome the Gerrit Angular 2 UI';
}

bootstrap(AppComponent);

