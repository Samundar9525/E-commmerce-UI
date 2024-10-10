// shared-data.ts

import { ApexAxisChartSeries } from "ng-apexcharts";

export const sidebarData: any[] = [
  {
    icon: 'bx bx-grid-alt',
    name: 'Dashboard',
    action: () => {
      console.log('Dashboard Clicked');
    },
  },
  {
    icon: 'bx bx-collection',
    name: 'Category',
    submenu: [
      { name: 'HTML & CSS', action: () => console.log('HTML & CSS Clicked') },
      { name: 'JavaScript', action: () => console.log('JavaScript Clicked') },
    ],
  },
  {
    icon: 'bx bx-book-alt',
    name: 'Posts',
    submenu: [
      { name: 'Web Design', action: () => console.log('Web Design Clicked') },
      { name: 'Login Form', action: () => console.log('Login Form Clicked') },
    ],
  },
];

export const statCards: any[] = [
  {
    iconClass: 'fas fa-dollar-sign',
    label: 'Revenue',
    value: '199,099 ₹',
    changeType: 'up',
    changeValue: '5.35%',
    sinceText: 'Since last month',
    cardColor: '#fe4d46', // Red
  },
  {
    iconClass: 'fa fa-shopping-cart',
    label: 'Orders',
    value: '2,200',
    changeType: 'up',
    changeValue: '8.66%',
    sinceText: 'Since last month',
    cardColor: '#623ce8', // Blue
  },
  {
    iconClass: 'fa fa-users',
    label: 'Customers',
    value: '702,258',
    changeType: 'down',
    changeValue: '2.81%',
    sinceText: 'Since last month',
    cardColor: '#fbc023', // Yellow
  },
  {
    iconClass: 'fa fa-id-badge',
    label: 'Employee',
    value: '8765',
    changeType: 'up',
    changeValue: '1.74%',
    sinceText: 'Since last month',
    cardColor: 'darkgreen', // Green
  },
];

export const barChartSeries: ApexAxisChartSeries = [
  {
    name: 'Clothing',
    data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
  },
  {
    name: 'Food Products',
    data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
  },
];

export const barChartCategories: string[] = [
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
];

export const pieChartSeries: number[] = [21, 23, 19, 14, 6];

export const pieChartLabels: string[] = ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'];

export const lineChartSeries: ApexAxisChartSeries = [
  {
    name: 'Day Time',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 48, 122, 150, 127],
  },
  {
    name: 'Night Time',
    data: [56, 42, 34, 52, 48, 63, 70, 92, 149, 123, 151, 128]
  },
];

export const lineChartCategories: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];





export const tableRowData = [
  { id: 1, name: 'John Doe', age: 28, status: 'Active' },
  { id: 2, name: 'Jane Smith', age: 25, status: 'Inactive' },
  { id: 3, name: 'Tom Johnson', age: 35, status: 'Active' },
  { id: 4, name: 'Lucy Brown', age: 30, status: 'Active' }
];

export const tableColumn = [
  {
    columnDef: 'id',
    header: 'ID',
    cell: (element: any) => `${element.id}`,
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: any) => `${element.name}`,
  },
  {
    columnDef: 'age',
    header: 'Age',
    cell: (element: any) => `${element.age}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: any) => `${element.status}`,
  },
  {
    columnDef: 'actions',
    header: 'Actions',
    cell: (element: any) => `
      <button class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">more_vert</i>
      </button>
    `,
  },
];
