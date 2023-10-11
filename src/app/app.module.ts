import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderComponent } from './header/header.component';
import { NavbarListComponent } from './navbar-list/navbar-list.component';
import { SideBarFixeComponent } from './side-bar-fixe/side-bar-fixe.component';
import { NbreConnectesService } from './nbre-connectes.service';
import { UserNameService } from './user-name.service';
import { MesuresIndicateursService } from './mesures-indicateurs.service';
import { IndicatorCardComponent } from './indicator-card/indicator-card.component';
import { IndicatorCardListComponent } from './indicator-card-list/indicator-card-list.component';
import { IndicatorsModalComponent } from './indicators-modal/indicators-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RepresentationGraphiqueComponent } from './representation-graphique/representation-graphique.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from 
    '@angular/common/http';
import { RightSideDivComponent } from './right-side-div/right-side-div.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './modules/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { RepresentationCamembertComponent } from './representation-camembert/representation-camembert.component';
import { IndicatorsDoughnutModalComponent } from './indicators-doughnut-modal/indicators-doughnut-modal.component';
import { ActionsEnRetardComponent } from './actions-en-retard/actions-en-retard.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { ActionsRecuesComponent } from './actions-recues/actions-recues.component';
import { ThemePersonalizationComponent } from './theme-personalization/theme-personalization.component';



@NgModule({
  declarations: [
  AppComponent,
  HeaderListComponent,
  HeaderComponent,
  NavbarListComponent,
  SideBarFixeComponent,
  IndicatorCardComponent,
  IndicatorCardListComponent,
  IndicatorsModalComponent,
  RepresentationGraphiqueComponent,
  FileUploadComponent,
  RightSideDivComponent,
  MessageModalComponent,
  ChatComponent,
  HomeComponent,
  RepresentationCamembertComponent,
  IndicatorsDoughnutModalComponent,
  ActionsEnRetardComponent,
  ActionModalComponent,
  ActionFormComponent,
  ActionsRecuesComponent,
  ThemePersonalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [NbreConnectesService,UserNameService,MesuresIndicateursService],
  bootstrap: [AppComponent]


})
export class AppModule { }
