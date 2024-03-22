import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as marked from 'marked';

@Component({
  selector: 'app-markdown-viewer',
  template: `<div [innerHTML]="convertedHtml"></div>`,
})
export class MarkdownViewerComponent implements OnInit {
  convertedHtml: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const filename = params['filename'];

      this.loadMarkdownFile(filename);
    });
  }

  loadMarkdownFile(filename: string) {
    const markdownFilePath = `assets/${filename}.md`;
    this.http
      .get(markdownFilePath, { responseType: 'text' })
      .subscribe((markdown) => {
        this.convertedHtml = marked.parse(markdown);
      });
  }
}
