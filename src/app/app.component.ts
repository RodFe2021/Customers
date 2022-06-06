import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteraccionComponentes';
  clienteActual = "Juanita";
  customers = ['Ana','Alba','Diana','Flor'];

  addCustomer(newCustomer: string){
    this.customers.push(newCustomer);
  }
}
