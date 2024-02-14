import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';

@Component({
  selector: 'app-markdown-viewer',
  template: `<div [innerHTML]="convertedHtml"></div>`,
})
export class MarkdownViewerComponent implements OnInit {
  convertedHtml: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMarkdownFile();
  }

  loadMarkdownFile() {
    const markdownFilePath = 'assets/module_progbasics.md';
    this.http
      .get(markdownFilePath, { responseType: 'text' })
      .subscribe((markdown) => {
        this.convertedHtml = marked.parse(markdown);
      });
  }
}
