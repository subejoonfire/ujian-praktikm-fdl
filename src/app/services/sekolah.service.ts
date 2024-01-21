import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface ApiTutorial {
  Hasil: any[];
  Status: any[];
}

@Injectable({
  providedIn: 'root',
})
export class SekolahService {
  constructor(private http: HttpClient) {}
  getSiswa(): Observable<ApiTutorial> {
    return this.http.get<ApiTutorial>('http://localhost/api-uprak/reads.php');
  }

  getGuru(): Observable<ApiTutorial> {
    return this.http.get<ApiTutorial>('http://localhost/api-uprak/readg.php');
  }

  getSiswaDetail(id: string | null) {
    return this.http.get<ApiTutorial>(
      `http://localhost/api-uprak/details.php?id=${id}`
    );
  }

  getGuruDetail(id: string | null): Observable<ApiTutorial> {
    const url = `http://localhost/api-uprak/detailg.php?id=${id}`;
    return this.http.get<ApiTutorial>(url);
  }

  editSiswa(data: {
    id: string;
    nama: string;
    nis: string;
    kelas: string;
    jenis_kelamin: string;
  }) {
    const url = `http://localhost/api-uprak/edits.php?aksi=ubah&id=${data.id}&nama=${data.nama}&nis=${data.nis}&kelas=${data.kelas}&jenis_kelamin=${data.jenis_kelamin}`;
    return this.http.get<{
      nama: string;
      nis: string;
      kelas: string;
      jenis_kelamin: string;
    }>(url);
  }
  deleteSiswa(id: string) {
    const url = `http://localhost/api-uprak/deletes.php?aksi=hapus&id=${id}`;
    return this.http.get<{ status: string; message: string }>(url);
  }

  deleteGuru(id: string) {
    const url = `http://localhost/api-uprak/deleteg.php?aksi=hapus&id=${id}`;
    return this.http.get<any>(url);
  }

  tambahSiswa(data: {
    nama: string;
    nis: string;
    kelas: string;
    jenis_kelamin: string;
  }): Observable<any> {
    console.log('Data yang dikirim:', data);

    // Construct the URL with parameters
    const url = `http://localhost/api-uprak/creates.php?nama=${data.nama}&nis=${data.nis}&kelas=${data.kelas}&jenis_kelamin=${data.jenis_kelamin}`;

    return this.http.get(url);
  }

  tambahGuru(data: {
    nama: string;
    nip: string;
    jenis_kelamin: string;
  }): Observable<{ nama: string; nip: string; jenis_kelamin: string }> {
    const url = `http://localhost/api-uprak/createg.php?aksi=tambah&nama=${data.nama}&nip=${data.nip}&jenis_kelamin=${data.jenis_kelamin}`;
    console.log(data);

    return this.http.get<{ nama: string; nip: string; jenis_kelamin: string }>(
      url
    );
  }

  editGuru(data: {
    id: any;
    nama: string;
    nip: string;
    jenis_kelamin: string;
  }) {
    console.log(data);

    const url = `http://localhost/api-uprak/editg.php?aksi=edit&id=${data.id}&nama=${data.nama}&nip=${data.nip}&jenis_kelamin=${data.jenis_kelamin}`;

    return this.http.get<any>(url);
  }
}

function tap(
  arg0: (response: any) => void
): import('rxjs').OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}
