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
  User_api_addrequest="http://localhost:8081/api/addrequest";
  User_api_getallrequestsByuser="http://localhost:8081/api/req/user";
  User_api_getallrequestuserBymanager="http://localhost:8081/api/req/manager";
  User_api_getallrequestuserByuseraproval="http://localhost:8081/api/req/useraproval";
  User_api_managerAproveReq="http://localhost:8081/api/req/managertrue";
  User_api_managerNoAproveReq="http://localhost:8081/api/req/managerfalse";
  User_api_userapAproveReq="http://localhost:8081/api/req/useraprovaltrue";
  User_api_userapNoAproveReq="http://localhost:8081/api/req/useraprovalfalse";


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

  addrequest(req:any){
    return this.http.post(this.User_api_addrequest,req);
  }
  getallrequestsbyuser(id:any){
    return this.http.get(`${this.User_api_getallrequestsByuser}/${id}`);
  }
  getallrequestBymanger(id:any){
    return this.http.get(`${this.User_api_getallrequestuserBymanager}/${id}`);
  }
  approvereqBymanager(idmanager:any,idreq:any){
    return this.http.put(`${this.User_api_managerAproveReq}/${idmanager}/${idreq}`,{});
  }
  NoapprovereqBymanager(idmanager:any,idreq:any){
    return this.http.put(`${this.User_api_managerNoAproveReq}/${idmanager}/${idreq}`,{});
  }

  getallreqByuseraprovegroupe(groupename:any){
    return this.http.get(`${this.User_api_getallrequestuserByuseraproval}/${groupename}`);
  }
  approvereqByuser(iduser:any,idreq:any){
    return this.http.put(`${this. User_api_userapAproveReq}/${iduser}/${idreq}`,{});
  }
  NoapprovereqByuser(iduser:any,idreq:any){
    return this.http.put(`${this.User_api_userapNoAproveReq}/${iduser}/${idreq}`,{});
  }
 

}
