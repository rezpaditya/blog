import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  articles: Article[] = []
  
  constructor(
    private articleService: ArticleService
  ) {
    this.getArticles()
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getArticles() {
    this.articleService.getArticles().subscribe((response) => {
      this.articles = response
    })
  }
}
