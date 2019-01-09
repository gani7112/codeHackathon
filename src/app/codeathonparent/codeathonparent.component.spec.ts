import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeathonparentComponent } from './codeathonparent.component';

describe('CodeathonparentComponent', () => {
  let component: CodeathonparentComponent;
  let fixture: ComponentFixture<CodeathonparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeathonparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeathonparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
