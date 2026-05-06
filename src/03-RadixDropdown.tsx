import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function RadixDropdownDemo() {
  const [lastAction, setLastAction] = useState<string>("(belum ada aksi)");

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">
        DropdownMenu = navigasi keyboard otomatis. Buka pake mouse, terus coba
        pake panah ↑ ↓ +{" "}
        <kbd className="px-1.5 py-0.5 text-xs bg-slate-800 rounded">Enter</kbd>.
      </p>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2 rounded-lg transition-colors">
          Aksi ▾
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={6}
            className="z-50 min-w-[200px] rounded-md bg-slate-900 border border-slate-700 p-1 shadow-lg"
          >
            <DropdownMenu.Label className="px-2 py-1.5 text-xs uppercase tracking-wide text-slate-500">
              Akun saya
            </DropdownMenu.Label>

            <DropdownMenu.Item
              onSelect={() => setLastAction("Profile dibuka")}
              className="px-2 py-1.5 text-sm text-slate-200 rounded outline-none cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white"
            >
              Profile
            </DropdownMenu.Item>

            <DropdownMenu.Item
              onSelect={() => setLastAction("Settings dibuka")}
              className="px-2 py-1.5 text-sm text-slate-200 rounded outline-none cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white"
            >
              Settings
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="my-1 h-px bg-slate-700" />

            <DropdownMenu.Item
              onSelect={() => setLastAction("Logout 👋")}
              className="px-2 py-1.5 text-sm text-red-400 rounded outline-none cursor-pointer data-[highlighted]:bg-red-500 data-[highlighted]:text-white"
            >
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <p className="text-sm">
        Aksi terakhir: <span className="text-blue-400">{lastAction}</span>
      </p>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm">
        <p className="font-semibold text-amber-300 mb-1"> AHA MOMENT</p>
        <p className="text-slate-300">
          Class yang aneh kayak{" "}
          <code className="text-amber-300">data-[highlighted]:bg-blue-500</code>{" "}
          itu cuma cara Tailwind nyetel style berdasarkan{" "}
          <code className="text-amber-300">data-*</code> attribute. Radix yang
          kasih attribute-nya, Tailwind yang stylenya. Pattern ini bakal sering
          muncul di shadcn juga.
        </p>
      </div>
    </div>
  );
}
