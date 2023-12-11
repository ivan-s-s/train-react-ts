import type { FC, MouseEvent } from "react";
import { Button } from "ui-kit";

export const ButtonPage: FC = () => {
  const handleButtonClick = (event: MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <section>
      <title>Button</title>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
      <title>Button disabled</title>
      <Button isDisabled onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
    </section>
  );
};
