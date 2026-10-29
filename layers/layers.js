ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([1282465.830718, 9177783.908942, 1336905.804245, 9235833.752994]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zona_Awal_Editor_10292026_0720_2 = new ol.format.GeoJSON();
var features_Zona_Awal_Editor_10292026_0720_2 = format_Zona_Awal_Editor_10292026_0720_2.readFeatures(json_Zona_Awal_Editor_10292026_0720_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Zona_Awal_Editor_10292026_0720_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Awal_Editor_10292026_0720_2.addFeatures(features_Zona_Awal_Editor_10292026_0720_2);
var lyr_Zona_Awal_Editor_10292026_0720_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Awal_Editor_10292026_0720_2, 
                style: style_Zona_Awal_Editor_10292026_0720_2,
                popuplayertitle: 'Zona_Awal_Editor_10292026_0720',
                interactive: true,
    title: 'Zona_Awal_Editor_10292026_0720<br />\
    <img src="styles/legend/Zona_Awal_Editor_10292026_0720_2_0.png" /> Non-Pertanian<br />\
    <img src="styles/legend/Zona_Awal_Editor_10292026_0720_2_1.png" /> Pertanian<br />' });
var format_TitikSampel_3 = new ol.format.GeoJSON();
var features_TitikSampel_3 = format_TitikSampel_3.readFeatures(json_TitikSampel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_TitikSampel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSampel_3.addFeatures(features_TitikSampel_3);
var lyr_TitikSampel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSampel_3, 
                style: style_TitikSampel_3,
                popuplayertitle: 'Titik Sampel',
                interactive: true,
    title: 'Titik Sampel<br />\
    <img src="styles/legend/TitikSampel_3_0.png" /> 1<br />\
    <img src="styles/legend/TitikSampel_3_1.png" /> 2<br />' });
var format_Klasifikasi_Jalan_4 = new ol.format.GeoJSON();
var features_Klasifikasi_Jalan_4 = format_Klasifikasi_Jalan_4.readFeatures(json_Klasifikasi_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Klasifikasi_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klasifikasi_Jalan_4.addFeatures(features_Klasifikasi_Jalan_4);
var lyr_Klasifikasi_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klasifikasi_Jalan_4, 
                style: style_Klasifikasi_Jalan_4,
                popuplayertitle: 'Klasifikasi_Jalan',
                interactive: false,
    title: 'Klasifikasi_Jalan<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_0.png" /> Arteri Sekunder<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_1.png" /> Kolektor Primer 4<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_2.png" /> Kolektor Sekunder<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_3.png" /> Lingkungan Primer<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_4.png" /> Lingkungan Sekunder<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_5.png" /> Lokal Primer<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_6.png" /> Lokal Sekunder<br />\
    <img src="styles/legend/Klasifikasi_Jalan_4_7.png" /> <br />' });
var group_BatasAdnimistrasi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Batas Adnimistrasi'});
var group_ZonaNilaiTanah = new ol.layer.Group({
                                layers: [lyr_Zona_Awal_Editor_10292026_0720_2,lyr_TitikSampel_3,],
                                fold: 'open',
                                title: 'Zona Nilai Tanah'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Zona_Awal_Editor_10292026_0720_2.setVisible(true);lyr_TitikSampel_3.setVisible(true);lyr_Klasifikasi_Jalan_4.setVisible(true);
var layersList = [group_Basemap,group_ZonaNilaiTanah,lyr_Klasifikasi_Jalan_4];
lyr_Zona_Awal_Editor_10292026_0720_2.set('fieldAliases', {'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Keterangan': 'Keterangan', });
lyr_TitikSampel_3.set('fieldAliases', {'Nomor Sampel': 'Nomor Sampel', 'No Marking GPS': 'No Marking GPS', 'Nomor Identifikasi': 'Nomor Identifikasi', 'Nama Surveyor': 'Nama Surveyor', 'Tanggal Pelaksanaan': 'Tanggal Pelaksanaan', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Y': 'Y', 'X': 'X', 'Status Kepemilikan': 'Status Kepemilikan', 'Jenis Data': 'Jenis Data', 'Tanggal Penawaran/ Transaksi': 'Tanggal Penawaran/ Transaksi', 'Harga Penawaran/ Transaksi (Rp.)': 'Harga Penawaran/ Transaksi (Rp.)', 'Luas tanah (m2)': 'Luas tanah (m2)', 'Lebar Depan (m)': 'Lebar Depan (m)', 'Panjang Kebelakang (m)': 'Panjang Kebelakang (m)', 'Bentuk Tanah': 'Bentuk Tanah', 'Elevasi dari Jalan': 'Elevasi dari Jalan', 'Letak Tanah': 'Letak Tanah', 'Kelas Jalan': 'Kelas Jalan', 'Lebar Jalan': 'Lebar Jalan', 'Aksesibilitas': 'Aksesibilitas', 'Drainase': 'Drainase', 'Utilitas': 'Utilitas', 'Fasilitas': 'Fasilitas', 'Zoning/ Peruntukan': 'Zoning/ Peruntukan', 'Luas Bangunan': 'Luas Bangunan', 'Jenis': 'Jenis', 'Jumlah Lantai': 'Jumlah Lantai', 'Tahun Pembuatan': 'Tahun Pembuatan', 'Tahun Renovasi': 'Tahun Renovasi', 'Konstruksi Atas': 'Konstruksi Atas', 'Konstruksi Bawah': 'Konstruksi Bawah', 'Atap': 'Atap', 'Dinding': 'Dinding', 'LangitLangit': 'LangitLangit', 'Lantai': 'Lantai', 'Pagar': 'Pagar', 'Panjang Pagar': 'Panjang Pagar', 'Luas Carport': 'Luas Carport', 'Pintu/Jendela': 'Pintu/Jendela', 'Jumlah Fasilitas': 'Jumlah Fasilitas', 'Keadaan Fisik Umumnya': 'Keadaan Fisik Umumnya', 'Biaya Per m2 bangunan': 'Biaya Per m2 bangunan', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'RCN                   (Biaya Pembuatan Bangunan Baru)', 'Tahun Penilaian': 'Tahun Penilaian', 'Umur Efektif': 'Umur Efektif', 'Penyusutan (%)': 'Penyusutan (%)', 'Nilai Bangunan': 'Nilai Bangunan', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'Harga Penyesuaian                     Penawaran                     (Rp.)', 'Nilai Bangunan       (Rp.)': 'Nilai Bangunan       (Rp.)', 'Harga Tanah               (Rp.)': 'Harga Tanah               (Rp.)', 'Penyesuaian Waktu (%)': 'Penyesuaian Waktu (%)', 'Penyesuaian Status Kepemilikan (%)': 'Penyesuaian Status Kepemilikan (%)', 'Nilai Tanah': 'Nilai Tanah', 'Nilai Tanah/m2': 'Nilai Tanah/m2', 'Akses': 'Akses', 'Penyusutan Rumah (%)': 'Penyusutan Rumah (%)', 'Penyusutan Ruko (%)': 'Penyusutan Ruko (%)', 'Keterangan': 'Keterangan', 'Foto1': 'Foto1', 'Foto2': 'Foto2', 'Keterangan_1': 'Keterangan_1', 'Pembanding': 'Pembanding', 'Penyusutan Rumah (%)_1': 'Penyusutan Rumah (%)_1', 'field_68': 'field_68', 'Penyusutan Ruko (%)_1': 'Penyusutan Ruko (%)_1', 'field_70': 'field_70', 'N.Sementara': 'N.Sementara', 'No Urut Entry_Lama': 'No Urut Entry_Lama', 'Responden': 'Responden', 'Konstanta Harga Penyesuaian Penawaran': 'Konstanta Harga Penyesuaian Penawaran', 'Catatan': 'Catatan', 'ID Survei': 'ID Survei', 'Tidak Digunakan': 'Tidak Digunakan', 'Zoning Asal': 'Zoning Asal', });
lyr_Klasifikasi_Jalan_4.set('fieldAliases', {'Nomor': 'Nomor', 'Kode_Prov': 'Kode_Prov', 'Kode_Kota': 'Kode_Kota', 'No_Ruas': 'No_Ruas', 'Kode_Pkota': 'Kode_Pkota', 'Nama_Ruas_': 'Nama_Ruas_', 'Pjg_Jalan': 'Pjg_Jalan', 'Fungsi': 'Fungsi', 'Keterangan': 'Keterangan', 'Kelas_Jln': 'Kelas_Jln', 'LHRT': 'LHRT', 'Niaga____': 'Niaga____', 'Lebar__m_': 'Lebar__m_', });
lyr_Zona_Awal_Editor_10292026_0720_2.set('fieldImages', {'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikSampel_3.set('fieldImages', {'Nomor Sampel': 'Range', 'No Marking GPS': 'TextEdit', 'Nomor Identifikasi': 'TextEdit', 'Nama Surveyor': 'TextEdit', 'Tanggal Pelaksanaan': 'DateTime', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Status Kepemilikan': 'TextEdit', 'Jenis Data': 'TextEdit', 'Tanggal Penawaran/ Transaksi': 'DateTime', 'Harga Penawaran/ Transaksi (Rp.)': 'TextEdit', 'Luas tanah (m2)': 'TextEdit', 'Lebar Depan (m)': 'TextEdit', 'Panjang Kebelakang (m)': 'Range', 'Bentuk Tanah': 'TextEdit', 'Elevasi dari Jalan': 'TextEdit', 'Letak Tanah': 'TextEdit', 'Kelas Jalan': 'TextEdit', 'Lebar Jalan': 'TextEdit', 'Aksesibilitas': 'TextEdit', 'Drainase': 'TextEdit', 'Utilitas': 'TextEdit', 'Fasilitas': 'TextEdit', 'Zoning/ Peruntukan': 'Range', 'Luas Bangunan': 'Range', 'Jenis': 'TextEdit', 'Jumlah Lantai': 'Range', 'Tahun Pembuatan': 'Range', 'Tahun Renovasi': 'Range', 'Konstruksi Atas': 'TextEdit', 'Konstruksi Bawah': 'TextEdit', 'Atap': 'TextEdit', 'Dinding': 'TextEdit', 'LangitLangit': 'TextEdit', 'Lantai': 'TextEdit', 'Pagar': 'TextEdit', 'Panjang Pagar': 'Range', 'Luas Carport': 'Range', 'Pintu/Jendela': 'TextEdit', 'Jumlah Fasilitas': 'Range', 'Keadaan Fisik Umumnya': 'TextEdit', 'Biaya Per m2 bangunan': 'Range', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'TextEdit', 'Tahun Penilaian': 'Range', 'Umur Efektif': 'Range', 'Penyusutan (%)': 'Range', 'Nilai Bangunan': 'Range', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'TextEdit', 'Nilai Bangunan       (Rp.)': 'Range', 'Harga Tanah               (Rp.)': 'TextEdit', 'Penyesuaian Waktu (%)': 'TextEdit', 'Penyesuaian Status Kepemilikan (%)': 'Range', 'Nilai Tanah': 'TextEdit', 'Nilai Tanah/m2': 'TextEdit', 'Akses': 'TextEdit', 'Penyusutan Rumah (%)': 'TextEdit', 'Penyusutan Ruko (%)': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', 'Keterangan_1': 'TextEdit', 'Pembanding': 'TextEdit', 'Penyusutan Rumah (%)_1': 'TextEdit', 'field_68': 'TextEdit', 'Penyusutan Ruko (%)_1': 'TextEdit', 'field_70': 'TextEdit', 'N.Sementara': 'TextEdit', 'No Urut Entry_Lama': 'TextEdit', 'Responden': 'TextEdit', 'Konstanta Harga Penyesuaian Penawaran': 'TextEdit', 'Catatan': 'TextEdit', 'ID Survei': 'Range', 'Tidak Digunakan': 'TextEdit', 'Zoning Asal': 'Range', });
lyr_Klasifikasi_Jalan_4.set('fieldImages', {'Nomor': 'TextEdit', 'Kode_Prov': 'TextEdit', 'Kode_Kota': 'TextEdit', 'No_Ruas': 'TextEdit', 'Kode_Pkota': 'TextEdit', 'Nama_Ruas_': 'TextEdit', 'Pjg_Jalan': 'TextEdit', 'Fungsi': 'TextEdit', 'Keterangan': 'TextEdit', 'Kelas_Jln': 'TextEdit', 'LHRT': 'TextEdit', 'Niaga____': 'TextEdit', 'Lebar__m_': 'TextEdit', });
lyr_Zona_Awal_Editor_10292026_0720_2.set('fieldLabels', {'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'inline label - visible with data', 'JNSZN': 'hidden field', 'PENGGUNAAN': 'inline label - visible with data', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'inline label - visible with data', 'Keterangan': 'hidden field', });
lyr_TitikSampel_3.set('fieldLabels', {'Nomor Sampel': 'inline label - always visible', 'No Marking GPS': 'hidden field', 'Nomor Identifikasi': 'hidden field', 'Nama Surveyor': 'inline label - always visible', 'Tanggal Pelaksanaan': 'hidden field', 'Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)': 'hidden field', 'Alamat': 'hidden field', 'Kelurahan': 'hidden field', 'Kecamatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Status Kepemilikan': 'inline label - always visible', 'Jenis Data': 'inline label - always visible', 'Tanggal Penawaran/ Transaksi': 'hidden field', 'Harga Penawaran/ Transaksi (Rp.)': 'inline label - always visible', 'Luas tanah (m2)': 'inline label - always visible', 'Lebar Depan (m)': 'inline label - always visible', 'Panjang Kebelakang (m)': 'hidden field', 'Bentuk Tanah': 'hidden field', 'Elevasi dari Jalan': 'hidden field', 'Letak Tanah': 'hidden field', 'Kelas Jalan': 'inline label - always visible', 'Lebar Jalan': 'hidden field', 'Aksesibilitas': 'hidden field', 'Drainase': 'hidden field', 'Utilitas': 'hidden field', 'Fasilitas': 'hidden field', 'Zoning/ Peruntukan': 'hidden field', 'Luas Bangunan': 'inline label - always visible', 'Jenis': 'hidden field', 'Jumlah Lantai': 'hidden field', 'Tahun Pembuatan': 'hidden field', 'Tahun Renovasi': 'hidden field', 'Konstruksi Atas': 'hidden field', 'Konstruksi Bawah': 'header label - always visible', 'Atap': 'hidden field', 'Dinding': 'hidden field', 'LangitLangit': 'hidden field', 'Lantai': 'hidden field', 'Pagar': 'hidden field', 'Panjang Pagar': 'hidden field', 'Luas Carport': 'hidden field', 'Pintu/Jendela': 'hidden field', 'Jumlah Fasilitas': 'hidden field', 'Keadaan Fisik Umumnya': 'hidden field', 'Biaya Per m2 bangunan': 'inline label - always visible', 'RCN                   (Biaya Pembuatan Bangunan Baru)': 'hidden field', 'Tahun Penilaian': 'hidden field', 'Umur Efektif': 'hidden field', 'Penyusutan (%)': 'hidden field', 'Nilai Bangunan': 'inline label - always visible', 'Harga Penyesuaian                     Penawaran                     (Rp.)': 'hidden field', 'Nilai Bangunan       (Rp.)': 'hidden field', 'Harga Tanah               (Rp.)': 'hidden field', 'Penyesuaian Waktu (%)': 'hidden field', 'Penyesuaian Status Kepemilikan (%)': 'hidden field', 'Nilai Tanah': 'hidden field', 'Nilai Tanah/m2': 'inline label - always visible', 'Akses': 'inline label - always visible', 'Penyusutan Rumah (%)': 'hidden field', 'Penyusutan Ruko (%)': 'hidden field', 'Keterangan': 'hidden field', 'Foto1': 'hidden field', 'Foto2': 'hidden field', 'Keterangan_1': 'hidden field', 'Pembanding': 'hidden field', 'Penyusutan Rumah (%)_1': 'hidden field', 'field_68': 'hidden field', 'Penyusutan Ruko (%)_1': 'hidden field', 'field_70': 'hidden field', 'N.Sementara': 'hidden field', 'No Urut Entry_Lama': 'hidden field', 'Responden': 'inline label - always visible', 'Konstanta Harga Penyesuaian Penawaran': 'hidden field', 'Catatan': 'hidden field', 'ID Survei': 'hidden field', 'Tidak Digunakan': 'hidden field', 'Zoning Asal': 'hidden field', });
lyr_Klasifikasi_Jalan_4.set('fieldLabels', {'Nomor': 'no label', 'Kode_Prov': 'no label', 'Kode_Kota': 'no label', 'No_Ruas': 'no label', 'Kode_Pkota': 'no label', 'Nama_Ruas_': 'no label', 'Pjg_Jalan': 'no label', 'Fungsi': 'no label', 'Keterangan': 'no label', 'Kelas_Jln': 'no label', 'LHRT': 'no label', 'Niaga____': 'no label', 'Lebar__m_': 'no label', });
lyr_Klasifikasi_Jalan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});