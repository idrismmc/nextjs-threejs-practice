import { Bounded } from "@/components/bounded";
import clsx from "clsx";
import { textAndImage } from "@/lib/data";
import { Heading } from "@/components/heading";
import { ButtonLink } from "@/components/button-link";
import ParallaxImage from "@/sections/text-and-image/parallax-image";
import SlideIn from "@/components/slide-in";

const TextAndImage = () => {
  return (
    <div>
      {textAndImage.map((item, index) => (
        <Bounded
          key={item.theme}
          className={clsx(
            "sticky top-[calc(var(--index)*2rem)]",
            item.theme === "Blue" && "bg-texture bg-brand-blue text-white",
            item.theme === "Orange" && "bg-texture bg-brand-orange text-white",
            item.theme === "Navy" && "bg-texture bg-brand-navy text-white",
            item.theme === "Lime" && "bg-texture bg-brand-lime"
          )}
          style={{ "--index": index } as React.CSSProperties}
        >
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
            <div
              className={clsx(
                "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
                index % 2 === 1 && "md:order-2"
              )}
            >
              <SlideIn>
                <Heading size="lg" as="h2">
                  {item.heading}
                </Heading>
              </SlideIn>
              <SlideIn>
                <div className="max-w-md text-lg leading-relaxed">
                  {item.text}
                </div>
              </SlideIn>
              <SlideIn>
                <ButtonLink
                  href="/"
                  color={item.theme === "Lime" ? "orange" : "lime"}
                >
                  Shop Boards
                </ButtonLink>
              </SlideIn>
            </div>
            <ParallaxImage
              foregroundImage={item.foregroundImage}
              backgroundImage={item.backgroundImage}
            />
          </div>
        </Bounded>
      ))}
    </div>
  );
};

export default TextAndImage;
