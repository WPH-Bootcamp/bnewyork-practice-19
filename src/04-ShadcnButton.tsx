import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Trash2 } from "lucide-react";

export default function ShadcnButtonDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Variant
        </p>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Size
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Tambah">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Variant + Size + Icon
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4" />
            Hapus
          </Button>
          <Button variant="outline">
            Lanjut
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          asChild — render sebagai &lt;a&gt; namun tetap dengan style Button
        </p>
        <Button asChild variant="link">
          <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
            Buka shadcn/ui docs →
          </a>
        </Button>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Custom className (override warna)
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600">Pink override</Button>
        <p className="text-xs text-slate-500 mt-2">
          Note: warna primary di base ke-replace pink karena{" "}
          <code className="text-pink-300">cn()</code> +{" "}
          <code className="text-pink-300">tailwind-merge</code>. Bandingkan
          dengan jika kita cuma string concat — bakal jadi{" "}
          <code className="text-pink-300">"bg-primary bg-pink-500"</code>{" "}
          (dua-duanya nempel, urutan menentukan).
        </p>
      </div>
    </div>
  );
}
