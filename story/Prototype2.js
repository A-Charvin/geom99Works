require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/layers/FeatureLayer"

], function(esriConfig,Map, MapView, FeatureLayer) {

   // esriConfig.apiKey = "AAPK63dc6f1377f44fbb9b5ba0d22ce2078ege009eQiv7i9ZH9WXTW6kCVNwNfM-bpC3Dx0cneLrgIGAcct--dMWXnDaKkVcoC6";
    
    const map = new Map({
      basemap: "dark-gray-vector"
    });

    const view = new MapView({
      map: map,
      center: [76.26429,9.9256],
      zoom: 6.5, // scale
      container: "viewDiv",
      constraints: {
        snapToZoom: false
      }
    });

    //Heart feature layer (points)
  const HeartLayer = new FeatureLayer({
    url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/geojson_for_my_valentine/FeatureServer/0"
  });

  map.add(HeartLayer);

//Route feature layer (lines)
  const RouteLayer = new FeatureLayer({
    url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/geojson_for_my_valentine/FeatureServer/1"
  });

  map.add(RouteLayer, 0);



});
