import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrMaskerModule } from 'br-mask';

import { CardPage } from './card.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    BrMaskerModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardPage
      }
    ])
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
