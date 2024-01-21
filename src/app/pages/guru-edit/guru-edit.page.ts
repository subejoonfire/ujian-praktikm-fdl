import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';
@Component({
  selector: 'app-guru-edit',
  templateUrl: './guru-edit.page.html',
  styleUrls: ['./guru-edit.page.scss'],
})
export class GuruEditPage implements OnInit {
  formGuru : FormGroup;

  gurus : {
    id: any;nama:string, nip:string, jenis_kelamin:string
} = {
  nama: 'nama',
  nip: 'nip',
  jenis_kelamin: 'jenis_kelamin',
  id: ''
};

  constructor(private sekolahService: SekolahService,
    private loadingController:LoadingController,
    private route: ActivatedRoute,
    private navroute: NavController,
    private formBuilder : FormBuilder)  {
      this.formGuru = this.formBuilder.group({
        id: ['', Validators.required],
        nama: ['', Validators.required],
        nip: ['', Validators.required],
        jenis_kelamin: ['', Validators.required],
      });
     }



   ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadingDataDetail(id);
    console.log('id'+id);
  }

  guru : any

  async loadingDataDetail(id: string | null){
    const loading = await this.loadingController.create({
      message:'Loading ...',
      spinner:'crescent'
    });
    await loading.present();

    this.sekolahService.getGuruDetail(id).subscribe((res) => {
      this.guru = res
      console.log(this.guru)
      loading.dismiss();
    });
  }
  submitForm(){
    if(this.formGuru.valid){
      let gurus = this.formGuru.value;
      this.sekolahService.editGuru(gurus).subscribe({
        next: (val:any) => {
          window.location.reload()
        },
        error:(err) => {
          console.log("ada error di : ",err);
        }
      });
    }
  }

}
