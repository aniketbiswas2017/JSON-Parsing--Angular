import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import { IWorkOrder, IWorker } from './worker';
import { Observable } from 'rxjs';

@Injectable()
export class WorkingService {

  constructor(private http: HttpClient) { }

  getWorkOrder() : Observable<IWorkOrder[]>{
    return this.http.get<IWorkOrder[]>('this.url');
  }


  getWorker() : Observable<IWorker[]>{
    return this.http.get<IWorker[]>('this.url');
  }
}

