import { Component, OnInit } from '@angular/core';
import { WorkingService } from '../working.service';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.css']
})
export class WorkOrdersComponent implements OnInit {

  name : string;
  public workorders = [];

  constructor(private _workingService : WorkingService) { }

  ngOnInit() {
    this._workingService.getWorkOrder()
        .subscribe((data) => {this.workorders = data;
          console.log(this.workorders);
  });
  }

Search(){
  this.workorders = this.workorders.filter(res=> {
    return res.workorders.orders.name.match(this.workorders);
  });
}



}


