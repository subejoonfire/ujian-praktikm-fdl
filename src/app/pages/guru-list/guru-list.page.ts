import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { SekolahService } from 'src/app/services/sekolah.service';

@Component({
  selector: 'app-guru-list',
  templateUrl: './guru-list.page.html',
  styleUrls: ['./guru-list.page.scss'],
})
export class GuruListPage implements OnInit {
  gurus : any;
  foto: string = 'https://source.unsplash.com/random/50×50';

  constructor(private SekolahService : SekolahService,
              private loadingController : LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadingData();
  }

  async deleteData(id: string) {
        this.SekolahService.deleteGuru(id).subscribe({
   next: (val:any) => {
    this.loadingData()
   },
   error:(err) => {
    console.log("ada terjadi error di : ", err)
   }
});
  }


  async loadingData(){
    const loading = await this.loadingController.create({
      message:'Loading ...',
      spinner:'crescent'
    });
    await loading.present();

    this.SekolahService.getGuru().subscribe((res) => {
      this.gurus = res;
      // this.tutorials.push(...res.Hasil);
      console.log(this.gurus);
      loading.dismiss();
    },
    (error) => {
      console.error('error fetching tutorials:', error);
      loading.dismiss();
    }
    );
  }
}
