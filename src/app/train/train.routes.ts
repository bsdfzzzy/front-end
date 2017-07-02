import { RouterModule } from '@angular/router';
import { TrainComponent } from "./train.component";
import { TOEFLComponent } from "./TOEFL/TOEFL.component";
import { GREComponent } from "./GRE/GRE.component";
import { GMATComponent } from "./GMAT/GMAT.component";
import { IETLSComponent } from "./IETLS/IETLS.component";
export const trainRoutes = [
    {
        path:'',
        redirectTo:'train',
        pathMatch:'full'
    },
    {
        path:'train',
        component:TrainComponent,
        children:[
            {
                path:'',
                redirectTo:'GMAT',
                pathMatch:'full'
            },
            {
                path:'GMAT',
                component:GMATComponent,
            },
            {
                path:'TOEFL',
                component:TOEFLComponent,
            },
            {
                path:'GRE',
                component:GREComponent,
            },
            {
                path:'IETLS',
                component:IETLSComponent,
            },
            {
                path:'**',
                redirectTo:'GMAT'
            }
        ]
    }
];