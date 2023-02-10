import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterComponentComponent } from './writer-component.component';

describe('WriterComponentComponent', () => {
  let component: WriterComponentComponent;
  let fixture: ComponentFixture<WriterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
