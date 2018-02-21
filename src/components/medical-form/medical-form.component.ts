import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'medicalForm',
  template: `<div>
              <date-picker></date-picker>
            </div>`
})
export class MedicalForm implements ng.IComponentController {}
