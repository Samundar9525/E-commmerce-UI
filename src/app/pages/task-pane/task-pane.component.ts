import { Component } from '@angular/core';

@Component({
  selector: 'app-task-pane',
  templateUrl: './task-pane.component.html',
  styleUrls: ['./task-pane.component.scss']
})
export class TaskPaneComponent {
  public todayTasks:any[] = [
    {
      "id": 1,
      "name": "Dashboard Design Implementation",
      "status": "approved"
    },
    {
      "id": 2,
      "name": "Create a userflow",
      "status": "progress"
    },
    {
      "id": 3,
      "name": "Application Implementation",
      "status": "review"
    },
    {
      "id": 4,
      "name": "Create a Dashboard Design",
      "status": "progress"
    },
    {
      "id": 5,
      "name": "Create a Web Application Design",
      "status": "approved"
    },
    {
      "id": 6,
      "name": "Interactive Design",
      "status": "review"
    }
  ]
  public upcomingTasks =  [
    {
      "id": 7,
      "name": "Dashboard Design Implementation",
      "status": "waiting"
    }
  ];
  tasks = [
    {
      time: '08:00 - 09:00 AM',
      name: 'Product Review',
      color: 'yellow',
      members: [
        'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80',
        'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        'https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
      ]
    },
    {
      time: '10:00 - 11:00 AM',
      name: 'Design Meeting',
      color: 'blue',
      members: [
        'https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80',
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        'https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
      ]
    }
    // Add more tasks as needed
  ];
  categories = [
    { id: 'opt-1', value: 'all', name: 'All' },
    { id: 'opt-2', value: 'important', name: 'Important' },
  ];

  constructor(){

  }

  addCategory() {
    // Logic to add a category
    console.log('Add Category clicked');
  }

  editCategory() {
    // Logic to edit a category
    console.log('Edit Category clicked');
  }

  deleteCategory() {
    // Logic to delete a category
    console.log('Delete Category clicked');
  }

}
