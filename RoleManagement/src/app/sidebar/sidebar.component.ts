import { Component } from '@angular/core';
import { ClaimserviceService } from '../claimservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private claim:ClaimserviceService){}
  ngOnInit() {
    const claims = this.claim.getClaims();
    if (claims) {
      
    }
  }
}
