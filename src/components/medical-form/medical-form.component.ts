import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'medicalForm',
  template: `<div class="container">
              <!-- Date Picker -->
              <div class="row">
                <div class="col-sm-3">
                  <label name="datePickerFrom">From:</label>
                </div>
                <div class="col-sm-3">
                  <date-picker
                    selected-date="$ctrl.displayDate($event)"
                    name="'dateFrom'" >
                  </date-picker>
                </div>
                <div class="col-sm-3">
                  <label name="datePickerTo">To:</label>
                </div>
                <div class="col-sm-3">
                  <date-picker
                    name="'dateTo'"
                    min-date="$ctrl.minDate"
                    selected-date="$ctrl.displayDate($event)">
                  </date-picker>
                </div>
              </div>
              <!-- End Date Picker -->

              <!-- Drop Down -->
                <div class="row">
                  <drop-down
                    items="$ctrl.itemsList"
                    ></drop-down>
                </div>
              <!-- End Drop Down -->
            </div>`
})
export class MedicalForm implements ng.IComponentController {
  minDate: Date = new Date('Wed Feb 1 2018 09:10:20 GMT+0200');
  dbObj: Object = {};

  itemsList = [
    'Good Dorctor',
    'Not Bad Doctor',
    'Don\'t use Doctor'
  ];

  displayDate($event: {date: Date; name: string}) {
    this.dbObj = {...this.dbObj, ...$event};
    console.log(this.dbObj);
  }

}
