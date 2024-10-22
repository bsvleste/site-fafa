import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `ProjetoSlices`.
 */
export type ProjetoSlicesProps =
  SliceComponentProps<Content.ProjetoSlicesSlice>;

/**
 * Component for "ProjetoSlices" Slices.
 */
const ProjetoSlices = async ({
  slice,
}: ProjetoSlicesProps): Promise<JSX.Element> => {
  const client = createClient();
  /*   const projetoSlices = await Promise.all(
    slice.items.map(async (item) => {
      if (isFilled.contentRelationship(item.projeto_slices)) {
        return await client.getByID<Content.ProjetosDocument>(
          item.projetos_slices.id,
        );
      }
    }),
  ); */

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      {slice.primary.projetos.map((item, index) => (
        // Render the item
        <div key={index}>
          <PrismicRichText field={item.description} />
          <PrismicNextImage field={item.image} />
          <PrismicNextLink field={item.cases}>
            <PrismicText field={item.description} />
          </PrismicNextLink>
        </div>
      ))}
      {/* {projetoSlices.map((item, index) => (
        // Render the item

        <div key={index}>
          <PrismicRichText field={item?.data.heading} />
          <PrismicNextImage field={item?.data.image} />
          <PrismicNextLink document={item}>
            <PrismicText field={item?.data.heading} />
          </PrismicNextLink>
        </div>
      ))} */}
    </section>
  );
};

export default ProjetoSlices;
