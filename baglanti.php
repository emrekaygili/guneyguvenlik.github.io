<?php

$vt_sunucu="sql200.infinityfree.com";
$vt_kullanici="if0_36820528";
$vt_sifre="J1yXbT5NPtoX6D";
$vt_adi="if0_36820528_emrekaygili";

$baglan=mysqli_connect($vt_sunucu,$vt_kullanici,$vt_sifre,$vt_adi);

if(!$baglan)
{
    die("Veritabanı bağlantısı başarısız.".mysqli_connect_error());

}


?>
