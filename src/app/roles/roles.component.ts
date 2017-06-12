import { Component, OnInit } from '@angular/core';
import {enterandleaveAnimation} from '../animations';
import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  animations:[enterandleaveAnimation]
})
export class RolesComponent implements OnInit {
public loadAPI;
public table;
  constructor(private activeclass:ActiveclassService) {
    this.table=false;
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
showtable(){
  this.table=true;
}

  }
 const url="../src/app/slobevents/datatable.js" 

