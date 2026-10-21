function generateRPP() {
  // Ambil Data
  const sekolah = document.getElementById('sekolah').value;
  const namaGuru = document.getElementById('namaGuru').value;
  const mapel = document.getElementById('mapel').value;
  const kelas = document.getElementById('kelas').value;
  const alokasiWaktu = document.getElementById('alokasiWaktu').value;

  const identifikasiSiswa = document.getElementById('identifikasiSiswa').value;
  const identifikasiMateri = document.getElementById('identifikasiMateri').value;

  // Centang DPL
  const dplCheckboxes = document.querySelectorAll('.dpl:checked');
  let dplList = [];
  dplCheckboxes.forEach(cb => dplList.push(cb.value));

  const cpText = document.getElementById('cpText').value;
  const lintasIlmu = document.getElementById('lintasIlmu').value;
  const tujuan = document.getElementById('tujuan').value;
  const topik = document.getElementById('topik').value;

  const pedagogis = document.getElementById('pedagogis').value;
  const kemitraan = document.getElementById('kemitraan').value;
  const lingkungan = document.getElementById('lingkungan').value;
  const pemanfaatanDigital = document.getElementById('pemanfaatanDigital').value;

  const kegiatanAwal = document.getElementById('kegiatanAwal').value;
  const intiMemahami = document.getElementById('intiMemahami').value;
  const intiMengaplikasi = document.getElementById('intiMengaplikasi').value;
  const intiMerefleksi = document.getElementById('intiMerefleksi').value;
  const kegiatanPenutup = document.getElementById('kegiatanPenutup').value;

  const asesmenAwal = document.getElementById('asesmenAwal').value;
  const asesmenProses = document.getElementById('asesmenProses').value;
  const asesmenAkhir = document.getElementById('asesmenAkhir').value;

  // Template Output RPP Mendalam
  const rppHTML = `
    <h3 style="text-align: center; margin-bottom: 5px;">PERENCANAAN PEMBELAJARAN MENDALAM (RPP)</h3>
    <p style="text-align: center; font-size: 10pt; margin-top: 0;">Sesuai Capaian Pembelajaran Terbaru Keputusan BSKAP No. 046/H/KR/2025</p>

    <table class="rpp-table">
      <tr>
        <td width="20%"><b>SEKOLAH</b></td>
        <td width="30%">${sekolah}</td>
        <td width="20%"><b>MATA PELAJARAN</b></td>
        <td width="30%">${mapel}</td>
      </tr>
      <tr>
        <td><b>NAMA GURU</b></td>
        <td>${namaGuru}</td>
        <td><b>KELAS / SEMESTER</b></td>
        <td>${kelas}</td>
      </tr>
      <tr>
        <td><b>ALOKASI WAKTU</b></td>
        <td colspan="3">${alokasiWaktu}</td>
      </tr>
    </table>

    <table class="rpp-table">
      <tr class="section-title">
        <td colspan="2">IDENTIFIKASI PEMBELAJARAN MENDALAM</td>
      </tr>
      <tr>
        <td width="25%"><b>Peserta Didik</b></td>
        <td>${identifikasiSiswa.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>Materi Pelajaran</b></td>
        <td>${identifikasiMateri.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>Dimensi Profil Lulusan (DPL)</b></td>
        <td>
          <ul>
            ${dplList.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </td>
      </tr>
    </table>

    <table class="rpp-table">
      <tr class="section-title">
        <td colspan="2">DESAIN PEMBELAJARAN</td>
      </tr>
      <tr>
        <td width="25%"><b>Capaian Pembelajaran (CP 2025)</b></td>
        <td>${cpText.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>Lintas Disiplin Ilmu</b></td>
        <td>${lintasIlmu}</td>
      </tr>
      <tr>
        <td><b>Tujuan Pembelajaran</b></td>
        <td>${tujuan.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>Topik Pembelajaran</b></td>
        <td>${topik}</td>
      </tr>
      <tr>
        <td><b>Praktik Pedagogis</b></td>
        <td>${pedagogis}</td>
      </tr>
      <tr>
        <td><b>Kemitraan Pembelajaran</b></td>
        <td>${kemitraan}</td>
      </tr>
      <tr>
        <td><b>Lingkungan Pembelajaran</b></td>
        <td>${lingkungan}</td>
      </tr>
      <tr>
        <td><b>Pemanfaatan Digital</b></td>
        <td>${pemanfaatanDigital}</td>
      </tr>
    </table>

    <table class="rpp-table">
      <tr class="section-title">
        <td colspan="2">PENGALAMAN BELAJAR (DEEP LEARNING)</td>
      </tr>
      <tr>
        <td width="25%"><b>KEGIATAN AWAL</b><br><i>(Berkesadaran, Bermakna, Menggembirakan)</i></td>
        <td>${kegiatanAwal.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td colspan="2"><b>KEGIATAN INTI:</b></td>
      </tr>
      <tr>
        <td><b>1. Memahami</b></td>
        <td>${intiMemahami.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>2. Mengaplikasi</b></td>
        <td>${intiMengaplikasi.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>3. Merefleksi</b></td>
        <td>${intiMerefleksi.replace(/\n/g, '<br>')}</td>
      </tr>
      <tr>
        <td><b>KEGIATAN PENUTUP</b></td>
        <td>${kegiatanPenutup.replace(/\n/g, '<br>')}</td>
      </tr>
    </table>

    <table class="rpp-table">
      <tr class="section-title">
        <td colspan="2">ASESMEN PEMBELAJARAN</td>
      </tr>
      <tr>
        <td width="25%"><b>Asesmen Awal</b></td>
        <td>${asesmenAwal}</td>
      </tr>
      <tr>
        <td><b>Asesmen Proses</b></td>
        <td>${asesmenProses}</td>
      </tr>
      <tr>
        <td><b>Asesmen Akhir</b></td>
        <td>${asesmenAkhir}</td>
      </tr>
    </table>

    <table class="rpp-table">
      <tr class="section-title">
        <td colspan="5">RUBRIK PENILAIAN / KINERJA</td>
      </tr>
      <tr style="text-align: center; font-weight: bold;">
        <td width="20%">Indikator</td>
        <td width="20%">Baru Memulai</td>
        <td width="20%">Berkembang</td>
        <td width="20%">Cakap</td>
        <td width="20%">Mahir</td>
      </tr>
      <tr>
        <td>Pemahaman Konsep & Keterampilan Praktik</td>
        <td>Peserta didik menunjukkan pemahaman dan keterampilan yang sangat dasar.</td>
        <td>Peserta didik menunjukkan pemahaman yang sedang berkembang, perlu bimbingan.</td>
        <td>Peserta didik menunjukkan pemahaman dan keterampilan yang baik sesuai harapan.</td>
        <td>Peserta didik menunjukkan pemahaman sangat baik & mampu mengaplikasikan melebihi harapan.</td>
      </tr>
    </table>

    <br><br>
    <table width="100%" style="font-family: 'Times New Roman';">
      <tr>
        <td width="50%" align="center">
          Mengetahui,<br>Kepala Sekolah<br><br><br><br><b>________________________</b>
        </td>
        <td width="50%" align="center">
           Guru Mata Pelajaran<br><br><br><br><b>${namaGuru}</b>
        </td>
      </tr>
    </table>
  `;

  document.getElementById('rppResult').innerHTML = rppHTML;
  document.getElementById('outputArea').style.display = 'block';
  document.getElementById('outputArea').scrollIntoView({ behavior: 'smooth' });
}