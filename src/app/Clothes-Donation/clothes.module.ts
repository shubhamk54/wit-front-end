import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ClothesInputComponent } from './clothes-input.component';
@NgModule({
  declarations: [
    ClothesInputComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'clothes', component: ClothesInputComponent }
    ])
  ]
})
export class ClothesModule { }
