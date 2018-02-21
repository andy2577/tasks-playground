import { IComponentState } from './main';
import { AppComponent } from './components/app.component';
import { TaskManager } from './components/task-manager/task-manager.component';
import { MedicalForm } from './components/medical-form/medical-form.component';

export const routes: IComponentState[] = [
    { state: 'root', url: '/', component:  'AppComponent' },
    { state: 'tasks', url: '/task', component: 'TaskManager'},
    { state: 'medicalform', url: '/medical-form', component: 'MedicalForm' },
];
