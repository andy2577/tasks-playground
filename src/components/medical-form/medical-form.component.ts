import { Component } from 'angular-ts-decorators';
import * as _ from 'lodash';
import { AppointmentSevice } from '../../appointment.service';

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
                    selected-date="$ctrl.updateDate($event)"
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
                    selected-date="$ctrl.updateDate($event)">
                  </date-picker>
                </div>
              </div>
              <!-- End Date Picker -->

              <!-- Drop Down -->
                <div class="row">
                  <drop-down
                    items="$ctrl.itemsList"
                    selected-doctor="$ctrl.updateDoctor($event)"
                    ></drop-down>
                </div>
              <!-- End Drop Down -->
              <!-- Buttons -->
              <button type="button" 
                class="btn btn-primary" 
                ng-click="$ctrl.writeToDb()"
              >
              Save to DB
              </button> 
              <button type="button" 
                class="btn btn-primary" 
                ng-click="$ctrl.readFromDb()"
              >Read</button>
              <!-- End Buttons -->

              <!-- Appointments -->
              <h4 ng-show="$ctrl.appointmentList !== []" >Appointments:</h4>
              <ul>
                <li ng-repeat="appointment in $ctrl.appointmentList"  id="{{appointment.id}}" >
                  <pre>
{{ $index + 1 }} starts: {{ appointment.dateFrom }}
  ends: {{ appointment.dateTo }}
  doctor: {{ appointment.doctor }}
                  </pre>
                  <a href="#" ng-click="$ctrl.removeAppointment(appointment);">remove</a>
                </li>
              </ul>
            </div>`
})
export class MedicalForm implements ng.IComponentController {
  minDate: Date = new Date('Wed Feb 1 2018 09:10:20 GMT+0200');
  dbObj: Object = {};
  appointmentList= [];

  itemsList = [
    'Good Dorctor',
    'Not Bad Doctor',
    'Don\'t use Doctor'
  ];

  /*@ngInject*/
  constructor( private AppointmentSevice: AppointmentSevice ) {
  }

  $onInit() {
    this.dbObj = {dateFrom: 'Wed Feb 01 2018',
    dateTo: 'Wed Feb 28 2018',
    doctor: 'Cool Doctor'};
  }

  serviceTest() {
    const test = this.AppointmentSevice.getAppointment();
    console.log(test);
  }

  writeToDb() {
    this.AppointmentSevice.writeToDb(this.dbObj)
      .then(() => {
        this.readFromDb();
        console.log('Success')
      });
  }

  readFromDb() {
    this.AppointmentSevice.getAllAppointments()
      .then(res => {
        this.appointmentList =  _.values(res.val());
      });
  }
  
  removeAppointment(appointment) {
    this.AppointmentSevice.removeAppointment(appointment.id)
      .then(res => {
        console.log('Success removing Item');
        this.readFromDb();
      });
  }

  updateDate($event) {
    const dateObj = JSON.parse(`{ "${$event.name}": "${$event.date}"}`);
    this.dbObj = {...this.dbObj, ...dateObj};
  }

  updateDoctor($event: {doctor: string}) {
    this.dbObj = {...this.dbObj, ...$event};
  }
}
