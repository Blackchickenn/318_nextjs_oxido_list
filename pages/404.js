import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That page can not be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>{" "}
      </p>
    </div>
  );
}
