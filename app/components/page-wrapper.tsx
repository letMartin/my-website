import { ReactNode } from "react";
import { Navigation } from "./navigation";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full min-h-screen bg-slate-100 py-6">
      <Navigation />
      <main className="mx-auto max-w-3xl bg-white rounded-lg shadow-md">
        {children}
      </main>
    </div>
  );
}
