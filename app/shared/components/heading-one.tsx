type HeadingOneProps = {
  children: React.ReactNode;
};

export function HeadingOne({ children }: HeadingOneProps) {
  return <h1 className="text-4xl text-center">{children}</h1>;
}
