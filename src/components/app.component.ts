import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app',
  template: `<medical-form></medical-form>
              <ui-view></ui-view>`
})
export class AppComponent {}
