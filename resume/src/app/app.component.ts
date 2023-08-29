import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TabService } from './tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTab: string = '';
  showButtons: boolean = true;

  constructor(
    private router: Router,
    public tabService: TabService
    ) {}

  onTabClicked(tab: string) {
    this.tabService.navigateToTab(tab);
  }

  toggleButtons(show: boolean) {
    this.showButtons = show;
  }

  goBackIntro() {
    this.tabService.navigateToIntro();
  }
}
