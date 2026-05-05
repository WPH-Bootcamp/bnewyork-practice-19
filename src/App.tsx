import RadixDialogDemo from "./02-RadixDialog";
import ShadcnButton from "./03-ShadcnButton";

type LessonProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
};

function Lesson({ title, desc, children }: LessonProps) {
  return (
    <section className="mb-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
      <h2 className="text-xl text-blue-400 font-bold mb-1">{title}</h2>
      <p className="text-sm text-slate-400 mb-4">{desc}</p>
      <div className="p-4 bg-slate-900 rounded-lg border border-dashed border-slate-600">
        {children}
      </div>
    </section>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          Meet 19 — Radix UI + shadcn/ui
        </h1>
        <p className="text-slate-400 mb-8">
          Headless components dari <em>Radix UI</em> + style preset dari{" "}
          <em>shadcn/ui</em>, di atas <strong>Tailwind</strong> dari Week 3.
          Goal: ngerti pattern UI industri yang dipake di product nyata.
        </p>

        <Lesson
          title="02 — Radix UI: Dialog (HEADLESS, raw)"
          desc="Konsep headless component. Logic accessibility datang gratis dari Radix, style kita yang racik."
        >
          <RadixDialogDemo />
        </Lesson>

        <Lesson
          title="03 — Shadcn Button"
          desc="Component dengan Shadcn Button"
        >
          <ShadcnButton />
        </Lesson>
      </div>
    </div>
  );
}

export default App;
