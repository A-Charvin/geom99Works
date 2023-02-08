require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView",
     "esri/Graphic",
     "esri/layers/GraphicsLayer",
     "esri/layers/FeatureLayer"

   ], function (esriConfig,Map, MapView,Graphic, GraphicsLayer,FeatureLayer) {

     esriConfig.apiKey = "AAPK63dc6f1377f44fbb9b5ba0d22ce2078ege009eQiv7i9ZH9WXTW6kCVNwNfM-bpC3Dx0cneLrgIGAcct--dMWXnDaKkVcoC6";
     const map = new Map({
       basemap: "arcgis-imagery" // Basemap layer
     });

     const view = new MapView({
       map: map,
       center: [76.26429,9.9256],
       zoom: 7, // scale: 72223.819286
       container: "viewDiv",
       constraints: {
         snapToZoom: false
       }
     });

     const graphicsLayer = new GraphicsLayer();

     // An array of coordinates, where each coordinate is an array of longitude and latitude values.
     // Sher, S. (2023, January 18). Top 28 honeymoon destinations in Kerala for a bewitching escape. 
     // TravelTriangle. Retrieved February 5, 2023, from https://traveltriangle.com/blog/top-honeymoon-destinations-in-kerala/ 

     const coordinates = [
        [75.02293, 12.42264, "Bekal - A Perfect Honeymoon Destination",],
        [76.08603, 11.71500, "Wayanad - A Charming Resort Amidst Nature"],
        [76.65902, 10.78031, "Palakkad - Witness Rich Heritage"],
        [76.91691, 10.37589, "Athirapally - A Mesmerizing Honeymoon Destination"],
        [77.06173, 10.08952, "Munnar - Seamless Expanse of Tea Plantations"],
        [77.02564, 9.67450, "Vagamon - Discover A Breathtaking Beauty"],
        [77.14913, 9.625421, "Thekkady - Lovely Idukki Town"],
        [76.97161, 9.57445, "Kuttikanam - A Natural Splendor For Travel Enthusiasts"],
        [76.42574, 9.647912, "Kumarakom - A Calm Backwater Town"],
        [76.31701, 9.495012, "Alleppey - Experience Tranquil Backwaters"],
        [76.97490, 8.389185, "Kovalam - Spend A Relaxed Beach Holiday"],
        [77.06195, 8.318152, "Poovar Island - For A Spectacular Trip"]
        ];
     const simpleMarkerSymbol = {
         type: "simple-marker",
         color: [255, 192, 203],  // Pink
         outline: {
             color: [1, 1, 1], // 1 Shade of Grey.. May be
             width: 0.5
         }
     };

 coordinates.forEach(coordinate => {
     const point = {
         type: "point",
         longitude: coordinate[0],
         latitude: coordinate[1]
     };
     const pointGraphic = new Graphic({
         geometry: point,
         symbol: simpleMarkerSymbol
     });
     pointGraphic.popupTemplate = {
         title: coordinate[2],
     };
     graphicsLayer.add(pointGraphic);
 });
 
 map.add(graphicsLayer);


         // Create a line geometry
 const polyline = {
    type: "polyline",
    paths: coordinates
 };
 const simpleLineSymbol = {
    type: "simple-line",
    color: [255, 0, 0], // Red
    width: 1.5
 };
 const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
 });
 graphicsLayer.add(polylineGraphic);
     
   });
