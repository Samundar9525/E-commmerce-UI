import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './widget/sidenav/sidenav.component';
import { TaskPaneComponent } from './pages/task-pane/task-pane.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './widget/cards/cards.component';
import { BarchartComponent } from './widget/barchart/barchart.component';
import { PiechartComponent } from './widget/piechart/piechart.component';
import { LinechartComponent } from './widget/linechart/linechart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartPanelComponent } from './pages/chart-panel/chart-panel.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablesComponent } from './widget/tables/tables.component';
import { ModelsComponent } from './widget/models/models.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './widget/product-card/product-card.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TaskPaneComponent,
    CardsComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent,
    DashboardComponent,
    ChartPanelComponent,
    SellerDashboardComponent,
    TablesComponent,
    ModelsComponent,
    ProductCardComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
