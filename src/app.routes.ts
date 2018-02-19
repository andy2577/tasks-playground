import { IComponentState } from './main';
import { AppComponent } from './components/app.component';
import { TaskManager } from './components/task-manager/task-manager.component';
import { MedicalFormComponent } from './components/medical-form/medical-form.component';

export const routes: IComponentState[] = [
    { state: 'root', url: '/', component: AppComponent },
    { state: 'tasks', url: '/task', component: TaskManager },
    { state: 'medicalForm', url: '/medical-form', component: MedicalFormComponent },
];
