import { Component } from '@angular/core';
import * as d31 from 'd3'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Code Hackathon';

  data = {
    "Locations": [
      {
        "id": "1",
        "name": "hyderabad"
      },
      {
        "id": "2",
        "name": "bangalore"
      },
      {
        "id": "3",
        "name": "chennai"
      }
    ],
    "Sites": [
      {
        "id": "1",
        "name": "HDC1",
        "Locationsid": "1"
      },
      {
        "id": "2",
        "name": "HDC2",
        "Locationsid": "1"
      },
      {
        "id": "3",
        "name": "HDC3",
        "Locationsid": "1"
      },
      {
        "id": "4",
        "name": "BDC1",
        "Locationsid": "2"
      },
      {
        "id": "5",
        "name": "BDC2",
        "Locationsid": "2"
      },
      {
        "id": "6",
        "name": "BDC3",
        "Locationsid": "2"
      }
    ],
    "Buildings": [
      {
        "id": "1",
        "name": "towerA",
        "Sitesid": "1"
      },
      {
        "id": "2",
        "name": "towerB",
        "Sitesid": "1"
      },
      {
        "id": "3",
        "name": "towerA",
        "Sitesid": "2"
      },
      {
        "id": "4",
        "name": "towerB",
        "Sitesid": "2"
      }
    ],
    "Floor": [
      {
        "id": "1",
        "name": "Floor1",
        "Buildingsid": "1"
      },
      {
        "id": "2",
        "name": "Floor2",
        "Buildingsid": "1"
      },
      {
        "id": "3",
        "name": "Floor1",
        "Buildingsid": "2"
      },
      {
        "id": "4",
        "name": "Floor2",
        "Buildingsid": "2"
      }
    ],
    "Bays": [
      {
        "id": "1",
        "name": "Bay1",
        "Floorid": "1"
      },
      {
        "id": "2",
        "name": "Bay2",
        "Floorid": "1"
      },
      {
        "id": "3",
        "name": "Bay1",
        "Floorid": "2"
      },
      {
        "id": "4",
        "name": "Bay2",
        "Floorid": "2"
      }
    ]
  }
}
