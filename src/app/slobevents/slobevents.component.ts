import { Component, OnInit , HostBinding} from '@angular/core';
import {enterandleaveAnimation} from '../animations';
import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-slobevents',
  templateUrl: './slobevents.component.html',
  styleUrls: ['./slobevents.component.css'],
  animations:[enterandleaveAnimation],
})
export class SlobeventsComponent implements OnInit {
  Clients=availableclients;
  @HostBinding('@routerAnimation') routerAnimation=true;
  id: number;
  name: string;
  public loadAPI;
  constructor(private activeclassSerivce:ActiveclassService) { 
    
  }

  ngOnInit() {
     this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
  })
}
 public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    
}

  }
 const url="../src/app/slobevents/datatable.js" 
export class Hero {
  id: number;
  name: string;
}
const availableclients:Hero[] = [
      {
        id: 1, 
        name: 'mahesh'
      }, 
      {
        id: 2, 
        name: 'suresh'
      },
      {
        id: 3,
        name: 'sree'
      }
    ];
