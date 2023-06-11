import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{
  article: Article | undefined

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap
    const articleIdFromRoute = Number(routeParam.get('articleId'))
    this.articleService.getArticleById(articleIdFromRoute).subscribe((response) => this.article = response)
  }
}
