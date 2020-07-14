import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {WeekComponent} from './components/pages/week/week.component';
import {MonthComponent} from './components/pages/month/month.component';
import {SettingsComponent} from './components/pages/settings/settings.component';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'week',
    component: WeekComponent
  },
  {
    path: 'month',
    component: MonthComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
