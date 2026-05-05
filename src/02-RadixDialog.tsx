import * as Dialog from "@radix-ui/react-dialog";

export default function RadixDialogDemo() {
  return (
    <div>
      <p>Dialog dibawah ini kita buat menggunakan radix ui</p>
      <Dialog.Root>
        <Dialog.Trigger className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Buka Dialog
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
            <Dialog.Title className="text-lg font-bold text-white mb-1">
              Komfirmasi Hapus Akun
            </Dialog.Title>
            <Dialog.Description className="text-sm text-slate-400 mb-4">
              Akun bakal di hapus permanen
            </Dialog.Description>

            <div className=" flex justify-end mt-6 gap-2">
              <Dialog.Close className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800 text-slate-200 text-sm">
                Batal
              </Dialog.Close>
              <Dialog.Close className="px-3 py-1.5 rounded-md border border-red-700 hover:bg-red-800 text-slate-200 text-sm">
                Hapus
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
