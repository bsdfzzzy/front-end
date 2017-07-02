import { RouterModule } from '@angular/router';
import { StudyInChinaComponent } from "./studyInChina.component";
import { UniversitiesComponent } from "./Universities/Universities.component";
import { ScholarshipsComponent } from "./Scholarships/Scholarships.component";
export const studyInChinaRoutes = [
    {
        path:'',
        redirectTo:'studyInChina',
        pathMatch:'full'
    },
    {
        path:'studyInChina',
        component:StudyInChinaComponent,
        children:[
            {
                path:'',
                redirectTo:'Universities',
                pathMatch:'full'
            },
            {
                path:'Universities',
                component:UniversitiesComponent
            },
            {
                path:'Scholarships',
                component:ScholarshipsComponent
            },
            {
                path: '**',
                redirectTo:'Universities'
            }
        ]
    }
];