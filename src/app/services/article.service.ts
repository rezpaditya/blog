import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseURL = 'https://api.respa.nl'
  
  constructor(
    private http: HttpClient
  ) {}

  getArticles() {
    return this.http.get<Article[]>(`${this.baseURL}/articles/?skip=0&limit=100`)
  }

  getArticleById(articleId: number) {
    return this.http.get<Article>(`${this.baseURL}/articles/${articleId}`)
  }
}
