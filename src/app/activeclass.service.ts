import { Injectable } from '@angular/core';
import {Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ActiveclassService {

  constructor(private http:Http) { }
  private slobevents:boolean;
  private eventsdocuments:boolean;
  private rolesclass:boolean;
  private documentroles:boolean;
  private outputtext:boolean;
 
  setrolesclass(rolesclass){
    this.rolesclass=rolesclass;
  }
  getrolesclass(){
    return this.rolesclass;
  }
   setslobeventsclass(slobevents){
    this.slobevents=slobevents;
      console.log(this.slobevents);
  }
  getslobeventsclass(){
    console.log("in get"+this.slobevents);
    return this.slobevents;
    
  }
   seteventsdocuementclass(eventsdocuments){
    this.eventsdocuments=eventsdocuments;
  }
  geteventdocumentsclass(){
    return this.eventsdocuments;
  }
   setdocumentrolesclass(documentroles){
    this.documentroles=documentroles;
  }
  getdocumentrolesclass(){
    return this.documentroles;
  }
  setoutputtextclass(outputtext){
    this.outputtext=outputtext;
  }
  getoutputtextclass(){
    return this.outputtext;
  }
  getjson():Promise<JSON>{
    return this.http.get(url).toPromise().then(response=>response.json());
  }

}
const url="../src/data.json";