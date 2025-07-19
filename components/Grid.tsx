import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Element } from "react-scroll";

const Grid = () => {
  return (
    // <Element name='about'>
    <section id='about'>
      <BentoGrid className="mt-10">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
    // </Element>
  );
};

export default Grid;
