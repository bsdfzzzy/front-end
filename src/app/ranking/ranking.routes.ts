import { RouterModule } from '@angular/router';
import { RankingComponent } from "./ranking.component";
import { USAComponent } from "./USA/USA.component";
import { THEComponent } from "./THE/THE.component";
import { QSComponent } from "./QS/QS.component";
import { ARWUComponent } from "./ARWU/ARWU.component";
export const rankingRoutes = [
    {
        path:'',
        redirectTo:'ranking',
        pathMatch:'full'
    },
    {
        path:'ranking',
        component:RankingComponent,
        children:[
            {
                path: '',
                redirectTo:'USA',
                pathMatch:'full'
            },
            {
                path: 'USA',/**美国大学排名 */
                component: USAComponent,
            },
            {
                path: 'THE',/**泰晤士报排名 */
                component: THEComponent,
            },
            {
                path: 'QS',/**QS排名 */
                component: QSComponent,
            },
            {
                path: 'ARWU',/**世界大学学术排名 */
                component: ARWUComponent,
            },
            {
                path:"**",
                redirectTo:'USA'
            }
        ]
    }
];