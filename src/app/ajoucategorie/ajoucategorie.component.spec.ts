import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoucategorieComponent } from './ajoucategorie.component';

describe('AjoucategorieComponent', () => {
  let component: AjoucategorieComponent;
  let fixture: ComponentFixture<AjoucategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoucategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoucategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
