import { RouterModule } from '@angular/router';
import { studyAbroadComponent } from "./studyAbroad.component";
export const studyAbroadRoutes = [
    {
        path:'',
        redirectTo:'studyAbroad',
        pathMatch:'full'
    },
    {
        path:'studyAbroad',
        component:studyAbroadComponent
    }
];