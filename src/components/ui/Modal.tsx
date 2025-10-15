import { ReactNode } from "react";

export default function Modal({
  children,
} : {
  children: ReactNode;
}) {
  return (
    <div className="border-solid border-5 border-red">
      {children}
    </div>
  )
}