import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constants/API_ENDPOINTS';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }



  company_cik_number$ = new BehaviorSubject<String>('');

  setCIKForConsumption(cik:string){
    this.company_cik_number$.next(cik)
  }



  getfinancialAttributes(request:any):Observable<any>{
    return this.http.get(API_ENDPOINTS.GET_FINANCIAL_ATTRIB(request))
  }
  getCompanies():Observable<any>{
    return this.http.get(API_ENDPOINTS.GET_COMPANIES);
  }

  createNewTarget(body:{company_name:String}):Observable<any>{
    return this.http.post(API_ENDPOINTS.POST_CREATE_NEW_TARGET,body)
  }












}
