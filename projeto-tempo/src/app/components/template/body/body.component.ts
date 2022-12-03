import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherData } from 'src/app/models/weather/weather.model';
import { TableData } from 'src/app/models/table/table.model';
import { WatherService } from 'src/app/server/weather.service';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  constructor(private weatherService: WatherService) {}

  cityName: string = 'Garanhuns';
  weatherData?: WeatherData;

  displayedColumns: string[] = ['name', 'temperatura', 'chuva', 'umidade', 'vento', 'acao'];
  dataSource: WeatherData[] = []

  @ViewChild(MatTable) table: MatTable<TableData>;
  
  ngOnInit(): void {
    this.getDataRender(this.cityName)
  }

  /**
   * Vai receber o input da barra de pesquisa
   */
  onSubmit() {
    let result = this.getWeatherData(this.cityName)
    result.subscribe(val => this.addData(val))
    this.cityName = '';
  }

  /**
   * Vai receber o nome da cidade 
   * a partir dos botões
   * @param nameCity 
   */
  getCity(nameCity: string) {
    this.getDataRender(nameCity)
  }

  /**
   * Adiiciona os elementos na tabela
   */
  addData(result: WeatherData) {
    this.dataSource.push(result);
    this.table.renderRows();
  }

  /**
   * Remove os elementos da tabela
   */
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  /**
   * Realiza a consulta por meio do nome
   * @param cityName 
   * @returns 
   */
  private getWeatherData(cityName:string) {
    let result = this.weatherService.getWeatherData(cityName)
    return result
  }


  /**
   * Faz a renderização da tela com
   * as informações de temperatura
   * @param city 
   */
  private getDataRender(city: string) {
    this.getWeatherData(city)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response
      }
    })
  }
}
