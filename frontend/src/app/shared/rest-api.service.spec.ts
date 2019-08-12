import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestApiService } from './rest-api.service';
import { Message } from './message';

describe('RestApiService', () => {

  let service: RestApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestApiService]
    });
    service = TestBed.get(RestApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Service testing with HTTP client', () => {
    // Arrange
    const response = {
      message: 'Dummy'
    };

    // Act and assert
    service.getMessage().subscribe((data: Message) => {
      expect(data.message).toEqual('Dummy');
    });

    // Assert
    const request = httpTestingController.expectOne('https://fir-860a8.web.app/api1');
    expect(request.request.method).toEqual('GET');
    request.flush(response);
    httpTestingController.verify();
  });
});
