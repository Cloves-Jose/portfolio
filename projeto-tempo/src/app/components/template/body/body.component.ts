import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherData } from 'src/app/models/weather/weather.model';
import { InputData } from 'src/app/models/input/city.model'
import { TableData } from 'src/app/models/table/table.model';
import { WatherService } from 'src/app/server/weather.service';
import { MatTable } from '@angular/material/table';


const ELEMENT_DATA: TableData[] = [
  {id: '1', cidade: 'Garanhuns', temperatura: '20', chuva: '70', umidade: '80', vento: '3.09'}
];


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private weatherService: WatherService) { }

  cityName: string = 'Natal';
  weatherData?: WeatherData;
  inputData?: InputData
  displayedColumns: string[] = ['id', 'cidade', 'temperatura', 'chuva', 'umidade', 'vento', 'acao'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<TableData>;
  
  ngOnInit(): void {
    this.getWheatherData(this.cityName)
  }

  /**
   * Vai receber o input da barra de pesquisa
   */
  onSubmit() {
    this.getWheatherData(this.cityName)
    this.addData()
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
   * Adiiciona os elementos na tabela
   */
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
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
