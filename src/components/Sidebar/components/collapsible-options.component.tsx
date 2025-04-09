import { useState } from "react";
import { Warning } from "../../../assets/icons";
import { Arrow } from "../../../assets/icons/arrow.icon";
import NavButton from "./nav-button.component";

const CollapsibleOption = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="grid">
      <NavButton
        className="flex justify-between"
        onClick={() => setOpened(!opened)}
      >
        <span className="flex items-center gap-2">
          <Warning className="w-4 h-4" /> Vrts
        </span>
        <span>
          <Arrow className={opened ? " rotate-180 " : ""} />
        </span>
      </NavButton>
      <div
        className="grid gap-4 bg-gray-100 p-4 pl-10 rounded-xl mt-2"
        hidden={!opened}
      >
        <div>Global</div>
        <div>Internal</div>
      </div>
    </div>
  );
};

export default CollapsibleOption;
