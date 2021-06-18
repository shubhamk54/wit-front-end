import { Component } from '@angular/core';

function hello() {
  alert('Data Saved!!!');
}

@Component({
  templateUrl: './meds-input.component.html'
})
export class MedsInputComponent {
  public pageTitle = 'Medicine Donation Form';

  
  save(){
     hello()
   }
 
}
