import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'aws-poc-feature-one',
  template: `
    <h2 style="color: red">feature one</h2>

    <router-outlet></router-outlet>
  `,
})
export class FeatureOneComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureOneComponent,
        children: [
          {
            path: 'feature-two',
            loadChildren: () =>
              import('@aws-poc/feature-two').then((m) => m.FeatureTwoModule),
          },
        ],
      },
    ]),
  ],
  declarations: [FeatureOneComponent]
})
export class FeatureOneModule {}
