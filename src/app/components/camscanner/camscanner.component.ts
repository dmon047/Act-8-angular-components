import { Component } from '@angular/core';

@Component({
  selector: 'app-camscanner',
  templateUrl: './camscanner.component.html',
  styleUrl: './camscanner.component.css'
})
export class CamscannerComponent {
  scannedResult: string = ''; // Result of the scan

  // Method to simulate starting a scan
  startScan() {
    // Simulate a scanning process
    this.scannedResult = 'Scanned document successfully.';
  }

}
