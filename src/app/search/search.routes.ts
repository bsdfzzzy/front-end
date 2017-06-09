import { RouterModule } from '@angular/router';
import { SearchComponent } from "./search.component";
export const searchRoutes = [
    {
        path:'',
        redirectTo:'search',
        pathMatch:'full'
    },
    {
        path:'search/:selectwords',
        component:SearchComponent
    }
];