import { NgModule } from 'angular-ts-decorators';
import { TasksListsComponent } from './tasklists/tasklists.component';
import { TasksService } from '../tasks.service';
import { TaskManager } from './task-manager/task-manager.component';
import { TaskslistItemComponent } from './tasklist/tasklist.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { DatePicker } from './datepicker/datepicker.component';
import { DropDown } from './dropdown/dropdown.component';
import { MedicalFormModule } from './medical-form/medical-form.module';
import { AppointmentSevice } from '../appointment.service';

@NgModule({
  name: 'CommonModule',
  imports: [
    MedicalFormModule
  ],
  declarations: [
    TaskManager,
    TasksListsComponent,
    TaskslistItemComponent,
    TasksComponent,
    TaskComponent,
    DatePicker,
    DropDown
  ],
  providers: [
    TasksService,
    AppointmentSevice
  ]
})
export class CommonModule {}
