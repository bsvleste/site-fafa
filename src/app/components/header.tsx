import Image from "next/image";
import BSVCODE from "../assets/bsvcode.png";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import clsx from "clsx";
import ButtonLink from "./button-link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="shadow">
      <div className="mx-auto flex max-w-7xl justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src={BSVCODE} width={350} height={350} alt="bsvcode logo" />
          <span className="sr-only">Come back to Homepage</span>
        </Link>
        <nav className="w-96" aria-label="Footer">
          <ul className="flex justify-end gap-4">
            {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <li key={item.label}>
                    <ButtonLink
                      field={item.link}
                      className="inline-flex min-w-11 items-center"
                    >
                      {item.label}
                    </ButtonLink>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <PrismicNextLink
                    field={item.link}
                    className="inline-flex min-w-11 items-center"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
