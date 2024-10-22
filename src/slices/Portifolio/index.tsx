import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Portifolio`.
 */
export type PortifolioProps = SliceComponentProps<Content.PortifolioSlice>;

/**
 * Component for "Portifolio" Slices.
 */
const Portifolio = ({ slice }: PortifolioProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
};

export default Portifolio;
