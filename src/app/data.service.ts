import { Injectable } from "@angular/core";
import { Student } from "./student";

@Injectable({
  providedIn: "root"
})
export class DataService {
  students: Array<Student> = [
    {
      nim: 12345,
      nama: "elizabeth wong",
      prodi: "sistem informasi",
      ipk: 3.5,
      matkul: ["algoritma dan pemrograman", "rekayasa piranti lunak", "business intelligence"]
    },
    {
      nim: 23456,
      nama: "popo fernandes",
      prodi: "teknik industri",
      ipk: 3.9,
      matkul: ["stokiometri bahan", "fisika dasar", "elektronika terapan"]
    },
    {
      nim: 34567,
      nama: "alexander chow",
      prodi: "akuntansi",
      ipk: 2.1,
      matkul: ["ekonomi mikro", "akuntansi keuangan dasar"]
    },
    {
      nim: 45678,
      nama: "john smith",
      prodi: "manajemen",
      ipk: 3.0,
      matkul: ["manajemen SDM"]
    }
  ];

  constructor() {}

  getStudents(): Array<Student> {
    return this.students;
  }
}
