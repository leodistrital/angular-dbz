import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroesListComponent } from './app-heroes-list.component';

describe('AppHeroesListComponent', () => {
  let component: AppHeroesListComponent;
  let fixture: ComponentFixture<AppHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHeroesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
