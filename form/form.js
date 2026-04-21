function kirimData() {
  var namaOrg = document.getElementById("namaOrg").value;
  var noOrg = document.getElementById("noOrg").value;
  var alamat = document.getElementById("alamat").value;
  var jenisProduk = document.querySelector("input[name=jenisProduk]:checked"); 
  var menu = document.getElementById("menu").value;
  var pesanan = document.getElementById("pesanan").value;
  var tglPesan = document.getElementById("tglPesan").value;

  if (!namaOrg || !noOrg || !alamat || !menu || !pesanan || !tglPesan ) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  if (!jenisProduk) {
    alert("Mohon pilih salah satu jenis produk.");
    return;
  }

  var nilaijenisProduk = jenisProduk.value;

  alert(
    "Nama : " + namaOrg +
    "\NNo Telefon : " + noOrg +
    "\nAlamat : " + alamat +
    "\nJenis : " + nilaijenisProduk +
    "\nMenu : " + menu +
    "\nJumlah : " + pesanan +
    "\nTanggal : " + tglPesan
  );

  clearForm();
}

function clearForm() {
  document.getElementById("namaOrg").value = "";
  document.getElementById("noOrg").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("menu").value = "";
  document.getElementById("pesanan").value = "";
  document.getElementById("tglPesan").value = "";

  var radioButtons = document.querySelectorAll('input[name="jenisProduk"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}
