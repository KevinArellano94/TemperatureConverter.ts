import { TemperatureFactory } from './Factories/TemperatureFactory';
import { TemperatureUnit } from './Interfaces/ITemperature';

class Program {
  static main(args: string[]): void {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readline.question("Enter the temperature: ", (temperature: number) => {
      const temperatureValue = parseFloat(temperature.toString());
    
      readline.question("Enter the temperature unit (Celsius, Fahrenheit, Kelvin): ", (unit: string) => {
        const temperatureUnit = TemperatureUnit[unit as keyof typeof TemperatureUnit];
    
        readline.question("Enter the target temperature unit (Celsius, Fahrenheit, Kelvin): ", (targetUnit: string) => {
          const targetTemperatureUnit = TemperatureUnit[targetUnit as keyof typeof TemperatureUnit];
    
          const factory = new TemperatureFactory();
          const temperatureInstance = factory.getTemperatureInstance(temperatureUnit);
    
          const convertedTemperature = temperatureInstance.convert(temperatureValue, targetTemperatureUnit);
    
          console.log(`${temperatureValue} ${TemperatureUnit[temperatureUnit]} is ${convertedTemperature} ${TemperatureUnit[targetTemperatureUnit]}`);
    
          readline.close();
          
          setTimeout( () => { console.log("Exiting...") }, 5000 );
        });
      });
    });
  }
}

Program.main([]);