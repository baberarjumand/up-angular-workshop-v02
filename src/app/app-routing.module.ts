import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';
import { FlexboxComponent } from './pages/flexbox/flexbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent,
  },
  {
    path: '**',
    redirectTo: 'bootstrap',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
