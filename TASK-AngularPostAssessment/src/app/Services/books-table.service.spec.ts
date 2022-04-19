import { TestBed } from '@angular/core/testing';

import { BooksTableService } from './books-table.service';

describe('BooksTableService', () => {
  let service: BooksTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
