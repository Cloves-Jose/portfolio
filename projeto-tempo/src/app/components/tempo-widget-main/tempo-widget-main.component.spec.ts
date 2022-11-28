import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoWidgetMainComponent } from './tempo-widget-main.component';

describe('TempoWidgetMainComponent', () => {
  let component: TempoWidgetMainComponent;
  let fixture: ComponentFixture<TempoWidgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoWidgetMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempoWidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
