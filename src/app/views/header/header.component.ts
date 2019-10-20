import {Component, OnInit, Output} from '@angular/core';
import {Client} from '../../models/Client';
import {ClientService} from '../../services/client.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/azurian.jpg';
  @Output() public clients: Client[];


  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  loadClients() {
    return this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
      console.log(this.clients);
    });
  }
}
