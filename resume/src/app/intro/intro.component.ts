import { Component } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  activeTab: string = '';
  showButtons: boolean = true;

  constructor(
    private tabService: TabService
    ) {}

  navigateToTab(tab: string) {
    this.tabService.navigateToTab(tab);
  }
}
