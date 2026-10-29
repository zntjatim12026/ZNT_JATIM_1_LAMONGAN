var size = 0;
var placement = 'point';
function categories_Klasifikasi_Jalan_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Arteri Sekunder':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,16,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Kolektor Primer 4':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,113,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Kolektor Sekunder':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,216,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Lingkungan Primer':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(81,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Lingkungan Sekunder':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,120,167,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Lokal Primer':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,252,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Lokal Sekunder':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,161,251,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,26,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Klasifikasi_Jalan_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Fungsi");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Klasifikasi_Jalan_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
