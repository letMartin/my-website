import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { Credits } from "./credits";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full min-h-screen bg-slate-100 py-6">
      <Navigation />
      <main className="mx-auto max-w-4xl bg-white rounded-lg shadow-md px-4 sm:px-10">
        {children}
      </main>
      <Credits />
    </div>
  );
}
