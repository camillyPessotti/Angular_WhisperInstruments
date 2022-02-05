import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { FormsModule, NgModel} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgModel
  ],
  declarations: [TelaHomeComponent]
})
export class HomeModule { }
