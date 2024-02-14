import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './markdown/markdown-viewer.component'; // Győződj meg róla, hogy ez a sor helyes

@NgModule({
  declarations: [
    AppComponent,
    MarkdownViewerComponent, // Győződj meg róla, hogy itt szerepel
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
