type HeadingTwoProps = {
  children: React.ReactNode;
};

export function HeadingTwo({ children }: HeadingTwoProps) {
  return <h2 className="text-2xl my-4">{children}</h2>;
}
