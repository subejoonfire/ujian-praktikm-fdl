import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';

@Component({
  selector: 'app-siswa-add',
  templateUrl: './siswa-add.page.html',
  styleUrls: ['./siswa-add.page.scss'],
})
export class SiswaAddPage implements OnInit {

  formSiswa : FormGroup;

  Siswa : {nama:string, nis:string, kelas:string, jenis_kelamin:string} = {
    nama : 'nama',
    nis : 'nis',
    kelas : 'kelas',
    jenis_kelamin: 'jenis_kelamin',
  };

  constructor(private formBuilder : FormBuilder,
              private route : NavController,
              private sekolahservice : SekolahService) {
              this.formSiswa = this.formBuilder.group({
                nama : '',
                nis : '',
                kelas : '',
                jenis_kelamin : '',
              });
  }

  ngOnInit() {
  }

  submitForm(){
    if(this.formSiswa.valid){
      this.Siswa = this.formSiswa.value;
      console.log('Data Siswa yang akan ditambahkan:', this.Siswa);
      this.sekolahservice.tambahSiswa(this.Siswa).subscribe({
        next: (val:any) => {
          console.log('Response setelah menambahkan siswa:', val);
          this.route.navigateRoot('/siswa-list');
        },
        error:(err) => {
          console.log("Ada error di:", err);
        }
      });
    }
  }

}
