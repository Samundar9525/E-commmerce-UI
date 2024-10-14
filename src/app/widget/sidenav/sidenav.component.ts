import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sidebarData} from 'src/app/sampleData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isSidebarClosed = true;
  activeMenu: string | null = null;
  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;
  isDesktopView: boolean = window.innerWidth > 480;
  sidebarData = sidebarData
  @Input() menuData: any[] = [];
  // sample menu items kee the routing event here
  dashboardType:any ='';
  constructor(private eRef: ElementRef,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.dashboardType = this.route.snapshot.paramMap.get('id');
    }
  }

  toggleSidebar() {
    if(this.isDesktopView){
      this.isSidebarClosed = !this.isSidebarClosed;
    }
  }

  toggleSubMenu(item: any) {
    this.activeMenu = this.activeMenu === item.name ? null : item.name;
  }

  isSubmenuActive(item: any): boolean {
    return this.activeMenu === item.name;
  }
  isVisibleOnDesktop(): boolean {
    return window.innerWidth > 480;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;
    this.isDesktopView = this.windowWidth > 480;
  }

    // Detect clicks outside the sidebar
    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
      if (!this.eRef.nativeElement.contains(event.target)) {
        this.isSidebarClosed = true;
      }
    }
}
