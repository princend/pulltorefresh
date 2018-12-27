import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'https://randomapi.azurewebsites.net/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserFeedService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(api);
  }
}
