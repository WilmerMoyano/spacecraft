export interface ISpacecraft {
  name: string;
  country: string;
  // fuelType: string,
  releaseYear: number;
  state: boolean;

  fly(): void;
}
