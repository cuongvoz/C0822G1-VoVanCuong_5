import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhAn} from "../model/benh-an";
import {Doctor} from "../model/doctor";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/benhAns');
  }
  changePage(page: number):Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/benhAns?page=' + page);
  }

  getAllDoctor():Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>('http://localhost:8080/benhAns/doctors');
  }
  updateBenhAn(benhAn: any):Observable<BenhAn> {
    return this.httpClient.put<BenhAn>('http://localhost:8080/benhAns/',benhAn);
  }
  deleteBenhAn(id: string):Observable<BenhAn> {
    return this.httpClient.delete<BenhAn>('http://localhost:8080/benhAns/' + id);

  }
  createBenhAn(benhAn: any):Observable<BenhAn> {
    return this.httpClient.post<BenhAn>('http://localhost:8080/benhAns/',benhAn);
  }
  search(name: string):Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/benhAns/search/'+name);
  }
}
