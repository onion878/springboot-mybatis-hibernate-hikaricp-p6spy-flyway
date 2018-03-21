import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { IndexComponent } from './components/index/index';
import { DetailComponent } from './components/index/detail';

const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: { title: '菜单一' }
    },
    {
        path: 'detail',
        component: DetailComponent,
        data: { title: '菜单二' }
    }
];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {


}