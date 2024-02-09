import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, HttpClientModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  itens: any
  constructor(private httpClient: HttpClient) {
    
  }
  async ngOnInit() {    
    this.itens = await this.getData()
  }

  title = 'angular17-ssr';

  async getData() {
    //const request: any = await this.httpClient.get('/api/products').toPromise()
    //return request.data
  }
}
