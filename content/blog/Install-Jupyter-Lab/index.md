---
title: Install Jupyter Lab
date: "2020-10-01T00:00:00.000Z"
description: "Lanjutan dari postingan sebelumnya. Cara / tutorial meng-install Jupyter Lab untuk Windows 10."
tags: ["hydrology", "programming"]
featuredImage: ./jupyter.jpg
---

Lanjutan dari postingan sebelumnya. Cara / tutorial meng-install Jupyter Lab untuk Windows 10.

## Jupyter Lab

Jadi jika di postingan sebelumnya saya menjelaskan akan meng-install Jupyter Notebook ternyata sudah ada versi terbaru yaitu Jupyter Lab. Jadi saya baru tahu juga, dan setelah check sekilas lebih bagus UI nya daripada Jupyter Notebook yang klasik, namun fiturnya tetap sama. Maka dari itu saya pilih Jupyter Lab untuk menjadi <abbr title="Integerated Development Environtment">IDE</abbr> yang menemani kita selanjutnya.

## Step by Step

Pastikan Laptop / PC terkonek internet sebelumnya untuk memudahkan proses instalasi. Berikut adalah langkahnya:

1. Menuju website python dan download python di https://www.python.org/downloads/. Versi python yang terbaru juga tidak apa-apa, yang penting python version 3.x.

   ![Web Page Download Python](./image1.png "Click Download Python sesuai versinya")

2. Setelah download jalankan file hasil download-an tersebut. Dan jangan lupa wajib centang kedua item di bawah.

   ![Menu Install Python](./image2.png "Jangan lupa centang")

3. Jalankan command prompt dengan kombinasi keyboard Windows + R untuk memunculkan jendela run, lalu ketik `cmd`.

   ![Jendela Run](./image3.png "Ketik cmd")

4. Check apakah Python sudah terinstall dengan command `Python --version` di CMD. Apabila muncul versinya maka lanjutkan meng-install Jupyter Lab dengan command `pip install jupyterlab`

   ![Jendela CMD](./image4.png "Install Jupyterlab")

5. Setelah install langsung saja ketik lagi di command prompt `jupyter lab` maka nanti akan dibuka browser default secara otomatis lalu muncul tampilan jupyter lab.
   ![Jupyter Lab dalam browser](./image5.png "Tampilan Jupyter Lab dalam browser")

## Done!

Dengan ini anda sudah bisa melakukan pemograman, jika terjadi masih belum muncul layar seperti di step 5 monggo di googling dulu untuk trouble shooting-nya. Sekian tutorial untuk menginstall Jupyter Lab. Happy Coding!
