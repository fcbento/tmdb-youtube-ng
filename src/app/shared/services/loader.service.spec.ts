import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should emit true to isLoading subject when open() is called', () => {
    const message = 'Loading...';
    const spyNext = jest.spyOn(service.isLoading, 'next');
    service.open(message);
    expect(spyNext).toHaveBeenCalledWith(true);
    service.message.subscribe((value) => {
      expect(value).toEqual(message);
    });
  });

  it('should emit false to isLoading subject when close() is called', () => {
    const spyNext = jest.spyOn(service.isLoading, 'next');
    service.close();
    expect(spyNext).toHaveBeenCalledWith(false);
  });
});
