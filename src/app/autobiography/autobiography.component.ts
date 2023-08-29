import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-autobiography',
  templateUrl: './autobiography.component.html',
  styleUrls: ['./autobiography.component.scss']
})
export class AutobiographyComponent {
  isContentLoaded = false;

  constructor(
    private router: Router,
    private tabService: TabService
    ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 200);
  }

  goToIntro() {
    this.router.navigate(['/']);
  }
}
