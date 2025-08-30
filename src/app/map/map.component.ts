
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
 map!: L.Map;
  marker!: L.Marker;

countries = [
  { name: 'Afghanistan', coords: [33.9391, 67.7100] },
  { name: 'Albania', coords: [41.1533, 20.1683] },
  { name: 'Algeria', coords: [28.0339, 1.6596] },
  { name: 'Andorra', coords: [42.5063, 1.5218] },
  { name: 'Angola', coords: [-11.2027, 17.8739] },
  { name: 'Argentina', coords: [-38.4161, -63.6167] },
  { name: 'Armenia', coords: [40.0691, 45.0382] },
  { name: 'Australia', coords: [-25.2744, 133.7751] },
  { name: 'Austria', coords: [47.5162, 14.5501] },
  { name: 'Azerbaijan', coords: [40.1431, 47.5769] },
  { name: 'Bangladesh', coords: [23.6850, 90.3563] },
  { name: 'Belgium', coords: [50.5039, 4.4699] },
  { name: 'Brazil', coords: [-14.2350, -51.9253] },
  { name: 'Canada', coords: [56.1304, -106.3468] },
  { name: 'China', coords: [35.8617, 104.1954] },
  { name: 'France', coords: [46.6034, 1.8883] },
  { name: 'Germany', coords: [51.1657, 10.4515] },
  { name: 'India', coords: [20.5937, 78.9629] },
  { name: 'Japan', coords: [36.2048, 138.2529] },
  { name: 'United Kingdom', coords: [55.3781, -3.4360] },
  { name: 'United States', coords: [37.0902, -95.7129] }
];


  selectedCountry: string = 'India';

  ngAfterViewInit() {
    // ✅ Destroy previous map instance if exists
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker([20.5937, 78.9629]).addTo(this.map)
      .bindPopup('India')
      .openPopup();
  }

  showCountry() {
    const country = this.countries.find(c => c.name === this.selectedCountry);
    if (country) {
      const [lat, lng] = country.coords;

      this.map.setView([lat, lng], 4);

      if (this.marker) {
        this.map.removeLayer(this.marker);
      }

      this.marker = L.marker([lat, lng]).addTo(this.map)
        .bindPopup(country.name)
        .openPopup();
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();  // ✅ cleanup on destroy
    }
  }

  
}
