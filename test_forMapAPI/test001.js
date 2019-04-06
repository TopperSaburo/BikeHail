let platform = new H.service.Platform({
    "app_id":"iyo4JfGPiGiUwO7Jwkei",
    "app_code":"pmt_9cbTvp15TTYMhDOB-w"
})
let defaultLayers = platform.createDefaultLayers();
let map = new H.Map(
    document.getElementById("map");
    defaultLayers.normal.map,
    {
        zoom:10,
        center:{
            lat:52.5,
            ing:13.4
        }
    }
)
