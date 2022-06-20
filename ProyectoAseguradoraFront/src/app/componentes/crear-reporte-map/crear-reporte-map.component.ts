import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-reporte-map',
  templateUrl: './crear-reporte-map.component.html',
  styleUrls: ['./crear-reporte-map.component.css']
})
export class CrearReporteMapComponent implements OnInit {

  constructor() { }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
  }
  /* initMap() {

            navigator.geolocation.getCurrentPosition((pos) => {
                console.log(pos.coords.latitude);
                console.log(pos.coords.longitude);
                let coords = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 50,
                    center: coords,
                });
                // The marker, positioned at Uluru
                const marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    draggable: true
                });
                marker.addListener("dragend", () => {
                    console.log(marker.getPosition().lat());
                    console.log(marker.getPosition().lng());
                })
            });

        } */
  
}
