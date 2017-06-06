import { RouterModule } from '@angular/router';
import { CooperationComponent } from "./cooperation.component";
export const cooperationRoutes = [
    {
        path:'',
        redirectTo:'cooperation',
        pathMatch:'full'
    },
    {
        path:'cooperation',
        component:CooperationComponent
    }
];