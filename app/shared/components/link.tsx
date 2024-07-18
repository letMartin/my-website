type LinkProps = {
  href: string;
  title: string;
  children: string | JSX.Element;
  openInNewTab?: boolean;
};

export function Link({
  href,
  children,
  title,
  openInNewTab = true,
}: LinkProps) {
  return (
    <a
      href={href}
      title={title}
      rel="noopener noreferrer"
      target={openInNewTab ? "_blank" : "_self"}
      className="font-semibold hover:text-blue-600"
    >
      {children}
    </a>
  );
}
