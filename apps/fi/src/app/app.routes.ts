import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-one',
    loadChildren: () =>
      import('@aws-poc/feature-one').then((m) => m.FeatureOneModule),
  },
];
