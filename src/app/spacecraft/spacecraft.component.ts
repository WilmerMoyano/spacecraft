import { Component, OnInit } from '@angular/core';
import { SpaceCraftService } from './spacecraft.service';

@Component({
  selector: 'app-spacecraft',
  templateUrl: './spacecraft.component.html',
  styleUrls: ['./spacecraft.component.scss'],
})
export class SpacecraftComponent implements OnInit {
  nave: Array<any>=[];
  spacecraftType: string = '';
  constructor(private spacecraftService: SpaceCraftService) {}

  ngOnInit(): void {
    this.spacecraftType = 'Vehiculos lanzadera';
    let naveConcreta = {
      name: 'Zenit II',
      country: 'Rusia',
      releaseYear: 1985,
      state: 'activo',
      fuelType: 'Queroseno+O(liq,)',
      maximumSpeed: 20000000,
      numberOfCrew: 3,
      takeOffPower: 180000,
      weight: 3500,
      type: "Nave eyectable", 
    };


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Larga marcha 3B',
      country: 'China',
      releaseYear: 1996,
      state: 'actvo',
      fuelType: 'UDMH+N2O4',
      maximumSpeed: 300000000,
      numberOfCrew: 4,
      takeOffPower: 270000,
      weight: 3800,
      type: "Nave eyectable"},
      "Nave eyectable"
    ));


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'H-IIA',
      country: 'Japon',
      releaseYear: 2001,
      state: 'activo',
      fuelType: 'Solido+N(liq)+o(liq)',
      maximumSpeed: 220000000,
      numberOfCrew: 2,
      takeOffPower: 190000,
      weight: 3100,
      type: "Nave eyectable"},
      "Nave eyectable"
    ));


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Saturno V',
      country: 'USA',
      releaseYear: 1997,
      state: 'inactivo',
      fuelType: 'Queroseno+O(liq,)',
      maximumSpeed: 250000000,
      numberOfCrew: 3,
      takeOffPower: 160000,
      weight: 2900,
      type: "Nave eyectable"},
      "Nave eyectable"
    ));


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Explorer',
      country: 'USA',
      releaseYear: 1958,
      state: 'inactivo',
      fuelType: 'NO4+MMH',
      meanVelocityOverOrbit: 12000,
      weight: 6000,
      type: "Nave no tripulada"},
      "Nave no tripulada"
    ));


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Venera IX',
      country: 'Rusia',
      releaseYear: 1957,
      state: 'activo',
      fuelType: 'N2O4+UDMH',
      meanVelocityOverOrbit: 13000,
      weight: 7000,
      type: "Nave no tripulada"},
      "Nave no tripulada"
    ));


    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Soho',
      country: 'Europa',
      releaseYear: 1975,
      state: 'activo',
      fuelType: 'MMH**+NO',
      meanVelocityOverOrbit: 10000,
      weight: 5000,
      type: "Nave no tripulada"},
      "Nave no tripulada"
    ));

    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Apolo',
      country: 'USSE',
      releaseYear: 1966,
      state: 'inactivo',
      fuelType: 'Solido**',
      numberOfCrew:3,
      meanVelocityOverOrbit: 248.9,
      weight: 420,
      type: "Nave tripulada"},
      "Nave tripulada"
    ));

    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'EEI',
      country: 'Internacional',
      releaseYear: 1998,
      state: 'activo',
      fuelType: 'NO+Amina',
      numberOfCrew:4,
      meanVelocityOverOrbit: 260.9,
      weight: 500,
      type: "Nave tripulada"},
      "Nave tripulada"
    ));

    this.nave.push( this.spacecraftService.createSpacecraft(
      {name: 'Shenzou',
      country: 'CHINA',
      releaseYear: 1999,
      state: 'activo',
      fuelType: 'N2O4+MMH',
      numberOfCrew:3,
      meanVelocityOverOrbit: 230.5,
      weight: 410,
      type: "Nave tripulada"},
      "Nave tripulada"
    ));


    console.log(this.nave);
    this.nave[0].fly();
    console.log(this.nave[0]?.type);
  }
}
