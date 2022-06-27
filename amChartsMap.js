
var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#535364",
    backgroundAlpha : 1,
    zoomControl: {
        zoomControlEnabled : true
    },
    dataProvider : {
        map : "worldHigh",
        getAreasFromMap : true,
        areas :[
            {
                "id": "IT",
                "showAsSelected": true
            },
            {
                "id": "US",
                "showAsSelected": true
            }

        ]},
        areasSettings : {
            autoZoom : false,
            color : "#B4B4B7",
            colorSolid : "#84ADE9",
            selectedColor : "#84ADE9",
            outlineColor : "#666666",
            rollOverColor : "#9EC2F7",
            rollOverOutlineColor : "#000000"
        }
});
