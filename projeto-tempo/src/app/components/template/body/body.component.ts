import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather/weather.model';
import { InputData } from 'src/app/models/input/city.model'
// import { TableData } from 'src/app/models/table/table.model';
import { WatherService } from 'src/app/server/weather.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // displayedColumns: string[] = ['Cidade', 'Temperatura', 'Chuva', 'Umidade', 'Vento', 'Ação']
  // WeatherMock:any;

  constructor(private weatherService: WatherService) { }

  cityName: string = 'Natal';
  weatherData?: WeatherData;
  inputData?: InputData
  // tableData?: TableData;

  
  ngOnInit(): void {
    this.getWheatherData(this.cityName)
  }

  onSubmit() {
    this.getWheatherData(this.cityName)
    this.cityName = '';
  }

  /**
   * Vai receber o nome da cidade 
   * a partir dos botões
   * @param nameCity 
   */
  getCity(nameCity: string) {
    this.getWheatherData(nameCity)
  }

  /**
   * Realiza a consulta pelo nome 
   * de uma cidade
   * @param cityName 
   */
  private getWheatherData(cityName:string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response
        console.log(response)
      }
    });
  }
}
