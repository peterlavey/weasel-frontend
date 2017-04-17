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
import { FolderComponent } from './folder/folder.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SwitchComponent } from './switch/switch.component';
import { SearchComponent } from './search/search.component';
import { BynamePipe } from './byname.pipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { CodemirrorModule } from 'ng2-codemirror';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';

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
    AddComponent,
    FolderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SwitchComponent,
    SearchComponent,
    BynamePipe,
    JsonFormatterComponent,
    JsonViewerComponent
  ],
  imports: [
    CodemirrorModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
