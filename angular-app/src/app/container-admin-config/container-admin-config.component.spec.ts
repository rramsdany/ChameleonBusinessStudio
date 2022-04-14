import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAdminConfigComponent } from './container-admin-config.component';

describe('ContainerAdminConfigComponent', () => {
  let component: ContainerAdminConfigComponent;
  let fixture: ComponentFixture<ContainerAdminConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAdminConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAdminConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
