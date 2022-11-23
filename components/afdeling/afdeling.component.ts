import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { ChartDataset } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { AddEnergyScoreService } from 'src/app/services/add-energy-score.service';
import { FacadeService } from 'src/app/services/facade.service';
@Component({
  selector: 'app-afdeling',
  templateUrl: './afdeling.component.html',
  styleUrls: ['./afdeling.component.scss']
})
export class AfdelingComponent implements OnInit {
  @ViewChild('scoreGraph', { static: true }) scoreGraphRef!: any;
  @ViewChild('loginButton') loginButton: ElementRef | undefined;
  energyScore: any = []
  energyScoreMonths: any = []
  energyScoreValues: any = []
  rangevalue = 0;
  apiValue: any;
  isRegistered: any = false;
  rangeNumber: any;
  error: any;
  isCLickedOkForFirstTime: boolean = false;
  public chart: any;
  grapharea = document.getElementById('MyChart');
  departmentAverageScore: any;
  energyRecords: any;
  energyRecordsData: any;
  recordsM: any;
  departmentScoreValues: any=[];
  departmentScoreMonths: any=[];
  userTrendLineData : any;
  userTrendLineColor : any;
  currentAverageColor : any;
  maandColor: any;
  maandTextColor: any;
  trendTextColor: any;
  averageTextColor: any;
  averageCTextColor: any;
  trendCTextColor: any;
  maandCTextColor:any;
  constructor(private energyList: FacadeService, private _router: Router, private facadeService: FacadeService, private http: HttpClient, private addEnergyScoreService: AddEnergyScoreService, private toastrService: ToastrService) { }

  ngOnInit() {
    // this.getUserEnergyScore();


    this.getDepartmentAverage();
    this.getUserTrendDepartmentScore();
  }

  ngAfterViewInit(): void {

      this.facadeService.departmentMontlyScore().subscribe((data) => {
        this.energyRecordsData = data;
        this.recordsM = this.energyRecordsData.energyRecords;
        console.log("records")
        console.log(this.recordsM);
        this.recordsM.forEach((e: any) => {
          this.departmentScoreMonths.push(e.month)
          this.departmentScoreValues.push(e.score)
        });
        this.departmentScoreMonths.reverse()
        this.departmentScoreValues.reverse()

        if(this.departmentScoreValues[11] >= 1 && this.departmentScoreValues[11] < 3){
          this.currentAverageColor = '#CE0000'
        }
        else if(this.departmentScoreValues[11] >= 3 && this.departmentScoreValues[11] < 4){
          this.currentAverageColor = '#EB7100'
        }
        else if(this.departmentScoreValues[11] >= 4 && this.departmentScoreValues[11] < 5){
          this.currentAverageColor = '#FFB052'
        }
        else if(this.departmentScoreValues[11] >= 5 && this.departmentScoreValues[11] < 6){
          this.currentAverageColor = '#FDCC4F'
        }
        else if(this.departmentScoreValues[11] >= 6 && this.departmentScoreValues[11] < 7){
          this.currentAverageColor = '#B4E773'
        }
        else if(this.departmentScoreValues[11] >= 7 && this.departmentScoreValues[11] < 8){
          this.currentAverageColor = '#70B42D'
        }
        else if(this.departmentScoreValues[11] >= 8 && this.departmentScoreValues[11] < 10){
          this.currentAverageColor = '#00924A'
        }
        this.createChart();
        console.log(this.departmentScoreValues)
      })

    this.loginButton?.nativeElement.click();
    this.createChart();
  }


  valueChanged(e: any) {
    this.rangevalue = e.target.value;
  }

  getUserTrendDepartmentScore(){
    var userTrenddifference = 5 - 7;
      if (userTrenddifference < -2){
        this.userTrendLineColor = '#CE0000';
      }
      else if(userTrenddifference < -1 && userTrenddifference >= -2){
        this.userTrendLineColor = '#FFB052';
      }
      else if(userTrenddifference >= -1 && userTrenddifference < 1){
        this.userTrendLineColor = '#FDCC4F';
      }
      else if(userTrenddifference >= 1 && userTrenddifference < 2){
        this.userTrendLineColor = '#B4E773';
      }
      else if(userTrenddifference >= 2){
        this.userTrendLineColor = '#00924A';
      }
    }

  addEnergyScore() {
    this.addEnergyScoreService.postEnergyScore({ energyScore: this.apiValue }).subscribe((data) => {
    },
      (error: any) => {
        this.error = this.toastrService.error('Energy score already exist for this month');
      },
    )
  }

  // getUserEnergyScore() {
  //   this.energyList.getUserEnergyScore().subscribe((response: any) => {
  //     this.energyScore = response.energyScores;
  //     this.energyScore.forEach((e: any) => {
  //       this.energyScoreMonths.push(e.month)
  //       this.energyScoreValues.push(e.score)
  //     });
  //     this.energyScoreMonths.reverse()
  //     this.energyScoreValues.reverse()
  //   })
  // }

  getDepartmentMontlyScore() {
    this.facadeService.departmentMontlyScore().subscribe((data) => {
      this.facadeService.departmentMontlyScore().subscribe((data) => {
        this.energyRecordsData = data;
        this.recordsM = this.energyRecordsData.energyRecords;
        console.log("records")
        console.log(this.recordsM);
        this.recordsM.forEach((e: any) => {
          this.departmentScoreMonths.push(e.month)
          this.departmentScoreValues.push(e.score)
        });
        this.departmentScoreMonths.reverse()
        this.departmentScoreValues.reverse()
        console.log(this.departmentScoreValues)
      })
    })
  }

  getDepartmentAverage(){
    this.facadeService.departmentAverage().subscribe((data: any)=>{
     this.departmentAverageScore = data.averageDepartmentScore;
    })
  }


  get(e: any) {

  }

  createChart() {
    this.chart = new Chart("MyChart", {
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function(value, index) {
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
        labels: this.departmentScoreMonths,
        datasets: [
          {
            label: "energie scores",
            barPercentage: 0.4,
            data: this.departmentScoreValues,
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
          },
        ]
      },
      plugins: [],

    });
  }

  //block horizontalDottedLine
  horizontalDottedLine = {
    id: 'horizontalDottedLine',
    beforeDatasetsDraw: (chart: any, args: any, options: any) => {
      const { ctx, chartArea: {
        top, right, bottom, left, width, height
      },
        scales: { x, y } } = chart;
      ctx.save();


      ctx.strokeStyle = 'green';
      ctx.setLineDash([5, 5])
      ctx.strokeRect(left, y.getPixelForValue(this.departmentAverageScore), width, 0);
      ctx.restore();

    }
  }

  addTrendToDepartmentChart(){
    var trendDataset = {
      label: "trend score",
      // barPercentage: 0.4,
      data: [,,,,,,7,,,,,5],
      spanGaps: true,
      // data: [1,2,3,4,5,6,7,8,9,10,9,2],
      // borderRadius: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,],
      backgroundColor: [
        this.userTrendLineColor
      ],
      borderColor:[
        this.userTrendLineColor
      ],
      type :'line'

    }
    this.chart.config.plugins.splice(0);

    this.chart.data.datasets.push(trendDataset);
    this.chart.update();
    this.trendTextColor = '#DDF1E5';
    this.maandTextColor = 'white';
    this.averageTextColor = 'white'

    this.trendCTextColor = "#00924A"
  }

  addAverageToDepartmentChart(){
    this.chart.data.datasets.forEach((dataset: any, index: any) => {
      if (dataset.label == "trend score" )
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

  resetDepartmentChart(){
    this.chart.config.plugins.splice(0);
    this.chart.data.datasets.forEach((dataset: any, index: any) => {
      if (dataset.label == "trend score" )
      this.chart.data.datasets.splice(index, 1);
    });
    this.chart.update();
    this.trendTextColor = 'white';
    this.maandTextColor = "#DDF1E5";
    this.averageTextColor = 'white';
    this.maandCTextColor = "DDF1E5"
  }
}
