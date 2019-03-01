'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZXB2MjEwNSIsImEiOiJjanNxYWVtZnoxNjl4NDN0OTd4aHh3dmR4In0.4gzJ9y4yTgI34CSfYdnpvQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/epv2105/cjsqalas308ur1fo3a0df2efq',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})