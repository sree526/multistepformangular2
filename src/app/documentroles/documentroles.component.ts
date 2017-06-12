import { Component, OnInit } from '@angular/core';
import {enterandleaveAnimation} from '../animations';
 import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-documentroles',
  templateUrl: './documentroles.component.html',
  styleUrls: ['./documentroles.component.css'],
  animations:[enterandleaveAnimation]
})
export class DocumentrolesComponent implements OnInit {
 Clients=availableclients;
  id: number;
  name: string;
  selectedclients:any[]=[];
  public loadAPI;
  Client2=this.selectedclients;
  constructor(private activeclass: ActiveclassService) { }
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


moveItem = function(items, from, to) {

        console.log('Move items: ' + items + ' From: ' + from + ' To: ' + to);
        //Here from is returned as blank and to as undefined
      //   for(let i=0;i<items.length;i++){
      //     for(let j=i;j<items.length;j++){
      //     var idx = from[i].name.indexOf(items[j]);
      //     if (idx != -1) {
      //         from.splice(idx, 1);
      //         to.push(items[i]);      
      //     }
      //   };
      // }
       items.forEach(function(item) {
         console.log(item);
          var idx = from.indexOf(item);
          console.log(idx);
          if (idx != -1) {
              from.splice(idx, 1);
              to.push(item);      
          }
        });
    };
    
moveAll = function(from, to) {

        console.log('Move all  From:: '+from+' To:: '+to);
        //Here from is returned as blank and to as undefined
          
        for(let i=0;i<from.length;i++) {
            to.push(from[i]);
        };
        from.length = 0;
    };   
     
}
export class Hero {
}
const availableclients:Hero[] =
 ['mahesh', 'suresh', 'sree'];
 const url="../src/app/slobevents/datatable.js" 