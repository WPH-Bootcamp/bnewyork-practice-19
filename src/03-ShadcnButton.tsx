import { Button } from "./components/ui/button";

export default function ShadcnButton() {
  return (
    <div>
      <Button variant="destructive">Testing button</Button>
      <Button variant="outline">Testing button</Button>
      <Button variant="secondary">Testing button</Button>
      <Button variant="link">Testing button</Button>
      <Button variant="henry">button henry</Button>
      <Button size="sm" variant="henry">
        button henry
      </Button>
    </div>
  );
}
