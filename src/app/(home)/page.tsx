import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductsHorizontal from "./components/products-horizontal";

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },

    },
    include: {
      imageUrls: true,
    },
  });


  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductsHorizontal products={deals} />
      </div>
    </div>
  );
}
