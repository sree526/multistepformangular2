import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientNameEntryComponent } from './client-name-entry/client-name-entry.component';
import { SlobeventsComponent } from './slobevents/slobevents.component';
import { EventDocumentComponent } from './event-document/event-document.component';
import { RolesComponent } from './roles/roles.component';
import { DocumentrolesComponent } from './documentroles/documentroles.component';
import { OutputtextComponent } from './outputtext/outputtext.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import {ActiveclassService} from './activeclass.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientNameEntryComponent,
    SlobeventsComponent,
    EventDocumentComponent,
    RolesComponent,
    DocumentrolesComponent,
    OutputtextComponent,
    MaindashboardComponent,   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'',
      redirectTo:'/login',
      pathMatch:'full'
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'maindashboard',
      component:MaindashboardComponent,
      children:[
        {
      path:'dashboard',
      component:DashboardComponent,
      children:[
        {
          path:'ClientNameEntry',
      component:ClientNameEntryComponent

        },
        {
          path:'slobevents',
          component:SlobeventsComponent
        },
        {
          path:'EventDocument',
          component:EventDocumentComponent
        },
        {
          path:'roles',
          component:RolesComponent
        },
        {
          path:'documentroles',
          component:DocumentrolesComponent
        },
        {
          path:'outputtext',
          component:OutputtextComponent
        }
      ]
        }
      ]
    }
    ])    
  ],
 providers:[ActiveclassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
