import { Link } from "~/shared/components";

export function Credits() {
  return (
    <footer className="flex justify-center p-4 bg-slate-100">
      <p className="text-center">
        Credits to{" "}
        <Link
          href="https://github.com/xriley"
          title="Go to Xiaoying Riley's GitHub profile"
          target="_blank"
        >
          Xiaoying Riley
        </Link>{" "}
        for the design and{" "}
        <Link
          href="https://iconduck.com/"
          title="Go to Iconduck website"
          target="_blank"
        >
          Iconduck
        </Link>{" "}
        for the icons.
      </p>
    </footer>
  );
}
