import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imagePath = "/assets/img/clima.png";
  ciudad: string;
  temperatura: number;
  humedad: number;
  clima: string;
  query: boolean;
  loading: boolean;
  error: boolean;

  constructor(private _climaService: ClimaService) {
    this.ciudad = "Rosario";
    this.temperatura = 0;
    this.humedad = 0;
    this.clima = "";
    this.query = false;
    this.loading = false;
    this.error = false;
  }

  ngOnInit() {
    this.consultarClima();
  }

  consultarClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, error => {
      this.loading = false;
      this.errorMessage();
    })
  }

  errorMessage() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
      this.ciudad = '';
    }, 1500);
  }
}