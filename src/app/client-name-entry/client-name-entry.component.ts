import { Component, OnInit,trigger,Input ,Output,EventEmitter,NgZone,
  state,
  style,
  transition,
  animate } from '@angular/core';
  import {ActiveclassService} from '../activeclass.service'
import {DashboardComponent} from '../dashboard/dashboard.component'
@Component({
  selector: 'app-client-name-entry',
  templateUrl: './client-name-entry.component.html',
  styleUrls: ['./client-name-entry.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ClientNameEntryComponent implements OnInit {
  result;
  constructor(private ngZone:NgZone,private activeclass:ActiveclassService) {
  this.activeclass.getjson().then(results=>console.log(results));

   }

ngOnInit() {

  console.log(this.result);
  }

}
