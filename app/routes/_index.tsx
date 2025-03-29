import type { MetaFunction } from "@remix-run/node";
import { useShallow } from "zustand/shallow";
import Button from "~/shared-components/Button";
import useStore from "~/store";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [count, increment, decrement] = useStore(
    useShallow((s) => [s.count, s.increment, s.decrement])
  );

  return (
    <div>
      <h1>This is home page</h1>
      <div>
        <span>Count: {count}</span>
        <Button onClick={increment}>Add</Button>
        <Button onClick={decrement}>Reduce</Button>
      </div>
    </div>
  );
}
