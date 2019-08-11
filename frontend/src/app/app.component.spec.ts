import { TestBed, async, tick, fakeAsync, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestApiService } from './shared/rest-api.service';
import { of, Observable } from 'rxjs';
import { Message } from './shared/message';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: RestApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        RestApiService
      ]
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    service = TestBed.get(RestApiService);

  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', fakeAsync(() => {
    // Arrange
    const dummy = new Message();
    dummy.message = 'Dummy';
    spyOn(service, 'getMessage').and.returnValue(of(dummy));

    // Act
    component.ngOnInit();

    // Assert
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Dummy');
  }));

});
