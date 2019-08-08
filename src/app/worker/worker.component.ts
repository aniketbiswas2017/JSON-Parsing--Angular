import { Component, OnInit } from '@angular/core';
import { WorkingService } from '../working.service';
import { IWorker } from '../worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  public worker = [];
  Iworker: IWorker[] = [];


  constructor(private _workingService : WorkingService) { }

  ngOnInit() {
    this._workingService.getWorker()
        .subscribe((data) => {this.worker = data as [];
          console.log(this.worker);
  });
  }}