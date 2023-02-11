import { ITemperature, TemperatureUnit } from '../Interfaces/ITemperature';
import { CelsiusTemperature } from './Celsius/Celsius';
import { FahrenheitTemperature } from './Fahrenheit/Fahrenheit';
import { KelvinTemperature } from './Kelvin/Kelvin';

export class TemperatureFactory {
  getTemperatureInstance(unit: TemperatureUnit): ITemperature {
    switch (unit) {
      case TemperatureUnit.Celsius:
      case TemperatureUnit.C:
        return new CelsiusTemperature();
      case TemperatureUnit.Fahrenheit:
      case TemperatureUnit.F:
        return new FahrenheitTemperature();
      case TemperatureUnit.Kelvin:
      case TemperatureUnit.K:
        return new KelvinTemperature();
      default:
        throw new Error("Invalid temperature unit.");
    }
  }
}