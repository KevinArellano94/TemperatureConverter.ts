import { ITemperature, TemperatureUnit } from '../../Interfaces/ITemperature';

export class CelsiusTemperature extends ITemperature {
  convert(temperature: number, targetUnit: TemperatureUnit): number {
    switch (targetUnit) {
      case TemperatureUnit.Fahrenheit:
      case TemperatureUnit.F:
        return temperature * 9 / 5 + 32;
      case TemperatureUnit.Kelvin:
      case TemperatureUnit.K:
        return temperature + 273.15;
      default:
        return temperature;
    }
  }
}