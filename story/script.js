      require([
        "esri/Map",
        "esri/WebMap",
        "esri/views/MapView",
        
      ], function(Map, WebMap, MapView) {
        const webmap = new WebMap({
          portalItem: {
            id: "b42d2263155e4022a4d866c1baaca810"
          }
        });
  
        const view = new MapView({
          map: webmap,
          center: [76.26429,9.9256],
          zoom: 6.5, // scale: 6.5
          container: "viewDiv"
        });
      });

// Reference : https://developers.arcgis.com/javascript/latest/display-a-web-map/
// Full map link : https://fleming.maps.arcgis.com/apps/mapviewer/index.html?webmap=b42d2263155e4022a4d866c1baaca810
