import { AfdelingComponent } from './components/afdeling/afdeling.component';
import { EnergiescoresComponent } from './components/energiescores/energiescores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { LayOutComponent } from './lay-out/lay-out.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { OnderdelenComponent } from './components/onderdelen/onderdelen.component';

const routes: Routes = [
  {
    path: 'onderdelen', component: OnderdelenComponent,
  },
  {
    path: 'privacy', component: PrivacyComponent,
  },
  {
    path: 'energiesscores', component: EnergiescoresComponent,
  },
  {
    path: 'afdeling', component: AfdelingComponent,
  },
  {
    path: '',
    component: LayOutComponent,
    canActivate: [MsalGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
