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
export const productDummydata = [
  {
    "name": "BATA Women's Kafi Slipper",
    "main_category": "women's shoes",
    "sub_category": "Shoes",
    "image": "https://m.media-amazon.com/images/I/71XsK-tzvRS._AC_UL320_.jpg",
    "link": "https://www.amazon.in/BATA-Womens-Brown-Slipper-6-5724614/dp/B091Q74F5N/ref=sr_1_1?qid=1679211495&s=shoes&sr=1-1",
    "ratings": 3.9,
    "no_of_ratings": 3778,
    "discount_price": "₹323",
    "actual_price": "₹599"
  },
  {
    "name": "DOCTOR EXTRA SOFT Doctor Ortho Slippers for Women.",
    "main_category": "women's shoes",
    "sub_category": "Shoes",
    "image": "https://m.media-amazon.com/images/I/51dMc66bcZL._AC_UL320_.jpg",
    "link": "https://www.amazon.in/DOCTOR-EXTRA-SOFT-Orthopaedic-D-18/dp/B09D8BQM7C/ref=sr_1_2?qid=1679211495&s=shoes&sr=1-2",
    "ratings": 4.0,
    "no_of_ratings": 46986,
    "discount_price": "₹399",
    "actual_price": "₹599"
  },
  {
    "name": "BATA womens Ortho Comfit Ladies Flip-Flops",
    "main_category": "women's shoes",
    "sub_category": "Shoes",
    "image": "https://m.media-amazon.com/images/I/716iF5ATTbL._AC_UL320_.jpg",
    "link": "https://www.amazon.in/BATA-Womens-Comfit-Flip-Flops-5-5775999/dp/B07YGMXGFM/ref=sr_1_3?qid=1679211495&s=shoes&sr=1-3",
    "ratings": 4.3,
    "no_of_ratings": 7353,
    "discount_price": "₹176",
    "actual_price": "₹299"
  },
  {
    "name": "Campus Women's Alexa Running Shoes",
    "main_category": "women's shoes",
    "sub_category": "Shoes",
    "image": "https://m.media-amazon.com/images/I/61MGVjbYydL._AC_UL320_.jpg",
    "link": "https://www.amazon.in/Campus-Womens-Running-Shoes-7-5G-663/dp/B07SYPMHB7/ref=sr_1_4?qid=1679211495&s=shoes&sr=1-4",
    "ratings": 4.2,
    "no_of_ratings": 7143,
    "discount_price": "₹883",
    "actual_price": "₹1,699"
  },
  {
    "name": "ASIAN Women's Trendy-21 Casual Sneaker Colour Changing Shoes",
    "main_category": "women's shoes",
    "sub_category": "Shoes",
    "image": "https://m.media-amazon.com/images/I/61M45eURF2L._AC_UL320_.jpg",
    "link": "https://www.amazon.in/ASIAN-Trendy-21-Sneaker-Changing-Lightwight/dp/B0BJF9BT6T/ref=sr_1_5?qid=1679211495&s=shoes&sr=1-5",
    "ratings": 3.6,
    "no_of_ratings": 393,
    "discount_price": "₹699",
    "actual_price": "₹999"
  },
  {
    name: "dclub Nipple Covers Reusable Comfortable & Natural Invisible Adhesive Silicone Pasties for Women, Round (Skin)",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51M087p7ktL._AC_UL320_.jpg",
    link: "https://www.amazon.in/dclub-Reusable-Comfortable-Invisible-Adhesive/dp/B09TFP288T/ref=sr_1_5_mod_primary_new?qid=1679152740&s=apparel&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-5",
    ratings: "4.3",
    reviews: "2,880",
    discount_price: "₹191",
    actual_price: "₹1,200"
  },
  {
    name: "YIFELY Double Sided Tape for Clothes | Fashion, Clothing and Body (36 Strip Pack)",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51J8Ph-rUVL._AC_UL320_.jpg",
    link: "https://www.amazon.in/YIFELY-Clothing-Strength-Adhesive-Transparent/dp/B0BHDSV9M5/ref=sr_1_6?qid=1679152740&s=apparel&sr=1-6",
    ratings: "4.3",
    reviews: "341",
    discount_price: "₹199",
    actual_price: "₹449"
  },
  {
    name: "Jockey Women's Bikini",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81hWgsH56wL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Jockey-Womens-Bikini-1410_Dark-Assorted_L/dp/B010FMMVYK/ref=sr_1_7?qid=1679152740&s=apparel&sr=1-7",
    ratings: "4.2",
    reviews: "26,042",
    discount_price: "₹419",
    actual_price: "₹498"
  },
  {
    name: "Jockey Women Cotton Hipster Brief (Pack of 3)",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Nu+DmgfpL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Jockey-Womens-Hipster-1406_Dark-Assorted_L/dp/B010FMJKFS/ref=sr_1_8?qid=1679152740&s=apparel&sr=1-8",
    ratings: "4.2",
    reviews: "31,957",
    discount_price: "₹425",
    actual_price: "₹498"
  },
  {
    name: "Izaan Mart Women's Retro Driving Rectangular Sunglasses Black Frame, Black Lens (Medium) Set of 1",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51-a2L6DsIS._AC_UL320_.jpg",
    link: "https://www.amazon.in/Izaan-Women-Driving-Rectangular-Sunglasses/dp/B096S16G1G/ref=sr_1_9_mod_primary_new?qid=1679152740&s=apparel&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-9",
    ratings: "3.9",
    reviews: "357",
    discount_price: "₹160",
    actual_price: "₹1,999"
  },
  {
    name: "GLAMORAS Women Camisole (Glcamisecret_Black-White-Beige_Free Size)",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517vKSMkKvL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Ritu-Creation-Womens-Cotton-Camisole/dp/B07B94Z577/ref=sr_1_10?qid=1679152740&s=apparel&sr=1-10",
    ratings: "4.1",
    reviews: "668",
    discount_price: "₹284",
    actual_price: "₹799"
  },
  {
    name: "Pasties for Women 4 Pairs Nipple Covers Reusable Adhesive Silicone Covers",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/713aSudWVSL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Pasties-Nipple-Reusable-Adhesive-Silicone/dp/B078K9P73F/ref=sr_1_11?qid=1679152740&s=apparel&sr=1-11",
    ratings: "4.3",
    reviews: "3,870",
    discount_price: "₹365",
    actual_price: "₹1,700"
  },
  {
    name: "Sichumaria Buckle Free Elastic Belt for Women Jeans/Dresses",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/513oJvlKM4L._AC_UL320_.jpg",
    link: "https://www.amazon.in/Elastic-Sichumaria-Adjustable-Buckle-Free-Invisible/dp/B0B71K5CM5/ref=sr_1_12?qid=1679152740&s=apparel&sr=1-12",
    ratings: "4.0",
    reviews: "153",
    discount_price: "₹299",
    actual_price: "₹999"
  },
  {
    name: "Sanfe Flix Breast Roll - Breast Shaper & Lifter, Breathable Breast Support",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71mwLH2XTFL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Sanfe-Breathable-Boobtape-Backless-Friendly/dp/B0B5281W68/ref=sr_1_13?qid=1679152740&s=apparel&sr=1-13",
    ratings: "3.8",
    reviews: "272",
    discount_price: "₹508",
    actual_price: "₹549"
  },
  {
    name: "LEOTUDE Women's Cottonblend Half Sleeve Oversized T-Shirts (Color: Orange)",
    category: "women's clothing",
    type: "Clothing",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61iKv6-unXL._AC_UL320_.jpg",
    link: "https://www.amazon.in/Leotude-Womens-T-Shirt-22_PNKHEART_S_Grey_Small/dp/B08HJ6ZDC6/ref=sr_1_14?qid=1679152740&s=apparel&sr=1-14",
    ratings: "3.6",
    reviews: "162",
    discount_price: "₹309",
    actual_price: "₹1,099"
  }
]
