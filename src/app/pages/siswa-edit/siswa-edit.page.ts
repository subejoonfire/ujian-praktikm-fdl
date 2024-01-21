import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';

@Component({
  selector: 'app-siswa-edit',
  templateUrl: './siswa-edit.page.html',
  styleUrls: ['./siswa-edit.page.scss'],
})
export class SiswaEditPage implements OnInit {
  formSiswa: FormGroup;

  siswas: {
    id: any;
    nama: string;
    nis: string;
    kelas: string;
    jenis_kelamin: string;
  } = {
    nama: 'nama',
    nis: 'nis',
    kelas: 'kelas',
    jenis_kelamin: 'jenis_kelamin',
    id: '',
  };

  constructor(
    private sekolahService: SekolahService,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private navroute: NavController,
    private formBuilder: FormBuilder
  ) {
    this.formSiswa = this.formBuilder.group({
      id: ['', Validators.required],
      nama: ['', Validators.required],
      nis: ['', Validators.required],
      kelas: ['', Validators.required],
      jenis_kelamin: ['', Validators.required],
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadingDataDetail(id);
    console.log('id' + id);
  }

  siswa: any;

  async loadingDataDetail(id: string | null) {
    const loading = await this.loadingController.create({
      message: 'Loading ...',
      spinner: 'crescent',
    });
    await loading.present();

    this.sekolahService.getSiswaDetail(id).subscribe((res) => {
      this.siswa = res;
      loading.dismiss();
    });
  }

  submitForm() {
    this.siswas = this.formSiswa.value;
    this.sekolahService.editSiswa(this.siswas).subscribe({
      next: (val: any) => {
        window.location.reload();
      },
      error: (err) => {
        console.log('ada error di : ', err);
      },
    });
  }
}
