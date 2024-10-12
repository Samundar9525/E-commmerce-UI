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
    HttpClientModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
