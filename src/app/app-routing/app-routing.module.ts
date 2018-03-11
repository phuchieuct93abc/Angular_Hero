import { HeroDetailComponent } from './../components/hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
