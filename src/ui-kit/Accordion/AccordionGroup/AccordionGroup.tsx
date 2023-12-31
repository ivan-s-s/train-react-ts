import { ReactNode } from "react";
import "./AccordionGroup.scss";

export interface IAccordionGroupProps {
  title?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  title,
  children,
}) => {
  return (
    <div className="AccordionGroup">
      {title && <div className="AccordionGroup-Title">{title}</div>}
      {children}
    </div>
  );
};
