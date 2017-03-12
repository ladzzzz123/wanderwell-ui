import { NgModule }             from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'portland',
    loadChildren: 'app/portland/portland.module#PortlandModule',
    data: { preload: true }
  },
  {
    path: 'seattle',
    loadChildren: 'app/seattle/seattle.module#SeattleModule',
    data: { preload: true }
  },
  // { path: '',   redirectTo: '/seattle', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
