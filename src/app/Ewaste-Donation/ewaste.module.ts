import { NgModule } from '@angular/core';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { EwasteInputComponent } from './ewaste-input.component';
@NgModule({
  declarations: [
    EwasteInputComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'ewaste', component: EwasteInputComponent }
    ])
  ]
})
export class EwasteModule { }
