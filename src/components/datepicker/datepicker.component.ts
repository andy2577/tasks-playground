import { Component, Input, Output } from 'angular-ts-decorators';
import './datepicker.scss';

@Component({
  selector: 'datePicker',
  template: `
  <div class="row">
    <div class="col-md-6">
      <p class="input-group">
        <input type="text"
          class="form-control"
          uib-datepicker-popup="{{$ctrl.format}}"
          ng-model="$ctrl.dt"
          is-open="$ctrl.popup.opened"
          datepicker-options="$ctrl.dateOptions"
          ng-required="true"
          close-text="Close"
          ng-change="$ctrl.onSelect()"
          alt-input-formats="$ctrl.altInputFormats" />
        <span class="input-group-btn">
          <button
            type="button"
            class="btn btn-default"
            ng-click="$ctrl.open()">
            <i class="glyphicon glyphicon-calendar"></i>
          </button>
        </span>
      </p>
    </div>`
})
export class DatePicker implements ng.IComponentController {
  @Output() selectedDate: Function;
  dt: Date;
  tomorrow = new Date();
  afterTomorrow = new Date();
  format: string;

  inlineOptions = {
    customClass: this.getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  dateOptions = {
    dateDisabled: this.disabled,
    formatYear: 'yy',
    maxDate: new Date(2018, 2, 22),
    minDate: new Date(),
    startingDay: 1
  };

  events = [
    {
      date: this.tomorrow,
      status: 'full'
    },
    {
      date: this.afterTomorrow,
      status: 'partially'
    }
  ];

  popup = {
    opened: false
  };

  formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  altInputFormats = ['M!/d!/yyyy'];

  constructor(){}

  $onInit() {
    this.today();
    this.toggleMin();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.afterTomorrow.setDate(this.tomorrow.getDate() + 1);
    this.format = this.formats[2];
  }

  onSelect() {
    this.selectedDate({
      $event: { date: this.dt }
    });
  }

  today() {
    this.dt = new Date();
  }

  clear() {
    this.dt = null;
  }

  open() {
    this.popup.opened = true;
  }

  toggleMin() {
    this.inlineOptions.minDate = this.inlineOptions.minDate ? null : new Date();
    this.dateOptions.minDate = this.inlineOptions.minDate;
  };

  setDate(year, month, day) {
    this.dt = new Date(year, month, day);
  };

  private disabled(data) {
    let date = data.date;
    let mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  getDayClass(data) {
    let date = data.date;
    let mode = data.mode;
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
      for (let i = 0; i < this.events.length; i++) {
        let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }
    return '';
  }
}
