import {
  VehiculosEyectables,
  NavesEspacialesNoTripuladas,
  NavesEspacialesTripuladas,
} from './spacecraft.model';
import { ISpacecraft } from './interfaces/spacecraft';

export class SpaceCraftService {
  createSpacecraft(spacecraft: any, spaceshipType: string): ISpacecraft {

    if(spaceshipType === "Vehiculos lanzadera"){
        return new VehiculosEyectables(
            spacecraft.name,
            spacecraft.country,
            spacecraft.releaseYear,
            spacecraft.state,
            spacecraft.fuelType,
            spacecraft.maximumSpeed,
            spacecraft.numberOfCrew,
            spacecraft.takeOffPower,
            spacecraft.weight,
            spacecraft.type,
          );
    } else if (spaceshipType === "Nave tripulada") {
        return new NavesEspacialesTripuladas(
            spacecraft.name,
            spacecraft.country,
            spacecraft.releaseYear,
            spacecraft.state,
            spacecraft.fuelType,
            spacecraft.meanVelocityOverOrbit,
            spacecraft.numberOfCrew,
            spacecraft.weight,
            spacecraft.type,
          );
    } else {
        return new NavesEspacialesNoTripuladas(
            spacecraft.name,
            spacecraft.country,
            spacecraft.releaseYear,
            spacecraft.state,
            spacecraft.fuelType,
            spacecraft.meanVelocityOverOrbit,
            spacecraft.weight,
            spacecraft.type,
          );
    }
  }
}
