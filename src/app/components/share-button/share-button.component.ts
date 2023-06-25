import { Component } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent {
  showTooltip: boolean = false;
  tooltipText: string = '';

  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

  shareOnFacebook() {
    // Replace with your Facebook sharing logic
    this.tooltipText = 'Share on Facebook';
  }

  shareOnTwitter() {
    // Replace with your Twitter sharing logic
    this.tooltipText = 'Share on Twitter';
  }

  copyLink() {
    // Replace with your link copying logic
    this.tooltipText = 'Copy link to clipboard';
  }
}
