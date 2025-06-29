import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexLegend,
  ApexGrid,
  NgApexchartsModule
} from 'ng-apexcharts';
import { MainTableComponent } from '../main-table/main-table.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, MainTableComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  // ===Bar Chart Series========
  barSeries = [
    { name: 'High', data: [40, 50, 30, 45, 40, 60, 50, 55, 60, 65, 70, 55] },
    { name: 'Medium', data: [20, 25, 15, 25, 20, 30, 28, 32, 38, 40, 44, 30] },
    { name: 'Low', data: [10, 15, 10, 15, 10, 20, 18, 20, 22, 25, 28, 20] }
  ];

  barChart: ApexChart = {
    type: 'bar',
    height: 400,
    stacked: true,
    toolbar: { show: false },
    animations: {
      enabled: true
    }
  };


  barPlotOptions: ApexPlotOptions = {
    bar: {
      borderRadius: 10,
      columnWidth: '40%',
      horizontal: false
    }
  };

  barXAxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        colors: Array(12).fill('#6b7280'),
        fontSize: '14px',
      },
      offsetY: 0, // Reset offset
    },
    axisBorder: {
      show: true,
      color: '#e5e7eb',
    },
    axisTicks: {
      show: true,
      color: '#e5e7eb',
    },
    position: 'bottom', // force x-axis to bottom
  };


  barYAxis: ApexYAxis = {
    title: {
      text: 'Security rating',
      style: {
        color: '#6b7280',
        fontSize: '12px'
      }
    },
    labels: {
      style: {
        colors: '#6b7280'
      }
    }
  };

  barFill: ApexFill = {
    opacity: 1,
    colors: ['#6d28d9', '#8b5cf6', '#e5e7eb']
  };

  barTooltip: ApexTooltip = {
    enabled: true,
    theme: 'light'
  };

  barDataLabels: ApexDataLabels = {
    enabled: false
  };

  barGrid: ApexGrid = {
    show: true,
    strokeDashArray: 4
  };

  barLegend: ApexLegend = {
    show: false
  };

  barTitle: ApexTitleSubtitle = {
    text: 'Month',
    align: 'center',
    margin: 10,
    offsetY: 380,
    style: {
      fontSize: '12px',
      color: '#6b7280'
    }
  };



  // ============= Half Circle Chart =============
  radialSeries: ApexNonAxisChartSeries = [80];

  radialChart: ApexChart = {
    type: 'radialBar',
    height: 300,
    sparkline: { enabled: true }
  };

  radialPlotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '60%'
      },
      track: {
        background: '#f2f2f2',
        strokeWidth: '97%',
        margin: 5
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: 20
        },
        value: {
          show: true,
          offsetY: -20
        }
      }
    }
  };

  radialLabels: string[] = ['Vendors'];
  radialColors: string[] = ['#7c3aed'];
}
