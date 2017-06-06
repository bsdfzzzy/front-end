import { RouterModule } from '@angular/router';
import { TrainComponent } from "./train.component";
export const trainRoutes = [
    {
        path:'',
        redirectTo:'train',
        pathMatch:'full'
    },
    {
        path:'train',
        component:TrainComponent
    }
];