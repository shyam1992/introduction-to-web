import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'introduction-to-web';
  currentRouteIndex = 0
  routes = ['/', 'tools','buildnig-blocks', 'html', 'css', 'js']

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToPrev() {
    if(this.currentRouteIndex > 0) {
      this.currentRouteIndex = this.currentRouteIndex - 1
      this.router.navigate([this.routes[this.currentRouteIndex]])
    }
  }
  navigateToNext() {
    if(this.currentRouteIndex < this.routes.length -1) {
      this.currentRouteIndex = this.currentRouteIndex + 1
      this.router.navigate([this.routes[this.currentRouteIndex]])
    }
  }

}
