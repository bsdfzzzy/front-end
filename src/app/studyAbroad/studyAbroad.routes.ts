import { RouterModule } from '@angular/router';
import { studyAbroadComponent } from "./studyAbroad.component";
import { detailComponent } from "./details/detail.component";
import { listComponent } from "./list/list.component";
import { assessAndPlanComponent } from "./assessAndPlan/assessAndPlan.component";
import { examinationComponent } from "./examination/examination.component";
import { promotionComponent } from "./promotion/promotion.component";
import { studyOutsideComponent } from "./studyOutside/studyOutside.component";
import { guideComponent } from "./guide/guide.component";
import { visaComponent } from "./visa/visa.component";
import { exampleComponent } from "./example/example.component";
import { examplelistComponent } from "./example/list/list.component";
import { exampledetailComponent } from "./example/details/detail.component";
export const studyAbroadRoutes = [
    {
        path:'',
        redirectTo:'studyAbroad',
        pathMatch:'full'
    },
    {
        path:'studyAbroad',
        component:studyAbroadComponent,
        children:[
            {
                path: '',
                redirectTo:'assessAndPlan',
                pathMatch:'full'
            },
            {
                path: 'assessAndPlan',/**评估与策划 */
                component: assessAndPlanComponent
            },
            {
                path:'examination',/**出国考试 */
                component:examinationComponent 
            },
            {
                path:'promotion',/**背景提升 */
                component:promotionComponent 
            },
            {
                path:'studyOutside',/**海外游学 */
                component:studyOutsideComponent 
            },
            {
                path:'guide',/**文书指导 */
                component:guideComponent 
            },
            {
                path:'visa',/**签证办理 */
                component:visaComponent 
            },
            {
                path:'example',/**成功案例 */
                component:exampleComponent,
                children:[
                    {
                        path: '',
                        redirectTo:'examplelist',
                        pathMatch:'full'
                    },
                    {
                        path: 'examplelist',
                        component: examplelistComponent 
                    },
                    {
                        path:'exampledetail/:id',
                        component:exampledetailComponent
                    }
                ]
            }

        ]

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
        //       {
        //         path:'detail',
        //         component:detailComponent
        //     }
        // ]
    }
];