import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Teste`.
 */
export type TesteProps = SliceComponentProps<Content.TesteSlice>;

/**
 * Component for "Teste" Slices.
 */
const Teste = ({ slice }: TesteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicNextLink field={slice.primary.link}>Link</PrismicNextLink>
    </section>
  );
};

export default Teste;
