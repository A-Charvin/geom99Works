require([
    "esri/config",
    "esri/Map",
    "esri/WebMap",
    "esri/views/MapView",


   ], function (esriConfig, WebMap, MapView) {

     esriConfig.apiKey = "AAPK63dc6f1377f44fbb9b5ba0d22ce2078ege009eQiv7i9ZH9WXTW6kCVNwNfM-bpC3Dx0cneLrgIGAcct--dMWXnDaKkVcoC6";
     const webmap = new WebMap({
      portalItem: {
        id: "b42d2263155e4022a4d866c1baaca810"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap

    });

});
