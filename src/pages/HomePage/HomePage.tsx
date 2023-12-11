import type { FC, MouseEvent } from "react";
import { Button } from "ui-kit";

export const HomePage: FC = () => {
  const handleButtonClick = (event: MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <section>
      <h1>Home Page</h1>
      <h1>React TypeScript</h1>
      <hr />
      <h2>Button</h2>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
    </section>
  );
};
