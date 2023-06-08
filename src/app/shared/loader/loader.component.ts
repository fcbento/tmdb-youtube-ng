import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Observable, Subscription, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  isLoading: Observable<boolean>;
  message: Observable<string>;  
  loadingMessage = '';
  subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
    this.message = this.loaderService.message;
  }

  ngOnInit(): void {
    this.handleLoadingMessage();
  }

  handleLoadingMessage(): void {
    this.subscription = this.message.pipe(
      distinctUntilChanged(),
      tap(message => this.loadingMessage = message)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
