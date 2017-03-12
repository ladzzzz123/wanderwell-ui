import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);