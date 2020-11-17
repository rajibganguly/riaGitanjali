import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public url = environment.firebaseConfig.databaseURL;
  public seturl = `${this.url}/flatowners.json`;

  constructor(private http: HttpClient) { }

  getAllFlatOwners() {
    return this.http.get(this.seturl);
  }
}
