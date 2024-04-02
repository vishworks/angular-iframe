import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import (`./query-builder/query-builder.component`).then(x => x.QueryBuilderComponent)

    }
];
