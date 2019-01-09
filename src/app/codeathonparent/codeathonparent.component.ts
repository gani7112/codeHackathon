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
    this.obj["display" + firstColumn] = true;
    this.obj[firstColumn] = this.inputData[firstColumn]
  }

  next(data, index) {
    var currentColumnkey = this.header[index]
    var nextcolumnkey = this.header[index + 1]
    this.obj['temp'] = '';

    this.obj['temp' + currentColumnkey] = data;

    for (var x = 0; x <= this.header.length; x++) {
      let next = this.header[x + 1];
      let current = this.header[x];
      if (x <= (index)) {
        this.obj["display" + next] = true;
        this.obj['temp'] = this.obj['temp'] + this.obj['temp' + current];
      }
      else {
        this.obj["display" + next] = false;
      }
    }

    if (!this.inputData[nextcolumnkey][this.obj.temp])
      this.obj["display" + nextcolumnkey] = false;
    this.obj[nextcolumnkey] = this.inputData[nextcolumnkey][this.obj.temp]
  }
}
