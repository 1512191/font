import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
