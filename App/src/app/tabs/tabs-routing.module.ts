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
        path: '',
        redirectTo: '/tabs/day',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
