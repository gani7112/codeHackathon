import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, Router, Params, ParamMap, NavigationEnd, NavigationStart } from '@angular/router';
import { PreviousRouteService } from '../prevousRoute.service';

const routeArray: Routes = [];
@Component({
  selector: 'app-codeathonparent',
  templateUrl: './codeathonparent.component.html',
  styleUrls: ['./codeathonparent.component.css']
})

export class CodeathonparentComponent implements OnInit {
  obj: any = {};
  header = [];
  routeParameters: Params = [];

  @Input()
  inputData

  @Input()
  displayheaderonload
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private previousRoute: PreviousRouteService) { }


  //program starts here
  ngOnInit() {

    this.getkeys(this.inputData)
    var firstColumn = this.header[0];
    //display first column by default
    this.obj["display" + firstColumn] = true;
    this.obj[firstColumn] = this.inputData[firstColumn];
  }

  ngAfterViewInit() {
    this.router.events.subscribe(
      x => {
        if (x instanceof NavigationEnd) {
        }
      }
    )
  }

  //extracts key names and pushes it to header array; which will be data for header of app
  getkeys(x) {
    for (let i in x) {
      if (x.hasOwnProperty(i)) {
        this.header.push(i);
      }
    }
  }

  next(data, index) {
    var currentColumnkey = this.header[index];
    var nextcolumnkey = this.header[index + 1];
    this.hideOrDisplayColumns(index);
    this.nextColumnData(data, index, currentColumnkey, nextcolumnkey);
    this.routing(data, currentColumnkey)
  }

  //shows columns before index and hides columns after index
  hideOrDisplayColumns(index) {
    for (let x = 0; x <= this.header.length; x++) {
      let next = this.header[x + 1];
      if (x <= (index)) {
        this.obj["display" + next] = true;
      }
      else {
        this.obj["display" + next] = false;
      }
    }
  }

  //extracts next column data
  nextColumnData(data, index, currentColumnkey, nextcolumnkey) {
    this.obj[nextcolumnkey] = [];
    if (this.inputData[nextcolumnkey])
      this.inputData[nextcolumnkey].forEach(element => {
        if (element[currentColumnkey + "id"] === data.id) {
          this.obj[nextcolumnkey].push(element)
        }
      })
  }

  //push route params
  routing(data, currentColumnkey) {
    var example = {}
    example[currentColumnkey] = data.name
    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: example, queryParamsHandling: 'merge' })
  }
}




