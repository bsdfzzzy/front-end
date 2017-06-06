import { RouterModule } from '@angular/router';
import { RankingComponent } from "./ranking.component";
export const rankingRoutes = [
    {
        path:'',
        redirectTo:'ranking',
        pathMatch:'full'
    },
    {
        path:'ranking',
        component:RankingComponent
    }
];