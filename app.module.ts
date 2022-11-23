import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import {
  IPublicClientApplication,
  PublicClientApplication,
  InteractionType,
} from '@azure/msal-browser';
import {
  MsalGuard,
  MsalInterceptor,
  MsalBroadcastService,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalGuardConfiguration,
  MsalRedirectComponent,
} from '@azure/msal-angular';

import {
  msalConfig,
  loginRequest,
  protectedResources,
} from './Auth/auth-config';
import { LayOutComponent } from './lay-out/lay-out.component';
import { CommonModule } from '@angular/common';
import { EnergiescoresComponent } from './components/energiescores/energiescores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnderdelenComponent } from './components/onderdelen/onderdelen.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ToastrModule } from 'ngx-toastr';
import { AfdelingComponent } from './components/afdeling/afdeling.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  protectedResourceMap.set(
    protectedResources.todoListApi.endpoint,
    protectedResources.todoListApi.scopes
  );

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest,
  };
}

@NgModule({
  declarations: [AppComponent, LayOutComponent, EnergiescoresComponent, OnderdelenComponent, PrivacyComponent, AfdelingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates : true,
      tapToDismiss : true,
      closeButton: true,
      progressBar: true
    }),
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
