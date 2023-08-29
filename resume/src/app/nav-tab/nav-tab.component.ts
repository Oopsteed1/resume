import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent {

  @Output() tabClicked = new EventEmitter<string>();
  activeTab: string = '';

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const activeTab = params['tab'];
      this.activeTab = activeTab;
    });
  }
}
