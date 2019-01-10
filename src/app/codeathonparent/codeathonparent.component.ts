import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-codeathonparent',
  templateUrl: './codeathonparent.component.html',
  styleUrls: ['./codeathonparent.component.css']
})
export class CodeathonparentComponent implements OnInit {
  obj: any = {};
  header = [];
  @Input()
  inputData
  @Input()
  displayheaderonload
  constructor() { }

  //extracts keynames(attributes) from object and pushes it to header variable.
  getkeys(x) {
    for (let i in x) {
      if (x.hasOwnProperty(i)) {
        this.header.push(i);
      }
    }
  }

  ngOnInit() {
    this.getkeys(this.inputData)
    var firstColumn = this.header[0];
    //display first column by default
    this.obj["display" + firstColumn] = true;
    //data for first column
    this.obj[firstColumn] = this.inputData[firstColumn]
  }

  next(data, index) {
    this.hideOrDisplayColumns(index);
    this.nextColumnData(data, index);
  }

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

  nextColumnData(data, index) {
    var currentColumnkey = this.header[index]
    var nextcolumnkey = this.header[index + 1]
    this.obj[nextcolumnkey] = [];
    if (this.inputData[nextcolumnkey])
      this.inputData[nextcolumnkey].forEach(element => {
        if (element[currentColumnkey + "id"] === data.id) {
          this.obj[nextcolumnkey].push(element)
        }
      })
  }
}
