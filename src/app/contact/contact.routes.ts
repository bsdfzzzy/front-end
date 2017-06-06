import { RouterModule } from '@angular/router';
import { ContactComponent } from "./contact.component";
export const contactRoutes = [
    {
        path:'',
        redirectTo:'contact',
        pathMatch:'full'
    },
    {
        path:'contact',
        component:ContactComponent
    }
];