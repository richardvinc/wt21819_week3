import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../student";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  @Output() close = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  closeDetail() {
    this.close.emit(true);
  }
}
