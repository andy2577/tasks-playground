import { Component } from 'angular-ts-decorators';
const template = require('./medical.html');

@Component({
  selector: 'medical',
  template
})
export class Medical implements ng.IComponentController {
  test = 'this is text from controller';
}
