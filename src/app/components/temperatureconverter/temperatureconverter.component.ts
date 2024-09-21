import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {

  temperature: number | null = null;
  conversionType: string = 'celsiusToFahrenheit';
  convertedTemperature: number | null = null;

  // Method to convert temperature based on selected conversion type
  convertTemperature() {
    if (this.temperature !== null) {
      if (this.conversionType === 'celsiusToFahrenheit') {
        // Celsius to Fahrenheit conversion
        this.convertedTemperature = (this.temperature * 9/5) + 32;
      } else if (this.conversionType === 'fahrenheitToCelsius') {
        // Fahrenheit to Celsius conversion
        this.convertedTemperature = (this.temperature - 32) * 5/9;
      }
    }
  }
}
