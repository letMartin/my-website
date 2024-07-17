import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full h-screen bg-slate-100 pt-32">
      <main className="mx-auto max-w-3xl bg-white rounded-lg">{children}</main>
    </div>
  );
}
