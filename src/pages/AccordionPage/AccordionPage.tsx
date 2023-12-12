import { Accordion, AccordionGroup } from "ui-kit";
import "./AccordionPage.scss";

export const AccordionPage: React.FC = () => {
  return (
    <div className="AccordionPage">
      <h2>Accordion</h2>
      <Accordion title="Card" isActive>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
          laborum voluptate amet neque eos, sed iure debitis voluptatem
          molestias voluptatibus cumque in qui placeat sequi possimus maiores!
          Sed, numquam!
        </p>
      </Accordion>
      <h2>Accordion Croup</h2>
      <AccordionGroup title="Card Group">
        <Accordion title="Card one" isActive>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
            laborum voluptate amet neque eos, sed iure debitis voluptatem
            molestias voluptatibus cumque in qui placeat sequi possimus maiores!
            Sed, numquam!
          </p>
        </Accordion>
        <Accordion title="Card two" isActive>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
            laborum voluptate amet neque eos, sed iure debitis voluptatem
            molestias voluptatibus cumque in qui placeat sequi possimus maiores!
            Sed, numquam!
          </p>
        </Accordion>
        <Accordion title="Card three" isActive>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
            laborum voluptate amet neque eos, sed iure debitis voluptatem
            molestias voluptatibus cumque in qui placeat sequi possimus maiores!
            Sed, numquam!
          </p>
        </Accordion>
        <Accordion title="Card four" isActive>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
            laborum voluptate amet neque eos, sed iure debitis voluptatem
            molestias voluptatibus cumque in qui placeat sequi possimus maiores!
            Sed, numquam!
          </p>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};
