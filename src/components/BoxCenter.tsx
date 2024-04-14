import React from "react";
import { clsx } from "clsx";

const BoxCenter = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("box-center", className)}>{children}</div>;
};

export default BoxCenter;
