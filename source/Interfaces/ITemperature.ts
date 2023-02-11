export class ITemperature {
  static ITemperature: any;
  convert(temperature: number, targetUnit: TemperatureUnit): number {
    throw new Error("Method not implemented.");
  }
}

export enum TemperatureUnit {
  Celsius,
  C,
  Fahrenheit,
  F,
  Kelvin,
  K
}