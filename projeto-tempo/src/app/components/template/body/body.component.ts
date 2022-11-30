import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather/weather.model';
import { WatherService } from 'src/app/server/weather.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private weatherService: WatherService) { }

  cityName: string = 'Recife';
  weatherData?: WeatherData;

  
  ngOnInit(): void {
    this.getWheatherData(this.cityName)
  }

  onSubmit() {
    this.getWheatherData(this.cityName)
    this.cityName = '';
  }

  /**
   * Realiza a consulta pelo nome 
   * de uma cidade
   * @param cityName 
   */
  private getWheatherData(cityName:string) {
    // this.weatherService.getWeatherData(cityName)
    // .subscribe({
    //   next: (response: any) => {
    //     this.weatherData = response
    //     console.log(response)
    //   }
    // });
  }

}
