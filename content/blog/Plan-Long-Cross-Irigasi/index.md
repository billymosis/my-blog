---
title: PLAN LONG CROSS AUTOCAD IRIGASI
date: "2020-12-19T00:00:00.000Z"
description: "Plan Long Cross Irigasi"
tags: ["coding","software"]
featuredImage: ./Plan3d.png
---

Program untuk mempermudah engineer dan drafter mengolah hasil survey dan perhitungan dalam project irigasi.
Program ini dibuat dengan mengadaptasi proses rehabilitasi Irigasi / Modernisasi yang sudah exist.

*Untuk sementara ini nama software belum ditentukan. Akan diputuskan ketika software sudah rilis versi beta.*
*Program atau software ini masih dalam tahap development.*

## Table of Contents

1. [Table of Contents](#table-of-contents)
2. [Purpose](#purpose)
3. [Feature Checklist](#feature-checklist)
4. [Milestones](#milestones)
5. [Technologies](#technologies)
6. [Galleries](#galleries)

## Purpose

- Meningkatkan efisiensi drafter.
- Mempermudah menggambar Long, Cross, dan Plan.
- Dapat digunakan untuk analisa hydraulic.
- Mempermudah check hasil survey.
- User friendly.
- Hasil visual yang representative.


## Feature Checklist

 - ✅ Input data.
   - ✅ Input data dari CSV.
   - ✅ Input data dari TXT Tab delimited.
   - ⬜ Input data dari XYZ style format.
   - ✅ Rubah data dari Jack style ke XYZ Description style format.
   - ⬜ Rubah data dari XYZ Description style format ke Jack style.

 - ✅ Kompatibel dengan Autocad 2013+.

 - ⬜ Kompatibel dengan Autocad 2007 - 2012. **_Optional!_**

 - ⬜ GENERAL
   - ✅ Import Block dari DWG.
   - ✅ Import Line Type.
   - ⬜ Membuat block dwg baru sesuai KP 07.
   - ⬜ Otomatisasi dasar saluran kanan dan dasar kiri.
   - ⬜ Mewajibkan input LeftBank dan RightBank.
   
 - ✅ Super cepat dalam mengolah data.
   - ✅ Menggunakan library CSV Helper dalam mengolah data.
   - ✅ Menggunakan teknologi .NET C#.

 - ⬜ Menggambar **PLAN**.
   - ✅ Membaca input data.
   - ✅ Membuat class.
   - ✅ Logika AutoCAD.
   - ⬜ Menampilkan trase.
   - ⬜ Menggunakan text annotation.
   - ⬜ Menyempurnakan SQuadrant class 16 bagian.
   - ⬜ Menampilkan lokasi bangunan.
   - ⬜ Style KP 07.
 - ⬜ Menggambar **CROSS**.
   - ✅ Membaca input data.
   - ✅ Membuat class.
   - ✅ Logika AutoCAD.
   - ⬜ Membuat Box Border.
   - ⬜ Mengaplikasikan dimensi desain di existing.
   - ⬜ Mengeluarkan hasil analisa earthworks dan civil.
   - ⬜ Extract data hasil analisa dalam bentuk CSV.
   - ⬜ Style KP 07.
 - ⬜ Menggambar **LONG**.
   - ⬜ Membaca input data.
   - ⬜ Membuat class.
   - ⬜ Logika AutoCAD.
   - ⬜ Membuat Box Border.
   - ⬜ Melampirkan dimensi desain di graph long.
   - ⬜ Dapat menunjukkan kerusakan di sisi dan lokasi tertentu.
   - ⬜ Otomatis dapat mengambil trase dari plan.
   - ⬜ Style KP 07.
 - ✅ Menggambar **3D PLAN**.
 - ⬜ Integerasi model dengan Layout.
   - ⬜ Dapat langsung memindahkan data dari Model Ke Layout.
   - ⬜ Print PDF semua data model / layout.
   - ⬜ Atur skala dengan mudah.
   - ⬜ Atur kertas dengan ukuran standard A1 dan A3.
 - ⬜ Integerasi Hec-RAS.
   - ✅ Dapat export .GEO ke HEC-RAS.
   - ⬜ Lengkapi fitur .GEO sesuai dengan dokumentasi di HEC-RAS v6.0.
   - ⬜ Integerasi dengan HEC-RAS Interop / Controller. **_Optional!_**
 - ⬜ Graphical User Interface.
   - ⬜ Mempunyai Ribbon khusus untuk program ini.
   - ⬜ Terdapat toolbar untuk shortcut.
   - ⬜ Menampilkan data input.
   - ⬜ Modifikasi data input.
 - ⬜ Dokumentasi.
   - ⬜ Bikin help .chm untuk internal.
   - ⬜ Bikin dokumentasi PDF untuk eksternal.
   - ⬜ Bikin versi english.
   - ⬜ Upload ke website.
   - ⬜ Bikin video tutorial youtube.
 - ⬜ Security.
   - ⬜ Proteksi program dengan crypto.
   - ⬜ Menambahkan trial version dan full version.
   - ⬜ Tambah EULA template.
 - ⬜ Installer Bundler.
   - ⬜ Deploy instalasi dengan WIXtoolset.
   - ⬜ Program dapat di Install.
   - ⬜ Program dapat di Uninstall.
   - ⬜ Program dapat di Update.  **_Optional!_**
   
## Milestones

- 14 March 2020 able to deploy simple AutoCAD program to GitHub [https://github.com/billymosis/AutoCAD](#https://github.com/billymosis/AutoCAD)
- 5 April 2020 first LinkedIn post. [https://www.linkedin.com/posts/billymosis_irrigation-drains-earthworks-activity-6652566078788591616-MRne](#https://www.linkedin.com/posts/billymosis_irrigation-drains-earthworks-activity-6652566078788591616-MRne) 
- 23 Juni 2020 first commit project PLC ke GitHub. [https://github.com/billymosis/Long-Cross](#https://github.com/billymosis/Long-Cross)
- 19 December 2020 feature list ini dibuat.

## Technologies
- .Net Framework 4.5
- C# 5.0
- Visual Studio 2017
- CSVHelper
- AutoCAD .NET API 2013
 

## Galleries

![Plan Image](./Plan.png "Plan of one irrigation area")
![Plan3d Image](./Plan3d.png "Visual representative of canal in 3D")
![Cross Image](./Cross.png "Cross of existing irrigation area")
![Jack Style](./Jack-Style.png "Jack style data input")
![HecRAS PLAN & CROSS](./Hec-RasPlanCross.png "Geo extracted file opened in Hec-RAS")
![HecRAS steady Flow Analysis](./HecRas-SteadyFlow-Profile.png "Analysis steady flow using Geo file")


*Halaman ini akan terus di update menyesuaikan dengan progress software.*

© Created by Billy Mosis Priambodo, 2020.