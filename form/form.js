function kirimData() {

  event.preventDefault();
  var nama = document.getElementById("namaOrg").value;
  var no = document.getElementById("noOrg").value;
  var alamatPesan = document.getElementById("alamat").value;
  var jenis = document.querySelector("input[name=jenisProduk]:checked");
  var menuPesan = document.getElementById("menu").value;
  var pesan = document.getElementById("pesanan").value;
  var tanggal = document.getElementById("tglPesan").value;

  if (!nama || !no || !alamatPesan || !menuPesan || !pesan || !tanggal ) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  if (!jenis) {
    alert("Mohon pilih salah satu jenis produk.");
    return;
  }

  var nilaiJenis = jenis.value;

  alert(
    "Nama : " + nama +
    "\nNo Telefon : " + no +
    "\nAlamat : " + alamatPesan +
    "\nJenis : " + nilaiJenis +
    "\nMenu : " + menuPesan +
    "\nJumlah : " + pesan +
    "\nTanggal : " + tanggal
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
