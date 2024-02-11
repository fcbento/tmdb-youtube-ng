import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { LoaderComponent } from './loader.component';
import { LoaderService } from '../services/loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [LoaderService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoading and message observables', () => {
    expect(component.isLoading).toBeInstanceOf(Observable);
    expect(component.message).toBeInstanceOf(Observable);
  });

  it('should call handleLoadingMessage on ngOnInit', () => {
    const handleLoadingMessageSpy = jest.spyOn(component, 'handleLoadingMessage');
    component.ngOnInit();
    expect(handleLoadingMessageSpy).toHaveBeenCalled();
  });

  it('should update loadingMessage when message changes', () => {
    const message = '';
    const messageSubject = new Subject<string>();
    jest.spyOn(loaderService, 'open');
    component.ngOnInit();
    messageSubject.next(message);
    expect(component.loadingMessage).toEqual(message);
  });
});
