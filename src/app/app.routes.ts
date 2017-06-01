import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    },
    {
		path:'**',//fallback router must in the last
		loadChildren:'./app.module#AppModule'
    }
];