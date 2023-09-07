import { Component } from '@angular/core';
import { ClaimserviceService } from '../claimservice.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private claim:ClaimserviceService){}
  claims:any
  ngOnInit() {
    const claims = this.claim.getClaims();
    if (claims) {
      this.claims=claims.Permission
    }
  }
  containsString(str:string):boolean{
  
    return this.claims.includes(str)
  }
}
