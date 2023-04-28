import { SearchReport } from './search-report';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitizenPlan } from './citizen-plan';
import { Userregister } from './userregister';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl='http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  
  getplanname():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseUrl}/planname`);
  }

  getplanstatus():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseUrl}/planstatus`);
  }
  getEmployeeList(SearchReport:SearchReport):Observable<CitizenPlan[]>{
    return this.httpClient.post<CitizenPlan[]>(`${this.baseUrl}/search`,SearchReport,{responseType:"json"});
  }

  // getexcelreport():void{
   
  //   this.httpClient.get(`${this.baseUrl}/excel`);
  // }
  // getpdfreport():Observable<any>{
  //   return this.httpClient.get(`${this.baseUrl}/pdf`);
  // }
  getExcel() {
    return this.httpClient.get<any>(`http://localhost:8080/excel`, {responseType : 'arraybuffer' as 'json'});
  }

  getPdf() {
   return this.httpClient.get<any>(`http://localhost:8080/pdf`, {responseType : 'arraybuffer' as 'json'});
 }

  getcountries():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/countries`);
  }

  getstate(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/states/${id}`);
  }
  getcity(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/cities/${id}`);
  }

  createContact(contact:Userregister):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/user`,contact,{responseType:"text"});
  }

}
