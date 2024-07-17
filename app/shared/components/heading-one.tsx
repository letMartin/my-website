type HeadingOneProps = {
  children: React.ReactNode;
};

export function HeadingOne({ children }: HeadingOneProps) {
  return (
    <h1 className="text-4xl font-bold text-center text-slate-800">
      {children}
    </h1>
  );
}
