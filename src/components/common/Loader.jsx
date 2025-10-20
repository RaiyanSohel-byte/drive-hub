import { Spinner } from "@heroui/spinner";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-wrap items-end gap-8">
      {" "}
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        label="spinner"
        variant="spinner"
      />
    </div>
  );
};

export default Loader;
