import { HeadingOne } from "~/shared/components";

export function Header() {
  return (
    <div className="font-sans p-4">
      <HeadingOne>Martin Bibyakov</HeadingOne>
      <p className="text-center my-3 text-xl">
        Senior Software Engineer @Sii Poland
      </p>
    </div>
  );
}
