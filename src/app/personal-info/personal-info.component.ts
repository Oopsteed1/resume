import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  isPopupVisible = false;
  phoneNumber = '0972503789'

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
