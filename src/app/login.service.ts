import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // loc:any;
  constructor(
    private http: HttpClient,
  ) { }

  private create = environment.Api_Url + 'auth/new/login'
  private post = environment.Api_Url +'api/careers/create'
  private location = environment.Api_Url + 'api/countryCities/get'
  private user = environment.Api_Url + 'auth/new/user-details'
  private get = environment.Api_Url + 'api/careers/search/inactive'
  private edit = environment.Api_Url + 'api/careers/get'
  private update = environment.Api_Url + 'api/careers/update'


  createform(data: any) {
    return this.http.post(this.create, data)
  }
  gettoken(){
    return localStorage.getItem('data')
  }
  detailsform(data:any){
    return this.http.post(this.post,data)
  }
  getCity(){
    return this.http.get(this.location)
  }
  userdetails(){
    return this.http.get(this.user)
  }
  allvalues(data:any){
    return this.http.put(this.get,data)
  }
  editdetails(id:any){
    return this.http.get(this.edit+'/'+id)
  }
  updatedetails(data:any){
    return this.http.put(this.update,data)
  }
}
