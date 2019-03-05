import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { DataService } from "./data.service";

@NgModule({
  declarations: [AppComponent, StudentComponent, StudentDetailComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
