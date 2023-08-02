import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_api_login="http://localhost:8081/api/login";
  USER_api_GetAllUser="http://localhost:8081/api/allusers";
  USER_api_Delete="http://localhost:8081/api/deleteuser";
  User_api_add="http://localhost:8081/api/adduser";
  User_api_getallrole="http://localhost:8081/api/allroles";
  User_api_getallusermanager="http://localhost:8081/api/searchuser/managers";
  User_api_getallgroups="http://localhost:8081/api/allgroups";
  User_api_addgroupe="http://localhost:8081/api/addgroupe";
  User_api_addrole="http://localhost:8081/api/addrole";
  User_api_userbyid="http://localhost:8081/api/searchuser";

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(this.USER_api_login,user);
  }
  getUsers(){
    return this.http.get(this.USER_api_GetAllUser);
  }
  deleteUserById(id: number): Observable<any> {
    const url = `${this.USER_api_Delete}/${id}`;

    return this.http.delete(url, {responseType:"text"})
  }
  addUser(user:any){
    return this.http.post(this.User_api_add,user);
  }
  getallroles(){
    return this.http.get(this.User_api_getallrole);
  }
  getallusermanager(){
    return this.http.get(this.User_api_getallusermanager);
  }
  getallgroupe(){
    return this.http.get(this.User_api_getallgroups);
  }
  addgroupe(groupe:any){
    return this.http.post(this.User_api_addgroupe,groupe);
  }
  addrole(role:any){
    return this.http.post(this.User_api_addrole,role);
  }
 
  getinformationByuser(id:any){
    return this.http.get(`${this.User_api_userbyid}/${id}`);
  }

 

}
