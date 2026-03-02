
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LayoutComponent } from './layout.component';
import { RoutesPath } from '../../constants/routes-path';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: `${RoutesPath.HOME}`,
        loadChildren: () =>
          import(
            '../../../modules/home/home.module'
          ).then((m) => m.HomeModule),
      },
      {
        path: `${RoutesPath.PRODUCTS}`,
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './ProductsModule',
          }).then(m => m.AppModule),
      },
      {
        path: `${RoutesPath.CART}`,
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './CartModule',
          }).then(m => m.AppModule),
      },
      { path: '', pathMatch: 'full', redirectTo: `${RoutesPath.HOME}` },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
