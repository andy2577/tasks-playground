import { Injectable } from 'angular-ts-decorators';
import  * as firebase  from 'firebase';

@Injectable('AppointmentSevice')
export class AppointmentSevice {
    DB;

    constructor() {
        this.DB  = firebase.database();
    }

    getAppointment() {
        return 'test use';
    }

    writeToDb(appointment) {
        let newAppntKey = firebase.database().ref().child('appointments').push().key;
        return this.DB.ref('appointments/' + newAppntKey).set({...appointment, 'id': newAppntKey})
    }

    getAllAppointments() {
        return this.DB.ref('appointments/').once('value');
    }

    removeAppointment(appointmentId) {
        return this.DB.ref('appointments/' + appointmentId).remove()
    }
}
