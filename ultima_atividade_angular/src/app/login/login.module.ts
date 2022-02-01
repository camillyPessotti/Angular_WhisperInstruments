import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgModel

  ],
  declarations: [TelaLoginComponent]
})
export class LoginModule { }
