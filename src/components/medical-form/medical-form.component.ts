import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'medicalForm',
  template: `<div>
              <date-picker
                selected-date="$ctrl.displayDate($event)">
              </date-picker>
            </div>`
})
export class MedicalForm implements ng.IComponentController {
  displayDate($event: {date: Date}) {
    console.log($event.date);
  }
}
