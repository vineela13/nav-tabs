import { AddEnergyScoreService } from './../../services/add-energy-score.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FacadeService } from 'src/app/services/facade.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-energiescores',
  templateUrl: './energiescores.component.html',
  styleUrls: ['./energiescores.component.scss']
})

export class EnergiescoresComponent implements OnInit, AfterViewInit {
  @ViewChild('scoreGraph', { static: true }) scoreGraphRef!: any;
  @ViewChild('loginButton') loginButton: ElementRef | undefined;
  energyScore: any = []
  energyScoreMonths: any = []
  energyScoreValues: any = []
  rangevalue = 0;
  apiValue: any = 0;
  isRegistered: any = false;
  rangeNumber: any;
  error: any;
  isCLickedOkForFirstTime: boolean = false;
  public chart: any;
  UserEnergyAverageScore: any;
  userEnergyAverage: any;
  public myChart: any;
  grapharea = document.getElementById('MyChart');
  userTrendScore: any;
  userTrendLineData: any;
  userTrendLineColor: any;
  userTrendCurrent: any;
  currentAverageColor: any;
  maandColor: any;
  maandTextColor: any;
  trendTextColor: any;
  averageTextColor: any;
  averageCTextColor: any;
  trendCTextColor: any;
  maandCTextColor:any;
  constructor(private energyList: FacadeService, private _router: Router, private facadeService: FacadeService, private http: HttpClient, private addEnergyScoreService: AddEnergyScoreService, private toastrService: ToastrService) {
    //this.createChart();
  }

  numberRangeColor(value: any): any {
    switch (value) {
      case 1:
      case 2:
        return '#fff';
      case 3:
      case 4:
        return ' #fff';
      case 5:
        return '#fff'
      case 6:
      case 7:
        return '#fff'
      case 8:
      case 9:
        return ' #fff';
    }
  }

  setRangeColor(value: any): any {
    switch (value) {
      case 1:
      case 2:
        return '#CE0000';
      case 3:
      case 4:
        return ' #FFB052';
      case 5:
        return '#B4E773'
      case 6:
      case 7:
        return '#70B42D'
      case 8:
      case 9:
        return ' #438800';
    }
  }

  click(user: any) {
    user.active = !user.active
    // your code here....
  }
  ngOnInit() {
    //this.getUserEnergyScore();
    this.getUserEnergyAverage();
    this.getUserTrendScore();

  }

  ngAfterViewInit(): void {
    this.loginButton?.nativeElement.click();
    // this._router.navigate(['/', 'energiesscores']);
    // if(this.energyScoreValues!==''&& this.energyScoreValues!==undefined){
    //   this.createChart();
    // }
    //this.createChart();
    this.energyList.getUserEnergyScore().subscribe((response: any) => {
      this.energyScore = response.energyScores;
      this.energyScore.forEach((e: any) => {
        this.energyScoreMonths.push(e.month)
        this.energyScoreValues.push(e.score)
      });
      this.energyScoreMonths.reverse()
      this.energyScoreValues.reverse()
      // this.energyScoreValues[11] = 1
      if (this.energyScoreValues[11] >= 1 && this.energyScoreValues[11] < 3) {
        this.currentAverageColor = '#CE0000'
      }
      else if (this.energyScoreValues[11] >= 3 && this.energyScoreValues[11] < 4) {
        this.currentAverageColor = '#EB7100'
      }
      else if (this.energyScoreValues[11] >= 4 && this.energyScoreValues[11] < 5) {
        this.currentAverageColor = '#FFB052'
      }
      else if (this.energyScoreValues[11] >= 5 && this.energyScoreValues[11] < 6) {
        this.currentAverageColor = '#FDCC4F'
      }
      else if (this.energyScoreValues[11] >= 6 && this.energyScoreValues[11] < 7) {
        this.currentAverageColor = '#B4E773'
      }
      else if (this.energyScoreValues[11] >= 7 && this.energyScoreValues[11] < 8) {
        this.currentAverageColor = '#70B42D'
      }
      else if (this.energyScoreValues[11] >= 8 && this.energyScoreValues[11] < 10) {
        this.currentAverageColor = '#00924A'
      }
      this.createChart();
      // this.energyScoreMonths = this.energyScoreMonths.splice();
      // this.energyScoreValues = this.energyScoreValues.splice();
      // this.chart.update();
    })
  }
  // value
  valueChanged(e: any) {
    this.rangevalue = e.target.value;
  }

  addEnergyScore() {
    this.addEnergyScoreService.postEnergyScore({ energyScore: this.apiValue }).subscribe((data) => {
    },
      (error) => {
        this.error = this.toastrService.error('Energy score already exist for this month');
      },
    )
  }

  get(e: any) {
  }

  async getUserEnergyScore() {
    await this.energyList.getUserEnergyScore().subscribe((response: any) => {
      this.energyScore = response.energyScores;
      this.energyScore.forEach((e: any) => {
        this.energyScoreMonths.push(e.month)
        this.energyScoreValues.push(e.score)

      });
      this.energyScoreMonths.reverse()
      this.energyScoreValues.reverse()
      // this.energyScoreMonths = this.energyScoreMonths.splice();
      // this.energyScoreValues = this.energyScoreValues.splice();
      // this.chart.update();
    })
  }

  getUserEnergyAverage() {
    this.facadeService.userEnergyAverage().subscribe((data: any) => {
      this.UserEnergyAverageScore = data.averageUserScore;

    })
  }

  getUserTrendScore() {
    this.facadeService.userTrendScore().subscribe((data) => {
      this.userTrendScore = data;
      console.log(this.userTrendScore)
      this.userTrendLineData = [, , , , , , this.userTrendScore.secondAverage, , , , , this.userTrendScore.firstAverage]
      var userTrenddifference = this.userTrendScore.firstAverage - this.userTrendScore.secondAverage;
      if (userTrenddifference < -2) {
        this.userTrendLineColor = '#CE0000';
      }
      else if (userTrenddifference < -1 && userTrenddifference > -2) {
        this.userTrendLineColor = '#FFB052';
      }
      else if (userTrenddifference > -1 && userTrenddifference < 1) {
        this.userTrendLineColor = '#FDCC4F';
      }
      else if (userTrenddifference > 1 && userTrenddifference < 2) {
        this.userTrendLineColor = '#B4E773';
      }
      else if (userTrenddifference > 2) {
        this.userTrendLineColor = '#00924A';
      }

      this.userTrendScore = this.userTrendScore.diffrence;
      //this.userTrendCurrent = this.userTrendScore.firstAverage;
    })
  }
  // setup block

  // config block

  //initialization

  createChart() {
    // if (this.chart) this.chart.destroy(),
    //  Chart.register({
    //   id: 'horizontalDottedLine',
    //   // ...
    //   });
    this.chart = new Chart("MyChart", {

      options: {
        onClick: function (evt) {
        },
        plugins: {
          legend: {
            display: false
          },
          //p1: false
        },
        scales: {
          y: {
            ticks: {
              callback: function (value, index) {
                //if (value !== 0) return value + '';
                if (value === 0) return '';
                else return value + '';
              }
            },
          }
        },
      },
      type: 'bar',
      data: {

        labels: this.energyScoreMonths,
        datasets: [
          {
            label: "energie scores",
            barPercentage: 0.4,
            data: this.energyScoreValues,
            // data: [1,2,3,4,5,6,7,8,9,10,9,2],
            borderRadius: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,],
            backgroundColor: [
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              '#E4E7EB',
              this.currentAverageColor
            ],
            order: 1,
          },
          // line
          // {
          //   label: "trend score",
          //   // barPercentage: 0.4,
          //   data: this.userTrendLineData,
          //   spanGaps: true,
          //   // data: [1,2,3,4,5,6,7,8,9,10,9,2],
          //   // borderRadius: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,],
          //   backgroundColor: [
          //     this.userTrendLineColor
          //   ],
          //   borderColor:[
          //     this.userTrendLineColor
          //   ],
          //   type :'line'

          // },

        ]
      },
      plugins: [],

    });
  }


  //block horizontalDottedLine
  horizontalDottedLine = {
    type: 'line',
    order: 2,
    id: 'horizontalDottedLine',
    beforeDatasetsDraw: (chart: any, args: any, options: any) => {
      const { ctx, chartArea: {
        top, right, bottom, left, width, height
      },
        scales: { x, y } } = chart;
      ctx.save();

      //draw line
      ctx.strokeStyle = 'green';
      ctx.setLineDash([5, 5])
      ctx.strokeRect(left, y.getPixelForValue(this.UserEnergyAverageScore), width, 0);
      ctx.restore();
    }
  }


  addTrendToChart() {
    var trendDataset = {
      label: "trend score",
      // barPercentage: 0.4,
      data: this.userTrendLineData,
      spanGaps: true,
      // data: [1,2,3,4,5,6,7,8,9,10,9,2],
      // borderRadius: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,],
      backgroundColor: [
        this.userTrendLineColor
      ],
      borderColor: [
        this.userTrendLineColor
      ],
      type: 'line'

    }
    this.chart.config.plugins.splice(0);

    this.chart.data.datasets.push(trendDataset);
    this.chart.update();
    this.trendTextColor = '#DDF1E5';
    this.maandTextColor = 'white';
    this.averageTextColor = 'white'

    this.trendCTextColor = "#00924A"
  }

  resetChart() {
    this.chart.config.plugins.splice(0);
    this.chart.data.datasets.forEach((dataset: any, index: any) => {
      if (dataset.label == "trend score")
        this.chart.data.datasets.splice(index, 1);
    });
    this.chart.update();
    // this.maandColor = "#DDF1E5";
    this.trendTextColor = 'white';
    this.maandTextColor = "#DDF1E5";
    this.averageTextColor = 'white';
    this.maandCTextColor = "DDF1E5"
    // this.averageCTextColor ="white";


  }

  addAverageToChart() {
    this.chart.data.datasets.forEach((dataset: any, index: any) => {
      if (dataset.label == "trend score")
        this.chart.data.datasets.splice(index, 1);
    });

    this.chart.config.plugins.push(this.horizontalDottedLine);
    //Chart.register(this.horizontalDottedLine);
    this.chart.update();
    this.averageCTextColor = "#00924A";
    this.trendTextColor = 'white';
    this.maandTextColor = "white"
    this.averageTextColor = '#DDF1E5'
  }


}
