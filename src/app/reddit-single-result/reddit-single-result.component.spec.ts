import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditSingleResultComponent } from './reddit-single-result.component';

describe('RedditSingleResultComponent', () => {
  let component: RedditSingleResultComponent;
  let fixture: ComponentFixture<RedditSingleResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditSingleResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditSingleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
