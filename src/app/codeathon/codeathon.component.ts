import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'codeathon',
  templateUrl: './codeathon.component.html',
  styleUrls: ['./codeathon.component.css']
})
export class CodeathonComponent implements OnInit {
  selectedItem
  @Input() inputData
  @Output() outputData = new EventEmitter() 
  constructor() { }

  ngOnInit() { 
  }

  emitdata(data){
    this.outputData.emit(data);
    this.selectedItem = data;
  }
}
