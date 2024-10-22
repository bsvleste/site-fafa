import Bounded from "@/app/components/bounded";
import ButtonLink from "@/app/components/button-link";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { PiGearDuotone } from "react-icons/pi";

const icons = {
  gear: <PiArrowsClockwiseBold />,
  cycle: <PiGearDuotone />,
};
/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      className="relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-yellow-500/20 blur-3xl filter" />

      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance text-center text-5xl font-bold md:text-7xl">
              {children}
            </h2>
          ),
        }}
      />
      <div className="mt-16 grid items-center rounded-xl border-2 border-yellow-500/20 bg-gradient-to-b from-zinc-50/15 to-zinc-50/5 px-8 py-8 shadow-lg backdrop-blur-sm lg:grid-cols-3 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 text-3xl">
            <>{slice.primary.icon && icons[slice.primary.icon]}</>
          </div>
          <div className="mt-6 text-2xl font-normal">
            <PrismicRichText field={slice.primary.subheading} />
          </div>
          <div className="mt-4 max-w-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field={slice.primary.button_link} className="mt-6">
            {slice.primary.button_text || "Get Started"}
          </ButtonLink>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            "lg:-order-1 lg:translate-x-[-15%]",
          )}
        />
      </div>
    </Bounded>
  );
};

export default Showcase;
