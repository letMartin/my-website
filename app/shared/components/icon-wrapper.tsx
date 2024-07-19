import classNames from "classnames";

type IconWrapperProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: "bg-white" | "bg-sky-600";
};

export function IconWrapper({
  children,
  className,
  bgColor = "bg-white",
}: IconWrapperProps) {
  return (
    <div
      className={classNames(
        "w-10 h-10 inline-flex items-center justify-center rounded-full",
        className,
        bgColor
      )}
    >
      {children}
    </div>
  );
}
