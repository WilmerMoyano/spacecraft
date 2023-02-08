import { Component, OnInit } from '@angular/core';
import {SpaceCraftService} from './spacecraft.service';
import { ISpacecraft } from "./spacecraft";
@Component({
  selector: 'app-spacecraft',
  templateUrl: './spacecraft.component.html',
  styleUrls: ['./spacecraft.component.scss']
})
export class SpacecraftComponent implements OnInit{
  nave: any;
  constructor(private spacecraftService: SpaceCraftService) {
  }

ngOnInit(): void {
  let na: any;
  na = {name:"saturnoV", country: "USA", releaseYear: 1990, state: true, fuelType:"nitro"};
  this.nave = this.spacecraftService.createSpacecraft(na);
  this.nave.fly();
}
}
