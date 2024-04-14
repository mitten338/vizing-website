import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";

const TopRightRound = ({
  mode = "default",
  className,
}: {
  mode?: "default" | "primary";
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "rounded-full w-10 h-10 inline-flex items-center justify-center",
        mode === "default" ? "bg-black" : "bg-primary",
        className,
      )}
    >
      <ArrowTopRightIcon
        strokeWidth={2}
        className={clsx(
          "h-4 w-auto",
          mode === "default" ? "text-primary" : "text-black",
        )}
      />
    </div>
  );
};

export default TopRightRound;
