import { IFlyable } from "./interfaces/IFlyable";
import { IOrbitable } from "./interfaces/IOrbitable";
import { ISpacecraft } from "./interfaces/spacecraft";

export class VehiculosEyectables implements ISpacecraft, IFlyable{
  fuelType: string;
  country: string;
  releaseYear: number;
  state: boolean;
  name: string;
  weight: number;
  numberOfCrew: number;
  maximumSpeed: number;
  takeOffPower: number;
  type: string;
  

  constructor(
    name: string,
    country: string,
    releaseYear: number,
    state: boolean,
    fuelType: string,
    maximumSpeed: number,
    numberOfCrew: number,
    takeOffPower: number,
    weight: number,
    type: string,
  ) {
    (this.name = name),
      (this.country = country),
      (this.releaseYear = releaseYear),
      (this.state = state),
      (this.maximumSpeed = maximumSpeed),
      (this.numberOfCrew = numberOfCrew),
      (this.weight = weight),
      (this.takeOffPower = takeOffPower),
      (this.fuelType = fuelType);
      (this.type = type);
  }
  
  fly(): void {
    console.log("estamos volando");
  }

}



export class NavesEspacialesTripuladas implements ISpacecraft,IOrbitable {
  fuelType: string;
  country: string;
  releaseYear: number;
  state: boolean;
  name: string;
  weight: number;
  numberOfCrew: number;
  meanVelocityOverOrbit: number;
  type: string;

  constructor(
    name: string,
    country: string,
    releaseYear: number,
    state: boolean,
    fuelType: string,
    meanVelocityOverOrbit: number,
    numberOfCrew: number,
    weight: number,
    type: string,

  ) {
      (this.name = name),
      (this.country = country),
      (this.releaseYear = releaseYear),
      (this.state = state),
      (this.fuelType = fuelType),
      (this.meanVelocityOverOrbit = meanVelocityOverOrbit),
      (this.numberOfCrew = numberOfCrew),
      (this.weight = weight);
      (this.type = type);
  }
  
  orbit(): void {
    throw new Error("Method not implemented.");
  }
}

export class NavesEspacialesNoTripuladas implements ISpacecraft, IOrbitable{
  fuelType: string;
  country: string;
  releaseYear: number;
  state: boolean;
  name: string;
  weight: number;
  meanVelocityOverOrbit: number;
  type: string;

  constructor(
    name: string,
    country: string,
    releaseYear: number,
    state: boolean,
    fuelType: string,
    meanVelocityOverOrbit: number,
    weight: number,
    type: string,
  ) {
    (this.name = name),
      (this.country = country),
      (this.releaseYear = releaseYear),
      (this.state = state),
      (this.fuelType = fuelType),
      (this.meanVelocityOverOrbit = meanVelocityOverOrbit),
      (this.weight = weight);
      (this.type = type);
  }
  orbit(): void {
    throw new Error("Method not implemented.");
  }
}
