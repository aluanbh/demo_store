import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
interface ProductItemProps {
    product: any;
}

const ProductItem = ({ product }: ProductItemProps) => {
    console.log(product)

    return <div className="flex flex-col gap-4 max-w-[156px]">
        <div className="relative bg-accent rounded-lg h-[170px]  w-[156px] flex items-center justify-center">
            <Image
                // src={product.imageUrls[0].url}
                src={"https://shopinfo.vteximg.com.br/arquivos/ids/1498114-1000-1000/1.png?v=638316016503600000"}
                alt={product.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[90px] w-auto"
                style={{ objectFit: "contain" }}
            />
            {product.discountPercentage > 0 && (
                <Badge className="absolute top-2 left-2  px-2 py-[2px]">
                    <ArrowDownIcon size={14} />{product.discountPercentage}%
                </Badge>
            )}
        </div>


        <div className="">
            <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
            <>
                {product.discountPercentage > 0 ?
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">R$ {product.totalPrice}</p>
                        <p className="opacity-75 line-through text-gray-400 text-xs">R$ {Number(product.basePrice)}</p>
                    </div>
                    :
                    <p className="font-semibold text-sm">R$ {Number(product.basePrice)}</p>
                }
            </>

        </div>
    </div>
}

export default ProductItem;