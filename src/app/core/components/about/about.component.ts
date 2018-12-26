import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  network: any;
  akroma: any;
  constructor(   ) { }

  ngOnInit() {
    // this.networkService
    //   .getNetworkOverview()
    //   .subscribe(x => {
    //     if (x.ok) {
    //       this.network = x.data;
    //     }
    //   });
    // this.akromaService
    //   .getOverview()
    //   .subscribe(x => this.akroma = x);
  }

}
