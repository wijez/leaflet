var BrightIcon = L.icon({
  iconUrl: 'images/cautreo.png',
  iconSize:     [40 , 40], // size of the icon
});

var baseIcons = {
  "BrightIcon": BrightIcon,
};


// var layerControl = L.control.layers(baseIcons).addTo(map);

export { baseIcons };