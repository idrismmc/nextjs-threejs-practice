import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import SlideIn from "@/components/slide-in";
import { products } from "@/lib/data";
import SkateboardProduct from "@/sections/product-grid/skateboard-product";

const ProductGrid = () => {
  return (
    <Bounded className="bg-texture bg-brand-gray">
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          Latest Drop
        </Heading>
      </SlideIn>
      <SlideIn>
        <p className="text-center ~mb-6/10">
          Grab our freshest designs before they sell out!
        </p>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <SkateboardProduct
            key={product.id}
            id={product.id}
            src={product.image}
            price={product.price}
            name={product.name}
            color={product.color}
            href={product.href}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
