import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';

@Component({
  selector: 'app-siswa-detail',
  templateUrl: './siswa-detail.page.html',
  styleUrls: ['./siswa-detail.page.scss'],
})
export class SiswaDetailPage implements OnInit {
  siswas : any[] = [];
  foto: string = 'https://source.unsplash.com/random/100×100';
  
  constructor(private sekolahService : SekolahService,
    private loadingController : LoadingController,
    private route : ActivatedRoute) { }

    ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.loadingDataDetail(id);
    }
  
    async loadingDataDetail(id: string | null){
      const loading = await this.loadingController.create({
        message:'Loading ...',
        spinner:'crescent'
      });
      await loading.present();
  
      this.sekolahService.getSiswaDetail(id).subscribe((res) => {
        this.siswas.push(...res.Hasil);
        console.log(this.siswas);
        loading.dismiss();
      });
    }
  
  }