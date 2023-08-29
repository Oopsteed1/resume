import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private showButtons = true;
  private activeTab = '';

  constructor(private router: Router) { }

  getButtonsVisibility(): boolean {
    return this.showButtons;
  }

  setButtonsVisibility(value: boolean) {
    this.showButtons = value;
  }

  getActiveTab(): string {
    return this.activeTab;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  navigateToTab(tab: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { tab: tab }
    };
    this.router.navigate([], navigationExtras);
    this.setButtonsVisibility(false);
    this.setActiveTab(tab);
  }

  navigateToIntro() {
    this.router.navigate(['/']);
    this.setButtonsVisibility(true);
  }
}
