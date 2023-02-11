import { ITemperature, TemperatureUnit } from "../../Interfaces/ITemperature";

export class KelvinTemperature extends ITemperature {
  convert(temperature: number, targetUnit: TemperatureUnit): number {
    switch (targetUnit) {
      case TemperatureUnit.Celsius:
      case TemperatureUnit.C:
        return temperature - 273.15;
      case TemperatureUnit.Fahrenheit:
      case TemperatureUnit.F:
        return temperature * 9 / 5 - 459.67;
      default:
        return temperature;
    }
  }
}