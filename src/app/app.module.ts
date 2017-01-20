import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { RestComponent } from './rest/rest.component';
import { AddComponent } from './add/add.component';

import { ProcessService } from './process.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    RestComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
