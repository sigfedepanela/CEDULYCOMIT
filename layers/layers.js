var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_CedulacinyPorcentajeporDEPARTAMENTO_1 = new ol.format.GeoJSON();
var features_CedulacinyPorcentajeporDEPARTAMENTO_1 = format_CedulacinyPorcentajeporDEPARTAMENTO_1.readFeatures(json_CedulacinyPorcentajeporDEPARTAMENTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CedulacinyPorcentajeporDEPARTAMENTO_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CedulacinyPorcentajeporDEPARTAMENTO_1.addFeatures(features_CedulacinyPorcentajeporDEPARTAMENTO_1);var lyr_CedulacinyPorcentajeporDEPARTAMENTO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CedulacinyPorcentajeporDEPARTAMENTO_1, 
                style: style_CedulacinyPorcentajeporDEPARTAMENTO_1,
    title: 'Cedulación y Porcentaje por DEPARTAMENTO<br />\
    <img src="styles/legend/CedulacinyPorcentajeporDEPARTAMENTO_1_0.png" />  0 - 700 <br />\
    <img src="styles/legend/CedulacinyPorcentajeporDEPARTAMENTO_1_1.png" />  700 - 1500 <br />\
    <img src="styles/legend/CedulacinyPorcentajeporDEPARTAMENTO_1_2.png" />  1500 - 2200 <br />\
    <img src="styles/legend/CedulacinyPorcentajeporDEPARTAMENTO_1_3.png" />  2200 - 3000 <br />\
    <img src="styles/legend/CedulacinyPorcentajeporDEPARTAMENTO_1_4.png" />  3000 - 3700 <br />'
        });var format_JuntaDirectivayComitesporDEPARTAMENTO_2 = new ol.format.GeoJSON();
var features_JuntaDirectivayComitesporDEPARTAMENTO_2 = format_JuntaDirectivayComitesporDEPARTAMENTO_2.readFeatures(json_JuntaDirectivayComitesporDEPARTAMENTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuntaDirectivayComitesporDEPARTAMENTO_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JuntaDirectivayComitesporDEPARTAMENTO_2.addFeatures(features_JuntaDirectivayComitesporDEPARTAMENTO_2);var lyr_JuntaDirectivayComitesporDEPARTAMENTO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JuntaDirectivayComitesporDEPARTAMENTO_2, 
                style: style_JuntaDirectivayComitesporDEPARTAMENTO_2,
    title: 'Junta Directiva y Comites por DEPARTAMENTO<br />\
    <img src="styles/legend/JuntaDirectivayComitesporDEPARTAMENTO_2_0.png" />  3 - 7 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDEPARTAMENTO_2_1.png" />  7 - 11 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDEPARTAMENTO_2_2.png" />  11 - 15 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDEPARTAMENTO_2_3.png" />  15 - 19 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDEPARTAMENTO_2_4.png" />  19 - 23 <br />'
        });var format_Cedulacionpormunicipio_3 = new ol.format.GeoJSON();
var features_Cedulacionpormunicipio_3 = format_Cedulacionpormunicipio_3.readFeatures(json_Cedulacionpormunicipio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cedulacionpormunicipio_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cedulacionpormunicipio_3.addFeatures(features_Cedulacionpormunicipio_3);var lyr_Cedulacionpormunicipio_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cedulacionpormunicipio_3, 
                style: style_Cedulacionpormunicipio_3,
    title: 'Cedulacion por municipio<br />\
    <img src="styles/legend/Cedulacionpormunicipio_3_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Cedulacionpormunicipio_3_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Cedulacionpormunicipio_3_2.png" />  40 - 50 <br />\
    <img src="styles/legend/Cedulacionpormunicipio_3_3.png" />  50 - 120 <br />\
    <img src="styles/legend/Cedulacionpormunicipio_3_4.png" />  120 - 210 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_CedulacinyPorcentajeporDEPARTAMENTO_1.setVisible(true);lyr_JuntaDirectivayComitesporDEPARTAMENTO_2.setVisible(true);lyr_Cedulacionpormunicipio_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_CedulacinyPorcentajeporDEPARTAMENTO_1,lyr_JuntaDirectivayComitesporDEPARTAMENTO_2,lyr_Cedulacionpormunicipio_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_CedulacinyPorcentajeporDEPARTAMENTO_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'No Cedulad': 'No Cedulad', '%': '%', });
lyr_JuntaDirectivayComitesporDEPARTAMENTO_2.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'No Cedulad': 'No Cedulad', 'Presidente': 'Presidente', 'Vicepresid': 'Vicepresid', 'No_Comites': 'No_Comites', });
lyr_Cedulacionpormunicipio_3.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'No_Cedulad': 'No_Cedulad', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_CedulacinyPorcentajeporDEPARTAMENTO_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'No Cedulad': 'TextEdit', '%': 'TextEdit', });
lyr_JuntaDirectivayComitesporDEPARTAMENTO_2.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'No Cedulad': 'TextEdit', 'Presidente': 'TextEdit', 'Vicepresid': 'TextEdit', 'No_Comites': 'TextEdit', });
lyr_Cedulacionpormunicipio_3.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'No_Cedulad': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_CedulacinyPorcentajeporDEPARTAMENTO_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'No Cedulad': 'inline label', '%': 'inline label', });
lyr_JuntaDirectivayComitesporDEPARTAMENTO_2.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'No Cedulad': 'inline label', 'Presidente': 'inline label', 'Vicepresid': 'inline label', 'No_Comites': 'inline label', });
lyr_Cedulacionpormunicipio_3.set('fieldLabels', {'Id': 'no label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'No_Cedulad': 'inline label', });
lyr_Cedulacionpormunicipio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});