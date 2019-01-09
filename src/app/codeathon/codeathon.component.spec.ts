import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeathonComponent } from './codeathon.component';

describe('CodeathonComponent', () => {
  let component: CodeathonComponent;
  let fixture: ComponentFixture<CodeathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
