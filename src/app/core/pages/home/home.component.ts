import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public lottie1: any;
  public lottie2: any;
  public lottie3: any;
  public lottie4: any;
  constructor() {
    this.lottie1 = {
      path: 'assets/animations/1.json',
    };
    this.lottie2 = {
      path: 'assets/animations/2.json',
    };
    this.lottie3 = {
      path: 'assets/animations/3.json',
    };
    this.lottie4 = {
      path: 'assets/animations/4.json',
    };
    for (let i = 0, len = window.localStorage.length; i < len; ++i) {
      const key = localStorage.key(i);
      if (key !== 'access_token' && key !== 'id_token' && key !== 'expires_at' && key !== 'akroma_ref') {
        window.localStorage.removeItem(key);
      }
    }
  }

  ngOnInit() {
  }
}
