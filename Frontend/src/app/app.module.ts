import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './markdown/markdown-viewer.component'; // Győződj meg róla, hogy ez a sor helyes
import { HomeComponent } from './home-component/home-component.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, MarkdownViewerComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
