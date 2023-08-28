import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent {
  constructor(private loginservice:LoginserviceService){}
  token:string=""
  ngOnInit(): void {
    this.token= localStorage.getItem('authToken')!;
    this.getme()
  }
  getme() {
    this.loginservice.getMe(this.token).subscribe((name: string) => {
      debugger
    console.log(name);
    });
    }
}
