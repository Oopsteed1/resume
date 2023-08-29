import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  isContentLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 200);
  }
}
