import { ITemperature, TemperatureUnit } from "../../Interfaces/ITemperature";

export class FahrenheitTemperature extends ITemperature {
  convert(temperature: number, targetUnit: TemperatureUnit): number {
    switch (targetUnit) {
      case TemperatureUnit.Celsius:
      case TemperatureUnit.C:
        return (temperature - 32) * 5 / 9;
      case TemperatureUnit.Kelvin:
        case TemperatureUnit.K:
        return (temperature + 459.67) * 5 / 9;
      default:
        return temperature;
    }
  }
}