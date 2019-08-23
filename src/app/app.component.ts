import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phoenix-wc-wiki-ngx';

  sendCustomEvent() {
    const data = {
      name: 'DataSentThoughtCustomEvent'
    };
    const event = new CustomEvent('phoenix-wc-wiki-ngx-ce-data-sent-test', { detail: data });
    window.dispatchEvent(event);

  }
}
