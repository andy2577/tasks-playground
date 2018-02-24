import { Component } from 'angular-ts-decorators';
// import  * as firebase  from 'firebase';

@Component({
  selector: 'app',
  template: `<medical-form></medical-form>
              <ui-view></ui-view>`
})
export class AppComponent {}
