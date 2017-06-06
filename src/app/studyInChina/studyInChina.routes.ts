import { RouterModule } from '@angular/router';
import { StudyInChinaComponent } from "./studyInChina.component";
export const studyInChinaRoutes = [
    {
        path:'',
        redirectTo:'studyInChina',
        pathMatch:'full'
    },
    {
        path:'studyInChina',
        component:StudyInChinaComponent
    }
];