import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { BalefireComponent } from './components/balefire/balefire.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    LottieAnimationViewModule.forRoot(),
    RouterModule,
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [
    HomeComponent,
    GettingStartedComponent,
    AboutComponent,
    ResourcesComponent,
    BalefireComponent,
  ],
  exports: [
  ],
  providers: [
  ],
})
export class CoreRootModule { }

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreRootModule,
      providers: [
      ],
    };
  }
}
