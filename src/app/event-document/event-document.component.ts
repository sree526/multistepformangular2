import { Component, OnInit } from '@angular/core';
import {enterandleaveAnimation} from '../animations';
import {ActiveclassService} from '../activeclass.service'
@Component({
  selector: 'app-event-document',
  templateUrl: './event-document.component.html',
  styleUrls: ['./event-document.component.css'],
  animations:[enterandleaveAnimation],
})
export class EventDocumentComponent implements OnInit {

  constructor(private activeclassService:ActiveclassService) { }

  ngOnInit() {
    this.activeclassService.seteventsdocuementclass(false);
  }

}
