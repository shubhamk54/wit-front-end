import { NgModule } from '@angular/core';
// import { MedsInputComponent } from './meds-input.component.html';
// import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { MedsInputComponent } from './meds-input.component';
@NgModule({
  declarations: [
    MedsInputComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'medicine', component: MedsInputComponent }
    ])
  ]
})
export class MedicineModule { }
