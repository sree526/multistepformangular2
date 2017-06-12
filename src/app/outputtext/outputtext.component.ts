import { Component, OnInit } from '@angular/core';
import {enterandleaveAnimation} from '../animations';
import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-outputtext',
  templateUrl: './outputtext.component.html',
  styleUrls: ['./outputtext.component.css'],
  animations:[enterandleaveAnimation]
})

export class OutputtextComponent implements OnInit {
loadAPI: Promise<any>;
loadAPI1:Promise<any>;
  constructor() { }

  ngOnInit() {
     this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
  })
   this.loadAPI1 = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript1();
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
 public loadScript1() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url1;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    
}
}
const url="../src/app/outputtext/load.js";
const url1="../src/app/slobevents/datatable.js" 