import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constants/API_ENDPOINTS';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }


  getfinancialAttributes(request:any):Observable<any>{
    return this.http.get(API_ENDPOINTS.GET_FINANCIAL_ATTRIB(request.cik))
  }
  getCompanies():Observable<any>{
    return this.http.get(API_ENDPOINTS.GET_COMPANIES);
  }












}
