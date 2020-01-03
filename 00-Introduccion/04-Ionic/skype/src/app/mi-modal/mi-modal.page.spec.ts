import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiModalPage } from './mi-modal.page';

describe('MiModalPage', () => {
  let component: MiModalPage;
  let fixture: ComponentFixture<MiModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
