import { Component, OnDestroy, OnInit } from '@angular/core';

import { MainService } from './../main.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  blockOwners: any = [];

  // All blocks
  blockOneOwner = [];
  blockTwoOwner = [];
  blockThreeOwner = [];
  blockFourOwner = [];
  blockFiveOwner = [];
  blockSixOwner = [];
  blockSevenOwner = [];

  constructor(private mainservice: MainService) {
    this.mainservice.getAllFlatOwners().subscribe((res) => { 
      this.blockOwners = res;
      this.fileterBlocks(res);
      //implements OnInit
    })
  }

  fileterBlocks(one) {
    this.blockOwners.filter((one) => {
      
      if(one.block == 1) {
        this.blockOneOwner.push(one);
      } else if(one.block == 2) {
        this.blockTwoOwner.push(one);
      } else if(one.block == 3) {
        this.blockThreeOwner.push(one);
      } else if(one.block == 4) {
        this.blockFourOwner.push(one);
      } else if(one.block == 5) {
        this.blockFiveOwner.push(one);
      }  else if(one.block == 6) {
        this.blockSixOwner.push(one);
      }  else if(one.block == 7) {
        this.blockSevenOwner.push(one);
      }  
    });

    
  }

  

}
