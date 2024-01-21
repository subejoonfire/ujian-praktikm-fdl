import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';


@Component({
  selector: 'app-guru-add',
  templateUrl: './guru-add.page.html',
  styleUrls: ['./guru-add.page.scss'],
})
export class GuruAddPage {

  Guru : {nama:string, nip:string, jenis_kelamin:string} = {
    nama : 'nama',
    nip : 'nip',
    jenis_kelamin: 'jenis_kelamin',
  };

  constructor(private formBuilder : FormBuilder, private sekolahservice : SekolahService, private route : NavController
    ) {
    this.formGuru = this.formBuilder.group({
      nama : '',
      nip : '',
      jenis_kelamin : '',
    });
}

  formGuru : FormGroup;
  submitForm(){
    if(this.formGuru.valid){
      this.Guru = this.formGuru.value;
      console.log('Data Guru yang akan ditambahkan:', this.Guru);
      this.sekolahservice.tambahGuru(this.Guru).subscribe({
        next: (val:any) => {
          console.log('Response setelah menambahkan Guru:', val);
          this.route.navigateRoot('/guru-list');
        },
        error:(err) => {
          console.log("Ada error di:", err);
        }
      });
    }
  }
}
