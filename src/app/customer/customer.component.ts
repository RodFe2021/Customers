import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customers: string = '';
  @Output() newClienteEvento =new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


}
