import { ISpacecraft } from "./spacecraft";

export class VehiculosEyectables implements ISpacecraft {
  fuelType: string;
  country: string;
  releaseYear: number;
  state: boolean;
  name: string;

  constructor(
    name: string,
    country: string,
    releaseYear: number,
    state: boolean,
    fuelType: string
  ) {
    (this.name = name),
      (this.country = country),
      (this.releaseYear = releaseYear),
      (this.state = state),
      (this.fuelType = fuelType);
  }
  fly(): void {
    console.log("estamos volando, qué gonorrea!");
  }

}



export class NavesEspacialesTripuladas {}

export class NavesEspacialesNoTripuladas {}
