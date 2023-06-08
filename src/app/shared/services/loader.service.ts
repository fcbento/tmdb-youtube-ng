import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  isLoading = new Subject<boolean>();
  message = new Subject<string>();

  constructor() { }

  open(message?: string): void { 
    this.isLoading.next(true);
    this.message.next(message);
  }

  close(): void { 
    this.isLoading.next(false);
  }

 }
