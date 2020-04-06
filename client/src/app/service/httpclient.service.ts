import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getApartment(): any {


    return this.httpClient.get("http://localhost:8055/products/getvendors");
  }


  public addUser(user) {
    return this.httpClient.post<any>("http://localhost:8055/signup", user);
  }


  public viewAuthorizedPage() {
    return this.httpClient.get("http://localhost:8080/viewauthorizedpage");
  }






}