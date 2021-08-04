import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { DashGuard } from './helpers/dash.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'report',
    component: DashComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/sassep/search-metadata/search-metadata.module').then((m) => m.SearchMetaDataModule),
        canActivate: [DashGuard],
        data: {
          routerTitle: 'Buscar Servidor',
        }
      }
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
