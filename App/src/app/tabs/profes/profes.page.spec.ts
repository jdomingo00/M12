import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesPage } from './profes.page';

describe('ProfesPage', () => {
  let component: ProfesPage;
  let fixture: ComponentFixture<ProfesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
