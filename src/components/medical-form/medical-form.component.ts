import { Component } from 'angular-ts-decorators';
import * as _ from 'lodash';
import { AppointmentSevice } from '../../appointment.service';

const template = require('./medical-form.component.html');

@Component({
  selector: 'medicalForm',
  template
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
