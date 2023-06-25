import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleAlertsComponent } from './components/article-alerts/article-alerts.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleAlertsComponent,
    ArticleDetailsComponent,
    ShareButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
