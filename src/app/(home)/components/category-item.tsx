import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { CircleOffIcon, HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, MousePointerSquareIcon, SpeakerIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category;
}


const CategoryItem = ({ category }: CategoryItemProps) => {
    const categoryIcon = () => {
        switch (category.slug) {
            case 'keyboards':
                return <KeyboardIcon size={16} />;
            case 'mouses':
                return <MouseIcon size={16} />;
            case 'monitors':
                return <MonitorIcon size={16} />;
            case 'headphones':
                return <HeadphonesIcon size={16} />;
            case 'mousepads':
                return <MousePointerSquareIcon size={16} />;
            case 'speakers':
                return <SpeakerIcon size={16} />;
            default:
                return <CircleOffIcon size={16} />;
        }
    }

    return (
        <Badge variant="outline" className="flex justify-center items-center py-3 gap-2 rounded-lg">
            {categoryIcon()}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
    );
}

export default CategoryItem;