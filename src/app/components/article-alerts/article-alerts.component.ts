import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-alerts',
  templateUrl: './article-alerts.component.html',
  styleUrls: ['./article-alerts.component.scss']
})
export class ArticleAlertsComponent {

  @Input() article: Article | undefined;
  @Output() notify = new EventEmitter();

}
