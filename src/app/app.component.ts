import { Component, OnInit } from "@angular/core";
import { Student } from "./student";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  studentDetail = null;
  students: Array<Student> = null;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.students = this.ds.getStudents();
  }

  getDetail(student: Student): void {
    this.studentDetail = student;
  }

  closeDetail(): void {
    this.studentDetail = null;
  }
}
