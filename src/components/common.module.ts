import { NgModule } from 'angular-ts-decorators';
import { TasksListsComponent } from './tasklists/tasklists.component';
import { TasksService } from '../tasks.service';
import { TaskManager } from './task-manager/task-manager.component';
import { TaskslistItemComponent } from './tasklist/tasklist.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { DatePicker } from './datepicker/datepicker.component';
// import { DropDown } from './dropdown/dropdown.component';

@NgModule({
  name: 'CommonModule',
  declarations: [
    TaskManager,
    TasksListsComponent,
    TaskslistItemComponent,
    TasksComponent,
    TaskComponent,
    DatePicker,
    // DropDown
  ],
  providers: [
    TasksService
  ]
})
export class CommonModule {}
