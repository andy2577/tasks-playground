import { IComponentState } from './main';
import { AppComponent } from './components/app.component';
import { TaskManager } from './components/task-manager/task-manager.component';
import { Medical } from './components/medical/medical.component';

export const routes: IComponentState[] = [
    { state: 'root', url: '/', component: AppComponent },
    { state: 'medical', url: '/medical', component: Medical },
];
