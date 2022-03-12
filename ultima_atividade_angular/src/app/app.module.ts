import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { TelaHomeComponent } from './home/tela-home/tela-home.component';
import { TelaCarrinhoComponent } from './carrinho/tela-carrinho/tela-carrinho.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";

const routes: Routes = [
  {path: '', component: TelaHomeComponent},
  {path: 'tela-login', component: TelaLoginComponent},
  {path: 'tela-carrinho', component: TelaCarrinhoComponent}  
]

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaHomeComponent,
    TelaCarrinhoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    RouterModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
