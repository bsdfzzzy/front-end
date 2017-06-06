import { RouterModule } from '@angular/router';
import { AdvertiseComponent } from "./advertise.component";
export const advertiseRoutes = [
    {
        path:'',
        redirectTo:'advertise',
        pathMatch:'full'
    },
    {
        path:'advertise',
        component:AdvertiseComponent
    }
];