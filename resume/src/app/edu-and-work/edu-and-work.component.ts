import { Component } from '@angular/core';

@Component({
  selector: 'app-edu-and-work',
  templateUrl: './edu-and-work.component.html',
  styleUrls: ['./edu-and-work.component.scss']
})
export class EduAndWorkComponent {
  isContentLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 200);
  }
}
