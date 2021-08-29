import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Common-layout/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path:'',
    component: NavBarComponent,

    children: [{
      path:'',
      redirectTo:'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./Features/Home/home.module').then(mod=>mod.HomeModule)
    },
 ]
},
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
