import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SekolahService } from '../../services/sekolah.service';

@Component({
  selector: 'app-siswa-list',
  templateUrl: './siswa-list.page.html',
  styleUrls: ['./siswa-list.page.scss'],
})
export class SiswaListPage {
  siswas: any;
  foto: string = 'https://source.unsplash.com/random/50×50';

  constructor(
    private sekolahService: SekolahService,
    private loadingController: LoadingController
  ) {
    this.loadingData();
  }

  ionViewWillEnter() {
    this.loadingData();
  }

  async deleteData(id: string) {
    this.sekolahService.deleteSiswa(id).subscribe({
      next: (val: any) => {
        this.loadingData();
      },
      error: (err) => {
        console.log('ada terjadi error di : ', err);
      },
    });
  }

  async loadingData() {
    const loading = await this.loadingController.create({
      message: 'Loading ...',
      spinner: 'crescent',
    });
    await loading.present();
    this.sekolahService.getSiswa().subscribe(
      (res) => {
        this.siswas = res;
        // this.tutorials.push(...res.Hasil);
        loading.dismiss();
      },
      (error) => {
        console.error('error fetching siswa:', error);
        loading.dismiss();
      }
    );
  }
}
