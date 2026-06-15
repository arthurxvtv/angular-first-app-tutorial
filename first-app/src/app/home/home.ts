import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation'
import { HousingService } from '../housing.service';
// import {} from ''

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }

}
