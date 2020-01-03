import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatAmigoPage } from './chat-amigo.page';

describe('ChatAmigoPage', () => {
  let component: ChatAmigoPage;
  let fixture: ComponentFixture<ChatAmigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAmigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatAmigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
