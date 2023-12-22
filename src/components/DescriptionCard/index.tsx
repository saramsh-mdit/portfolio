import type { ReactNode } from "react";
import ColorfulTitle from "../ColorfulTitle";

type DescriptionCardType = {
  title?: string;
  children?: string | ReactNode;
};

const DescriptionCard: React.FC<DescriptionCardType> = ({
  title,
  children,
}) => {
  return (
    <div className="grid gap-5">
      {title && <ColorfulTitle title={title} />}

      {children && (
        <div className="p-6 pt-8 rounded-lg bg-gray-100 text-left relative whitespace-pre-line">
          <h3 className="font-bold font-serif text-gray-600 text-[75px] absolute -top-8 left-0">{`"`}</h3>
          {children}
        </div>
      )}
    </div>
  );
};

export default DescriptionCard;
