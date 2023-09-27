import { Injectable } from '@angular/core';
import { HeaderDetails } from '../header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerInformation : HeaderDetails = {
    introduction: "Hello! I'm",
    heading: "Paul Jancura",
    subheader: "A higly motivated and detail oriented software developer."
  }


  constructor() { }

  getHeading() {
    return this.headerInformation;
  }
}
