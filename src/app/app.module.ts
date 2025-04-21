import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Đảm bảo import HttpClientModule

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';  // Điều chỉnh đường dẫn nếu cần

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  // Thêm HttpClientModule vào đây
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
