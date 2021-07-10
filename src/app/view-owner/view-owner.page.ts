import { Component, OnInit } from '@angular/core';
// import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.page.html',
  styleUrls: ['./view-owner.page.scss'],
})
export class ViewOwnerPage implements OnInit {
  owersDetails;
  constructor() { }

  ngOnInit() {
    const ownr = sessionStorage.getItem('owner');
    this.owersDetails = JSON.parse(ownr);
  }

  callHere(number) {
    // this.callNumber.callNumber(number, true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  }

}
