import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'my-app',
  template: '<h1>{{ title }}</h1>'
})

class AppComponent {
  public title = 'The new Gerrit done in Angular 2 with TypeScript';
}

bootstrap(AppComponent);

