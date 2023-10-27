import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'aws-poc-feature-two',
  template: ` <h2 style="color: blue">feature two</h2> `,
})
export class FeatureTwoComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureTwoComponent,
      },
    ]),
  ],
  declarations: [FeatureTwoComponent],
})
export class FeatureTwoModule {}
