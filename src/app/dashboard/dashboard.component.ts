import { Component, OnInit, NgZone,trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {
  width:number;
  height:number;
  isHidden; 
  isShown;
  isHidden1;
  isShown1;
  iszerowidth;
  agreed:boolean;
   isStatusButtonsVisible1;
  isCollapseButtonVisible1;
    isStatusButtonsVisible2;
  isCollapseButtonVisible2;
  isviewfullvisible
  statusbuttonsheight;
  innerWidth:any;
  innerHeight:any;
  counter:number=0;
  rolesclass:boolean;
  slobevents:boolean;
  eventsdocument:boolean;
  outputtext:boolean;
  documentroles:boolean;
  constructor(private ngZone:NgZone,private activeclass:ActiveclassService) {
   this.slobevents=this.activeclass.getslobeventsclass();
   console.log(this.slobevents);
    this.isHidden1=true;
              this.isShown1=false;
     this.innerHeight = (window.screen.height) ;
        this.innerWidth = (window.screen.width) ;
     
        if(this.innerWidth>700){
          
           this.isHidden=true;
               this.isShown=false;
               this.isHidden1=false;
               this.isShown1=true;
               this.isStatusButtonsVisible1=true;
              this.isCollapseButtonVisible2=true;
            
        }
        else{
          this.isHidden=false;
              this.isShown=true;
              this.isHidden1=true;
              this.isShown1=false;
               this.isStatusButtonsVisible1=false;
               this.isviewfullvisible=true;
                this.isCollapseButtonVisible2=false;


        }
  
    window.onresize = (e) =>
    {
       this.ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            console.log("width"+this.width);
            if(this.width>700){
              this.isHidden=true;
               this.isShown=false;
               this.isHidden1=false;
               this.isShown1=true;
               this.isStatusButtonsVisible1=true;
              this.isCollapseButtonVisible2=true;
              this.isviewfullvisible=false;
               console.log("isHidden1"+this.isHidden1+"isShown1"+this.isShown1);
            }
            else{
              this.isHidden=false;
              this.isShown=true;
              this.isHidden1=true;
              this.isShown1=false;
               this.isStatusButtonsVisible1=false;
               this.isviewfullvisible=true;
                this.isCollapseButtonVisible2=false;
              // this.statusbuttonsheight=true;
            }
        });
    };
   }
   collapsebutton(inc){     
    this.counter+=inc;
    console.log(this.counter);
    if(this.counter%2!=0){
              this.isHidden1=false;
              this.isShown1=true;
                this.isStatusButtonsVisible1=true;
                this.isviewfullvisible=false;
                this.isCollapseButtonVisible2=true;
    }
    else {
               this.isHidden1=true;
               this.isShown1=false;
               this.isStatusButtonsVisible1=false;
                this.isviewfullvisible=true;
                this.isCollapseButtonVisible2=false;

    }
   }

  ngOnInit() {

  }

}

