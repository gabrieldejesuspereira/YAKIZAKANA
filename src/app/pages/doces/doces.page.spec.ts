import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocesPage } from './doces.page';

describe('DocesPage', () => {
  let component: DocesPage;
  let fixture: ComponentFixture<DocesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
