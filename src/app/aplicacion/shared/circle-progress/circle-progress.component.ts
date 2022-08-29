import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {
  @Input() progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let scrollProgress = document.getElementById('progress');
    scrollProgress!.style.background = `conic gradient(#008fff ${this.progress}%, #f2f2f4 ${this.progress}%)`
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData()
  }

}
