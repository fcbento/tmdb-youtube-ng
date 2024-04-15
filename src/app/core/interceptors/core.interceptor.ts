import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseData } from '../models/response-data.model';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                event = event.clone({ body: this.body(event.body) });
            }
            return event;
        }));
    }

    private body(body: any): any {
        if (body.results?.length) {
            return {
                page: body.page,
                results: body.results,
                totalPages: body.total_pages,
                totalResults: body.total_results
            }
        }
        
    }

}