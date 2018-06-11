import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('data') data: any[];
  @Input('labels') labels: string[];
  @Input('charType') charType: string;
  @Input('leyend') leyend: string;

  // Doughnut
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string;

  constructor() { }

  ngOnInit() {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = this.data;
    this.doughnutChartType = this.charType;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
