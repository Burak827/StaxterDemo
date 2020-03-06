import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestRatesComponent } from './views/pages/latest-rates/latest-rates.component';
import { LastThirtyComponent } from './views/pages/last-thirty/last-thirty.component';
import { TopFiveComponent } from './views/pages/top-five/top-five.component';

const routes: Routes = [
  { path: '', component: LatestRatesComponent, pathMatch: 'full' },
  { path: 'lastthirty/:cur', component: LastThirtyComponent },
  { path: 'lastthirty', component: LastThirtyComponent },
  { path: 'topfive', component: TopFiveComponent },

  // no layout routes
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
