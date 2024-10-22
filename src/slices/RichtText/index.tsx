import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichtText`.
 */
export type RichtTextProps = SliceComponentProps<Content.RichtTextSlice>;

/**
 * Component for "RichtText" Slices.
 */
const RichtText = ({ slice }: RichtTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.imagem} />
      <PrismicRichText field={slice.primary.heading} />
    </section>
  );
};

export default RichtText;
