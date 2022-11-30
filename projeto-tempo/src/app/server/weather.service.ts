import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather/weather.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatherService {

  /**
   * Injetando dependência para comunicação com o endpoint
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Pega a clima por meio do nome
   * da cidade
   * @param cityName 
   */
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl 
      + '?q=' 
      + cityName 
      + '&appid=' 
      + environment.XRapidAPIKeyHeaderValue
    )
    .pipe(
      retry(2)
    )
  }
}
