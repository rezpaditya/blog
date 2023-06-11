import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAlertsComponent } from './article-alerts.component';

describe('ArticleAlertsComponent', () => {
  let component: ArticleAlertsComponent;
  let fixture: ComponentFixture<ArticleAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleAlertsComponent]
    });
    fixture = TestBed.createComponent(ArticleAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
