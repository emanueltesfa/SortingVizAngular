import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  array1: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  resetArray() {
    this.array1.length = 0;
    for (let i = 0; i < 100; i++){
      this.array1.push(Math. floor(Math. random() * 1000) + 5);

    }

    /* this.array1.forEach(element => {
      console.log(element);
    }); */

  }

}
