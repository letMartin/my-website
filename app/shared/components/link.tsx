type LinkProps = {
  href: string;
  title: string;
  children: string | JSX.Element;
  target: "_blank" | "_self";
  follow?: boolean;
};

export function Link({ href, title, children, target = "_self" }: LinkProps) {
  let rel = "noopener";

  if (target === "_blank") {
    rel += " noreferrer";
  }

  return (
    <a
      rel={rel}
      href={href}
      title={title}
      target={target}
      className="font-semibold hover:text-blue-600"
    >
      {children}
    </a>
  );
}
