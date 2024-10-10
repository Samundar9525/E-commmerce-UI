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



export const sellerCardData = [
  {
    iconClass: 'fas fa-dollar-sign',
    label: 'Revenue',
    value: '250000 ₹',
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
    iconClass: 'fas fa-dollar-sign',
    label: 'Returned',
    value: '199,099 ₹',
    changeType: 'up',
    changeValue: '5.35%',
    sinceText: 'Since last month',
    cardColor: '#fe4d46', // Red
  },
]


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


export const productRowData = [
  { id: 1, name: 'Iphone 19', rate: 2800, discount: 20, sold: 15, inStock: 3500, returned: 2, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 2, name: 'Samsung Galaxy S21', rate: 2400, discount: 15, sold: 20, inStock: 2500, returned: 1, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 3, name: 'Google Pixel 6', rate: 2200, discount: 10, sold: 10, inStock: 3000, returned: 3, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 4, name: 'OnePlus 9', rate: 2100, discount: 12, sold: 18, inStock: 4000, returned: 4, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 5, name: 'Sony Xperia 5', rate: 2000, discount: 18, sold: 25, inStock: 3200, returned: 2, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 6, name: 'Xiaomi Mi 11', rate: 1900, discount: 14, sold: 22, inStock: 2800, returned: 5, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 7, name: 'Oppo Find X3', rate: 1800, discount: 16, sold: 14, inStock: 2700, returned: 1, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 8, name: 'Vivo X60', rate: 1750, discount: 13, sold: 12, inStock: 2900, returned: 3, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 9, name: 'Nokia 9', rate: 1650, discount: 11, sold: 19, inStock: 3100, returned: 2, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
  { id: 10, name: 'Realme GT', rate: 1700, discount: 15, sold: 23, inStock: 2600, returned: 4, image: 'https://alphabet.nyc3.cdn.digitaloceanspaces.com/microtechcloud/lz1v0nekbywurabj.webp' },
];


export const productColumn = [
  {
    columnDef: 'id',
    header: 'Product Id',
    cell: (element: any) => `${element.id}`,
  },
  {
    columnDef: 'name',
    header: 'Product Name',
    cell: (element: any) => `${element.name ? element.name:'No data'}`,
  },
  {
    columnDef: 'rate',
    header: 'Rate',
    cell: (element: any) => `${element.rate ? element.rate:'No data'}`,
  },
  {
    columnDef: 'discount',
    header: 'Discount',
    cell: (element: any) => `${element.discount ? element.discount:'No data'}`,
  },
  {
    columnDef: 'inStock',
    header: 'Stock (Units)',
    cell: (element: any) => `${element.inStock?element.inStock:'No data'}`,
  },
  {
    columnDef: 'sold',
    header: 'Sold (Units)',
    cell: (element: any) => `${element.sold?element.sold:'No data'}`,
  },
  {
    columnDef: 'returned',
    header: 'Returned (Units)',
    cell: (element: any) => `${element.returned?element.returned:'No data'}`,
  },
  {
    columnDef: 'image',
    header: 'Image',
    cell: (element: any) => `${element.image ? element.image : 'No Image'}`, // Assume 'image' is a property
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
