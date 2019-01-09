import { Component } from '@angular/core';
import * as d31 from 'd3'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Code Hackathon';

  x = {
    locations: ["hyderabad", "bangalore"],
    sites: {
      "hyderabad": ["HDC1", "HDC2", "HDC3", "HDC4"],
      "bangalore": ["BDC1", "BDC2", "BDC3", "BDC4"]
    },
    buildings: {
      "hyderabadHDC1": ["towera", "towerb", "towerc"],
      "hyderabadHDC2": ["towerd", "towere", "towerf"]
    },
    floors: {
      "hyderabadHDC1towera": ['floor1', 'floor2', 'floor3'],
      "hyderabadHDC1towerb": ['floor1', 'floor2', 'floor3']
    },
    bays: {
      "hyderabadHDC1towerafloor1": ['bay1', 'bay2', 'bay3'],
      "hyderabadHDC1towerafloor2": ['bay1', 'bay2', 'bay3'],
    },
    details: {
      "hyderabadHDC1towerafloor1bay1": ["totalseats : 94", "serialnumber : 401 to 494"],
      "hyderabadHDC1towerafloor1bay2": ["totalseats : 94", "serialnumber : 401 to 494"]
    }
  }
}
