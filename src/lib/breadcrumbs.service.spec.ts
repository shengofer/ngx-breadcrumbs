import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BreadcrumbsService } from './ngx-breadcrumbs.service';


describe('breadcrumbs::BreadcrumbsService', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BreadcrumbsService
      ]
    });

    http = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BreadcrumbsService], (service: BreadcrumbsService) => {
    expect(service).toBeTruthy();
  }));

});
