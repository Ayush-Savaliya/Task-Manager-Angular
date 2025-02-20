import { NgModule } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],  
  bootstrap: [AppComponent],
  imports: [BrowserModule,DatePipe,FormsModule,SharedModule,TasksModule]
})
export class AppModule{}