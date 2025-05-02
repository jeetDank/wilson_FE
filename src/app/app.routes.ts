import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'reception', pathMatch: 'full' },
    { 
      path: 'features', 
      loadChildren: () => import('./modules/features/features.module').then(m => m.FeaturesModule) 
    },
    { 
      path: 'reception', 
      loadChildren: () => import('./modules/reception-ops/reception-ops.module').then(m => m.ReceptionOpsModule) 
    },
    
];
