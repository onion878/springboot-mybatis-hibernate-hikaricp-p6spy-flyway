import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonComponent} from './btn.component';
import {BtnConfig} from "./btn.config";

export {ButtonComponent} from './btn.component';
export {BtnConfig} from './btn.config';

@NgModule({declarations: [ButtonComponent], exports: [ButtonComponent], imports: [CommonModule], entryComponents: [ButtonComponent]})
export class NgButtonModule {
    static forRoot(): ModuleWithProviders { return {ngModule: NgButtonModule, providers: [BtnConfig]}; }
}
