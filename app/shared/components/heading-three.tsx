type HeadingThreeProps = {
  children: React.ReactNode;
};

export function HeadingThree({ children }: HeadingThreeProps) {
  return <h3 className="text-xl my-2">{children}</h3>;
}
