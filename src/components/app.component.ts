import { Component } from 'angular-ts-decorators';
import  * as firebase  from 'firebase';

// const config = {
//   apiKey: 'AIzaSyBPfT512lf8kdEBNXCfbGMcJeIORCTCQfo',
//   authDomain: 'vlads-demo.firebaseapp.com',
//   databaseURL: 'https://vlads-demo.firebaseio.com',
//   projectId: 'vlads-demo',
//   storageBucket: 'vlads-demo.appspot.com',
//   messagingSenderId: '605069241132'
// };

// firebase.initializeApp(config);

// const DATABASE = firebase.database();

@Component({
  selector: 'app',
  template: `<medical-form></medical-form>
              <a
                href="#"
                ng-click="$ctrl.writeToDb()"
                >write</a>
              <a
              href="#"
              ng-click="$ctrl.readFromDb()"
              >read</a>
              <ui-view></ui-view>`
})
export class AppComponent {
  DB;

  constructor() {
    this.DB  = firebase.database();
  }

  writeToDb() {
    let newAppntKey = firebase.database().ref().child('appointments').push().key;
    this.DB.ref('appointments/' + newAppntKey).set({dateFrom: 'Wed Feb 26 2018 13:45:47 GMT+0200 (FLE Standard Time)',
    dateTo: 'Wed Feb 34 2018 13:45:47 GMT+0200 (FLE Standard Time)',
    doctor: 'Cool Doctor'})
      .then(() => console.log('Success'));
    console.log('this is click');
  }

  readFromDb() {
    this.DB.ref('appointments/').once('value')
      .then(res => console.log('response', res.val()));
  }
}
