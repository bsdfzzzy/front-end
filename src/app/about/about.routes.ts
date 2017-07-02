import { RouterModule } from '@angular/router';
import { AboutComponent } from "./about.component";
import { HuanyuComponent } from "./huanyu/huanyu.component";
import { MissionComponent } from "./mission/mission.component";
import { TeamComponent } from "./team/team.component";
import { ValueComponent } from "./value/value.component";
import { VisionComponent } from "./vision/vision.component";
export const aboutRoutes = [
    {
        path:'',
        redirectTo:'about',
        pathMatch:'full'
    },
    {
        path:'about',
        component:AboutComponent,
        children:[
            {
                path: '',
                redirectTo:'huanyu',
                pathMatch:'full'
            },
            {
                path: 'huanyu',/**环宇简介 */
                component: HuanyuComponent,
                // children:[
                //     {
                //         path: '',
                //         redirectTo:'list',
                //         pathMatch:'full'
                //     },
                //     {
                //         path: 'list',
                //         component: listComponent 
                //     },
                //     {
                //         path:'detail',
                //         component:detailComponent
                //     },
                //     // {
                //     //     path:"**",
                //     //     redirectTo:'list'
                //     // }

                // ]
            },
            {
                path: 'mission',/**我们的使命 */
                component: MissionComponent,
            },
            {
                path: 'value',/**我们的价值观 */
                component: ValueComponent,
            },
            {
                path: 'vision',/**我们的愿景 */
                component: VisionComponent,
            },
            {
                path: 'team',/**我们的团队 */
                component: TeamComponent,
            },
            {
                path: '**',
                redirectTo:'huanyu'
            }
         ]
    }
];