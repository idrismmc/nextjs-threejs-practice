import Hero from "@/sections/hero/hero";
import ProductGrid from "@/sections/product-grid/product-grid";
import Team from "@/sections/team/team";
import TextAndImage from "@/sections/text-and-image/text-and-image";
import VideoBlock from "@/sections/video-block/video-block";
const Page = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      <TextAndImage />
      <VideoBlock />
      <Team />
    </>
  );
};

export default Page;
