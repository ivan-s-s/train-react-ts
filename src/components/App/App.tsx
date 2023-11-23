import React from "react";
import { Layout } from "components";
import { Button } from "ui-kit";

export const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  }

  return (
    <div className="App">
      <Layout>
        <h1>React TypeScript</h1>
        <hr />
        <h2>Button</h2>
        <Button isDisabled={false} onClick={handleButtonClick}>Send</Button>
      </Layout>
    </div>
  );
};
