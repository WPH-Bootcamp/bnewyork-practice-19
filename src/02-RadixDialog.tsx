import * as Dialog from "@radix-ui/react-dialog";

export default function RadixDialogDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">
        Dialog di bawah ini full di-style dari nol pakai Tailwind. Logic
        accessibility (ESC, focus trap, dll) datang gratis dari Radix.
      </p>

      <Dialog.Root>
        <Dialog.Trigger className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Buka Dialog (raw Radix)
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <Dialog.Title className="text-lg font-bold text-white mb-1">
              Konfirmasi Hapus Akun
            </Dialog.Title>

            <Dialog.Description className="text-sm text-slate-400 mb-4">
              Akun Anda akan dihapus secara permanen. Aksi ini tidak dapat dibatalkan.
            </Dialog.Description>

            <div className="flex justify-end gap-2 mt-6">
              <Dialog.Close className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800 text-slate-200 text-sm">
                Batal
              </Dialog.Close>
              <Dialog.Close className="px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm">
                Hapus
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm">
        <p className="font-semibold text-amber-300 mb-1">🧠 AHA MOMENT</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Coba buka dialog, lalu tekan{" "}
            <kbd className="px-1.5 py-0.5 text-xs bg-slate-800 rounded">
              ESC
            </kbd>{" "}
            — otomatis menutup.
          </li>
          <li>Coba klik area gelap di luar — otomatis menutup juga.</li>
          <li>
            Pencet{" "}
            <kbd className="px-1.5 py-0.5 text-xs bg-slate-800 rounded">
              Tab
            </kbd>{" "}
            — focus berputar di dalam dialog saja (focus trap).
          </li>
          <li>Semua itu kita tidak perlu mengoding apa pun. Datang gratis dari Radix.</li>
        </ul>
      </div>
    </div>
  );
}
