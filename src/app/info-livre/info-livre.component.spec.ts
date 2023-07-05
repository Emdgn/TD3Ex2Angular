import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLivreComponent } from './info-livre.component';

describe('InfoLivreComponent', () => {
  let component: InfoLivreComponent;
  let fixture: ComponentFixture<InfoLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoLivreComponent]
    });
    fixture = TestBed.createComponent(InfoLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
