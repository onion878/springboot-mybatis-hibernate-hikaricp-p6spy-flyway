import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgButtonModule} from './button/btn.module';

export {NgButtonModule, ButtonComponent} from './button/btn.module';

const NGB_MODULES = [
    NgButtonModule
];

@NgModule({
    imports: [
        NgButtonModule.forRoot()
    ],
    exports: NGB_MODULES
})
export class NgAllRootModule {
}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgAllModule {
    static forRoot(): ModuleWithProviders { return {ngModule: NgAllRootModule}; }
}