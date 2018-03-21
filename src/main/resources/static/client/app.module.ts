import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgAllModule} from './ng-materialize/NgAll.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {IndexComponent} from './components/index/index';
import {DetailComponent} from './components/index/detail';
import {DataGridComponent} from './ng-materialize/table/table.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        NgAllModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DataGridComponent,
        IndexComponent,
        DetailComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
