import {VehiculosEyectables, NavesEspacialesNoTripuladas} from "./spacecraft.model";
import { ISpacecraft } from "./spacecraft";


export class SpaceCraftService {

    createSpacecraft(spacecraft: any) : ISpacecraft  {
    let saturnoVI = new VehiculosEyectables(spacecraft.name, spacecraft.country, spacecraft.releaseYear, spacecraft.state, spacecraft.fuelType);
        console.log(saturnoVI);
        return saturnoVI;
    }
}