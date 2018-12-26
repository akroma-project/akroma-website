import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isCollapsed = true;
  condition = false;
  constructor() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 3 && this.isCollapsed || !this.isCollapsed) {
      this.condition = true;
    } else {
      this.condition = false;
    }
  }

}
