import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPostComponent } from './socialPosts.component';

describe('SocialPostComponent', () => {
  let component: SocialPostComponent;
  let fixture: ComponentFixture<SocialPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
