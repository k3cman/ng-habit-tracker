import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './components/pages/dashboard/dashboard.module';
import {WeekModule} from './components/pages/week/week.module';
import {MonthModule} from './components/pages/month/month.module';
import {SettingsModule} from './components/pages/settings/settings.module';
import {NotFoundModule} from './components/shared/not-found/not-found.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './components/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    WeekModule,
    MonthModule,
    SettingsModule,
    NotFoundModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
