import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApComponent } from './task-ap.component';

describe('TaskApComponent', () => {
  let component: TaskApComponent;
  let fixture: ComponentFixture<TaskApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskApComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
