import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-red-600">hello</p>
      <Input placeholder="hello" />
      <Select />
      <Button variant="ghost">Ghost</Button>
      <Button variant="secondary">Secondary</Button>
      <Button>Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritrary">Teritrary</Button>
    </div>
  );
}
