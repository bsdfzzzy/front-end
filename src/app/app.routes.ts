import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

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
        path:'about',
        loadChildren:'./about/about.module#AboutModule'
    },
    {
        path:'advertise',
        loadChildren:'./advertise/advertise.module#AdvertiseModule'
    },
    {
        path:'contact',
        loadChildren:'./contact/contact.module#ContactModule'
    },
    {
        path:'cooperation',
        loadChildren:'./cooperation/cooperation.module#CooperationModule'
    },
    {
        path:'ranking',
        loadChildren:'./ranking/ranking.module#RankingtionModule'
    },
    {
        path:'search',
        loadChildren:'./search/search.module#SearchModule'
    },
    {
        path:'studyAbroad',
        loadChildren:'./studyAbroad/studyAbroad.module#StudyAbroadModule'
    },
    {
        path:'studyInChina',
        loadChildren:'./studyInChina/studyInChina.module#StudyInChinaModule'
    },
    {
        path:'train',
        loadChildren:'./train/train.module#TrainModule'
    },
    {
		path:'**',//fallback router must in the last
		loadChildren:'./app.module#AppModule'
    }
];