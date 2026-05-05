// =============================================================
// lib/utils.ts — `cn()` utility
// =============================================================
// `cn` = "class names". Fungsi mungil tapi PALING SERING dipakai
// di semua codebase shadcn/ui. Tugas dia cuma 1:
//
//   "Gabungin banyak class Tailwind jadi 1 string,
//    sambil ngeresolve konflik (mis: bg-red-500 vs bg-blue-500)."
//
// Tanpa `cn`, kalau kita nulis:
//   <div className={`px-2 ${isLarge ? "px-4" : ""}`} />
// hasilnya jadi: "px-2 px-4". Browser akan pakai yang paling
// terakhir di CSS (px-4) — TAPI kalau urutan import-nya beda
// atau ada utility lain, bisa konflik.
//
// `cn` (clsx + tailwind-merge) bantu 2 hal:
//   1. clsx          → handle conditional class (boolean, object, dst).
//   2. tailwind-merge → kalo ada 2 utility yang nge-set property sama
//                       (mis: 2x padding-x), yg paling kanan menang.
//
// HASILNYA: kita bisa override class dari luar tanpa takut konflik.
// =============================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Terima class apa aja (string, array, object, conditional),
// gabungin pakai clsx, lalu di-merge biar konflik Tailwind beres.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
