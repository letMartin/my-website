import { ReactNode } from "react";
import { Navigation } from "./navigation";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full h-screen bg-slate-100 pt-6">
      <Navigation />
      <main className="mx-auto max-w-3xl bg-white rounded-lg">{children}</main>
    </div>
  );
}
