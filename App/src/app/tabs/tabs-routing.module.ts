import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('../tabs/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'day',
        loadChildren: () => import('../tabs/day/day.module').then( m => m.DayPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tabs/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'profes',
        loadChildren: () => import('./profes/profes.module').then( m => m.ProfesPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/day',
        pathMatch: 'full'
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
