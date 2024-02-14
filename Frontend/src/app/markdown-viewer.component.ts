import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: 'markdown-viewer.component.html',
})
export class MarkdownViewerComponent {
  convertedHtml: string = '';

  loadMarkdownFile() {
    const markdownContent = this.convertedHtml;
  }
}
