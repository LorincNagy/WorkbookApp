import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './markdown-viewer.component'; // Importáltad a komponenst
@NgModule({
  declarations: [
    AppComponent,
    MarkdownViewerComponent, // Itt hozzáadtad a MarkdownViewerComponent-et a deklarációkhoz
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
