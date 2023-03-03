import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = "https://api.openweathermap.org/data/2.5/weather?&appid=";
  apiKey = "e7b8445a246445a930253e67073aaa34";

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.apiKey + "&q=" + ciudad + "&appid=" + this.apiKey;

    return this.http.get(URL);
  }
}