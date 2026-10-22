var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_Lamongan_OSM_Cut_1 = new ol.format.GeoJSON();
var features_Jalan_Lamongan_OSM_Cut_1 = format_Jalan_Lamongan_OSM_Cut_1.readFeatures(json_Jalan_Lamongan_OSM_Cut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Lamongan_OSM_Cut_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Lamongan_OSM_Cut_1.addFeatures(features_Jalan_Lamongan_OSM_Cut_1);
var lyr_Jalan_Lamongan_OSM_Cut_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Lamongan_OSM_Cut_1, 
                style: style_Jalan_Lamongan_OSM_Cut_1,
                popuplayertitle: 'Jalan_Lamongan_OSM_Cut',
                interactive: false,
    title: 'Jalan_Lamongan_OSM_Cut<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_0.png" /> Jalan Akses<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_1.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_2.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_3.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_4.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_5.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_6.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_1_7.png" /> <br />' });
var format_Kecamatan_jawa_Timur_2 = new ol.format.GeoJSON();
var features_Kecamatan_jawa_Timur_2 = format_Kecamatan_jawa_Timur_2.readFeatures(json_Kecamatan_jawa_Timur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_jawa_Timur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_jawa_Timur_2.addFeatures(features_Kecamatan_jawa_Timur_2);
var lyr_Kecamatan_jawa_Timur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_jawa_Timur_2, 
                style: style_Kecamatan_jawa_Timur_2,
                popuplayertitle: 'Kecamatan_jawa_Timur',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_jawa_Timur_2.png" /> Kecamatan_jawa_Timur'
            });
var format_BatasDesaKel_3 = new ol.format.GeoJSON();
var features_BatasDesaKel_3 = format_BatasDesaKel_3.readFeatures(json_BatasDesaKel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaKel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKel_3.addFeatures(features_BatasDesaKel_3);
var lyr_BatasDesaKel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaKel_3, 
                style: style_BatasDesaKel_3,
                popuplayertitle: 'Batas Desa-Kel',
                interactive: false,
                title: '<img src="styles/legend/BatasDesaKel_3.png" /> Batas Desa-Kel'
            });
var format_Zona_Awal_Editor_10172026_1744_4 = new ol.format.GeoJSON();
var features_Zona_Awal_Editor_10172026_1744_4 = format_Zona_Awal_Editor_10172026_1744_4.readFeatures(json_Zona_Awal_Editor_10172026_1744_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Awal_Editor_10172026_1744_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Awal_Editor_10172026_1744_4.addFeatures(features_Zona_Awal_Editor_10172026_1744_4);
var lyr_Zona_Awal_Editor_10172026_1744_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Awal_Editor_10172026_1744_4, 
                style: style_Zona_Awal_Editor_10172026_1744_4,
                popuplayertitle: 'Zona_Awal_Editor_10172026_1744',
                interactive: true,
    title: 'Zona_Awal_Editor_10172026_1744<br />\
    <img src="styles/legend/Zona_Awal_Editor_10172026_1744_4_0.png" /> Non-Pertanian<br />\
    <img src="styles/legend/Zona_Awal_Editor_10172026_1744_4_1.png" /> Pertanian<br />' });
var format_TitikSurvey_5 = new ol.format.GeoJSON();
var features_TitikSurvey_5 = format_TitikSurvey_5.readFeatures(json_TitikSurvey_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSurvey_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSurvey_5.addFeatures(features_TitikSurvey_5);
var lyr_TitikSurvey_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSurvey_5, 
                style: style_TitikSurvey_5,
                popuplayertitle: 'Titik Survey',
                interactive: true,
    title: 'Titik Survey<br />\
    <img src="styles/legend/TitikSurvey_5_0.png" /> 1<br />\
    <img src="styles/legend/TitikSurvey_5_1.png" /> 2<br />' });
var group_ZonaNilaiTanah = new ol.layer.Group({
                                layers: [lyr_Zona_Awal_Editor_10172026_1744_4,lyr_TitikSurvey_5,],
                                fold: 'close',
                                title: 'Zona Nilai Tanah'});
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_Kecamatan_jawa_Timur_2,lyr_BatasDesaKel_3,],
                                fold: 'close',
                                title: 'Batas Administrasi'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Jalan_Lamongan_OSM_Cut_1.setVisible(true);lyr_Kecamatan_jawa_Timur_2.setVisible(true);lyr_BatasDesaKel_3.setVisible(true);lyr_Zona_Awal_Editor_10172026_1744_4.setVisible(true);lyr_TitikSurvey_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Jalan_Lamongan_OSM_Cut_1,group_BatasAdministrasi,group_ZonaNilaiTanah];
lyr_Jalan_Lamongan_OSM_Cut_1.set('fieldAliases', {'code': 'code', 'fclass': 'fclass', 'name': 'name', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'EditBy': 'EditBy', });
lyr_Kecamatan_jawa_Timur_2.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Operator': 'Operator', });
lyr_BatasDesaKel_3.set('fieldAliases', {'REGION': 'REGION', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'NEGARA': 'NEGARA', 'KODE_UNSUR': 'KODE_UNSUR', 'TOPONYM': 'TOPONYM', 'LUAS_DESA': 'LUAS_DESA', 'LUAS_KECA': 'LUAS_KECA', 'LUAS_KABU': 'LUAS_KABU', 'LUAS_PROV': 'LUAS_PROV', 'WEB_KABU': 'WEB_KABU', 'WEB_PROV': 'WEB_PROV', 'KODE_BPS': 'KODE_BPS', 'IBU_KABU': 'IBU_KABU', 'POPU_KABU': 'POPU_KABU', 'IBU_PROV': 'IBU_PROV', 'POPU_PROV': 'POPU_PROV', 'LUAS_UNSUR': 'LUAS_UNSUR', 'KET_KECA': 'KET_KECA', 'KET_KABU': 'KET_KABU', 'LuasSdr': 'LuasSdr', });
lyr_Zona_Awal_Editor_10172026_1744_4.set('fieldAliases', {'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Keterangan': 'Keterangan', });
lyr_TitikSurvey_5.set('fieldAliases', {'Nomor Sampel': 'Nomor Sampel', 'No Marking GPS': 'No Marking GPS', 'Nomor Identifikasi': 'Nomor Identifikasi', 'Nama Surveyor': 'Nama Surveyor', 'Tanggal Pelaksanaan': 'Tanggal Pelaksanaan', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Y': 'Y', 'X': 'X', 'Status Kepemilikan': 'Status Kepemilikan', 'Jenis Data': 'Jenis Data', 'Tanggal Penawaran/ Transaksi': 'Tanggal Penawaran/ Transaksi', 'Harga Penawaran/ Transaksi (Rp.)': 'Harga Penawaran/ Transaksi (Rp.)', 'Luas tanah (m2)': 'Luas tanah (m2)', 'Lebar Depan (m)': 'Lebar Depan (m)', 'Panjang Kebelakang (m)': 'Panjang Kebelakang (m)', 'Bentuk Tanah': 'Bentuk Tanah', 'Elevasi dari Jalan': 'Elevasi dari Jalan', 'Letak Tanah': 'Letak Tanah', 'Kelas Jalan': 'Kelas Jalan', 'Lebar Jalan': 'Lebar Jalan', 'Aksesibilitas': 'Aksesibilitas', 'Drainase': 'Drainase', 'Utilitas': 'Utilitas', 'Fasilitas': 'Fasilitas', 'Zoning/ Peruntukan': 'Zoning/ Peruntukan', 'Luas Bangunan': 'Luas Bangunan', 'Jenis': 'Jenis', 'Jumlah Lantai': 'Jumlah Lantai', 'Tahun Pembuatan': 'Tahun Pembuatan', 'Tahun Renovasi': 'Tahun Renovasi', 'Konstruksi Atas': 'Konstruksi Atas', 'Konstruksi Bawah': 'Konstruksi Bawah', 'Atap': 'Atap', 'Dinding': 'Dinding', 'LangitLangit': 'LangitLangit', 'Lantai': 'Lantai', 'Pagar': 'Pagar', 'Panjang Pagar': 'Panjang Pagar', 'Luas Carport': 'Luas Carport', 'Pintu/Jendela': 'Pintu/Jendela', 'Jumlah Fasilitas': 'Jumlah Fasilitas', 'Keadaan Fisik Umumnya': 'Keadaan Fisik Umumnya', 'Biaya Per m2 bangunan': 'Biaya Per m2 bangunan', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'RCN                   (Biaya Pembuatan Bangunan Baru)', 'Tahun Penilaian': 'Tahun Penilaian', 'Umur Efektif': 'Umur Efektif', 'Penyusutan (%)': 'Penyusutan (%)', 'Nilai Bangunan': 'Nilai Bangunan', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'Harga Penyesuaian                     Penawaran                     (Rp.)', 'Nilai Bangunan       (Rp.)': 'Nilai Bangunan       (Rp.)', 'Harga Tanah               (Rp.)': 'Harga Tanah               (Rp.)', 'Penyesuaian Waktu (%)': 'Penyesuaian Waktu (%)', 'Penyesuaian Status Kepemilikan (%)': 'Penyesuaian Status Kepemilikan (%)', 'Nilai Tanah': 'Nilai Tanah', 'Nilai Tanah/m2': 'Nilai Tanah/m2', 'Akses': 'Akses', 'Penyusutan Rumah (%)': 'Penyusutan Rumah (%)', 'Penyusutan Ruko (%)': 'Penyusutan Ruko (%)', 'Keterangan': 'Keterangan', 'Foto1': 'Foto1', 'Foto2': 'Foto2', 'Keterangan_1': 'Keterangan_1', 'Pembanding': 'Pembanding', 'Penyusutan Rumah (%)_1': 'Penyusutan Rumah (%)_1', 'field_68': 'field_68', 'Penyusutan Ruko (%)_1': 'Penyusutan Ruko (%)_1', 'field_70': 'field_70', 'N.Sementara': 'N.Sementara', 'No Urut Entry_Lama': 'No Urut Entry_Lama', 'Responden': 'Responden', 'Konstanta Harga Penyesuaian Penawaran': 'Konstanta Harga Penyesuaian Penawaran', 'Catatan': 'Catatan', 'ID Survei': 'ID Survei', 'Tidak Digunakan': 'Tidak Digunakan', 'Zoning Asal': 'Zoning Asal', });
lyr_Jalan_Lamongan_OSM_Cut_1.set('fieldImages', {'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'EditBy': 'TextEdit', });
lyr_Kecamatan_jawa_Timur_2.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Operator': 'TextEdit', });
lyr_BatasDesaKel_3.set('fieldImages', {'REGION': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'NEGARA': 'TextEdit', 'KODE_UNSUR': 'TextEdit', 'TOPONYM': 'TextEdit', 'LUAS_DESA': 'TextEdit', 'LUAS_KECA': 'TextEdit', 'LUAS_KABU': 'TextEdit', 'LUAS_PROV': 'TextEdit', 'WEB_KABU': 'TextEdit', 'WEB_PROV': 'TextEdit', 'KODE_BPS': 'TextEdit', 'IBU_KABU': 'TextEdit', 'POPU_KABU': 'TextEdit', 'IBU_PROV': 'TextEdit', 'POPU_PROV': 'TextEdit', 'LUAS_UNSUR': 'TextEdit', 'KET_KECA': 'TextEdit', 'KET_KABU': 'TextEdit', 'LuasSdr': 'TextEdit', });
lyr_Zona_Awal_Editor_10172026_1744_4.set('fieldImages', {'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikSurvey_5.set('fieldImages', {'Nomor Sampel': 'Range', 'No Marking GPS': 'TextEdit', 'Nomor Identifikasi': 'TextEdit', 'Nama Surveyor': 'TextEdit', 'Tanggal Pelaksanaan': 'DateTime', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Status Kepemilikan': 'TextEdit', 'Jenis Data': 'TextEdit', 'Tanggal Penawaran/ Transaksi': 'DateTime', 'Harga Penawaran/ Transaksi (Rp.)': 'TextEdit', 'Luas tanah (m2)': 'TextEdit', 'Lebar Depan (m)': 'TextEdit', 'Panjang Kebelakang (m)': 'Range', 'Bentuk Tanah': 'TextEdit', 'Elevasi dari Jalan': 'TextEdit', 'Letak Tanah': 'TextEdit', 'Kelas Jalan': 'TextEdit', 'Lebar Jalan': 'Range', 'Aksesibilitas': 'TextEdit', 'Drainase': 'TextEdit', 'Utilitas': 'TextEdit', 'Fasilitas': 'TextEdit', 'Zoning/ Peruntukan': 'Range', 'Luas Bangunan': 'Range', 'Jenis': 'TextEdit', 'Jumlah Lantai': 'Range', 'Tahun Pembuatan': 'Range', 'Tahun Renovasi': 'Range', 'Konstruksi Atas': 'TextEdit', 'Konstruksi Bawah': 'TextEdit', 'Atap': 'TextEdit', 'Dinding': 'TextEdit', 'LangitLangit': 'TextEdit', 'Lantai': 'TextEdit', 'Pagar': 'TextEdit', 'Panjang Pagar': 'Range', 'Luas Carport': 'Range', 'Pintu/Jendela': 'TextEdit', 'Jumlah Fasilitas': 'Range', 'Keadaan Fisik Umumnya': 'TextEdit', 'Biaya Per m2 bangunan': 'Range', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'TextEdit', 'Tahun Penilaian': 'Range', 'Umur Efektif': 'Range', 'Penyusutan (%)': 'Range', 'Nilai Bangunan': 'Range', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'TextEdit', 'Nilai Bangunan       (Rp.)': 'Range', 'Harga Tanah               (Rp.)': 'TextEdit', 'Penyesuaian Waktu (%)': 'TextEdit', 'Penyesuaian Status Kepemilikan (%)': 'Range', 'Nilai Tanah': 'TextEdit', 'Nilai Tanah/m2': 'TextEdit', 'Akses': 'TextEdit', 'Penyusutan Rumah (%)': 'Range', 'Penyusutan Ruko (%)': 'Range', 'Keterangan': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', 'Keterangan_1': 'TextEdit', 'Pembanding': 'TextEdit', 'Penyusutan Rumah (%)_1': 'Range', 'field_68': 'Range', 'Penyusutan Ruko (%)_1': 'Range', 'field_70': 'Range', 'N.Sementara': 'TextEdit', 'No Urut Entry_Lama': 'TextEdit', 'Responden': 'TextEdit', 'Konstanta Harga Penyesuaian Penawaran': 'TextEdit', 'Catatan': 'TextEdit', 'ID Survei': 'Range', 'Tidak Digunakan': 'TextEdit', 'Zoning Asal': 'Range', });
lyr_Jalan_Lamongan_OSM_Cut_1.set('fieldLabels', {'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'EditBy': 'no label', });
lyr_Kecamatan_jawa_Timur_2.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Operator': 'no label', });
lyr_BatasDesaKel_3.set('fieldLabels', {'REGION': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROVINSI': 'no label', 'NEGARA': 'no label', 'KODE_UNSUR': 'no label', 'TOPONYM': 'no label', 'LUAS_DESA': 'no label', 'LUAS_KECA': 'no label', 'LUAS_KABU': 'no label', 'LUAS_PROV': 'no label', 'WEB_KABU': 'no label', 'WEB_PROV': 'no label', 'KODE_BPS': 'no label', 'IBU_KABU': 'no label', 'POPU_KABU': 'no label', 'IBU_PROV': 'no label', 'POPU_PROV': 'no label', 'LUAS_UNSUR': 'no label', 'KET_KECA': 'no label', 'KET_KABU': 'no label', 'LuasSdr': 'no label', });
lyr_Zona_Awal_Editor_10172026_1744_4.set('fieldLabels', {'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'inline label - visible with data', 'JNSZN': 'hidden field', 'PENGGUNAAN': 'inline label - visible with data', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', });
lyr_TitikSurvey_5.set('fieldLabels', {'Nomor Sampel': 'inline label - visible with data', 'No Marking GPS': 'hidden field', 'Nomor Identifikasi': 'hidden field', 'Nama Surveyor': 'inline label - visible with data', 'Tanggal Pelaksanaan': 'hidden field', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Kelurahan': 'hidden field', 'Kecamatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Status Kepemilikan': 'inline label - visible with data', 'Jenis Data': 'inline label - visible with data', 'Tanggal Penawaran/ Transaksi': 'hidden field', 'Harga Penawaran/ Transaksi (Rp.)': 'inline label - visible with data', 'Luas tanah (m2)': 'inline label - visible with data', 'Lebar Depan (m)': 'inline label - visible with data', 'Panjang Kebelakang (m)': 'hidden field', 'Bentuk Tanah': 'hidden field', 'Elevasi dari Jalan': 'hidden field', 'Letak Tanah': 'hidden field', 'Kelas Jalan': 'hidden field', 'Lebar Jalan': 'hidden field', 'Aksesibilitas': 'hidden field', 'Drainase': 'hidden field', 'Utilitas': 'hidden field', 'Fasilitas': 'hidden field', 'Zoning/ Peruntukan': 'inline label - visible with data', 'Luas Bangunan': 'inline label - visible with data', 'Jenis': 'hidden field', 'Jumlah Lantai': 'inline label - always visible', 'Tahun Pembuatan': 'hidden field', 'Tahun Renovasi': 'hidden field', 'Konstruksi Atas': 'hidden field', 'Konstruksi Bawah': 'hidden field', 'Atap': 'hidden field', 'Dinding': 'hidden field', 'LangitLangit': 'hidden field', 'Lantai': 'hidden field', 'Pagar': 'hidden field', 'Panjang Pagar': 'hidden field', 'Luas Carport': 'hidden field', 'Pintu/Jendela': 'hidden field', 'Jumlah Fasilitas': 'hidden field', 'Keadaan Fisik Umumnya': 'inline label - visible with data', 'Biaya Per m2 bangunan': 'inline label - visible with data', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'hidden field', 'Tahun Penilaian': 'hidden field', 'Umur Efektif': 'hidden field', 'Penyusutan (%)': 'hidden field', 'Nilai Bangunan': 'inline label - always visible', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'hidden field', 'Nilai Bangunan       (Rp.)': 'hidden field', 'Harga Tanah               (Rp.)': 'hidden field', 'Penyesuaian Waktu (%)': 'hidden field', 'Penyesuaian Status Kepemilikan (%)': 'hidden field', 'Nilai Tanah': 'inline label - visible with data', 'Nilai Tanah/m2': 'inline label - visible with data', 'Akses': 'hidden field', 'Penyusutan Rumah (%)': 'hidden field', 'Penyusutan Ruko (%)': 'hidden field', 'Keterangan': 'hidden field', 'Foto1': 'hidden field', 'Foto2': 'hidden field', 'Keterangan_1': 'hidden field', 'Pembanding': 'hidden field', 'Penyusutan Rumah (%)_1': 'hidden field', 'field_68': 'hidden field', 'Penyusutan Ruko (%)_1': 'hidden field', 'field_70': 'hidden field', 'N.Sementara': 'hidden field', 'No Urut Entry_Lama': 'hidden field', 'Responden': 'hidden field', 'Konstanta Harga Penyesuaian Penawaran': 'hidden field', 'Catatan': 'inline label - visible with data', 'ID Survei': 'hidden field', 'Tidak Digunakan': 'hidden field', 'Zoning Asal': 'hidden field', });
lyr_TitikSurvey_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});