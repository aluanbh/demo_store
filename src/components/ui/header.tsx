'use client';

import { HomeIcon, LogIn, LogOut, Menu, PercentIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

export const Header = () => {
    const { status, data } = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }
    const handleLogoutClick = async () => {
        await signOut();
    }

    function limitName(name: string | null | undefined) {
        if (!name) return;
        if (name.length > 30) {
            return name.substring(0, 30) + "...";
        } else {
            return name;
        }
    }

    return (
        <Card className="mb-5">
            <CardContent className="flex h-[89px] items-center justify-between px-8 py-0">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <Menu size={20} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader className="justify-start text-left">
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>

                        {status === "authenticated" && data?.user && (
                            <div className="flex flex-col">
                                <div className="flex item-center gap-2 py-4">
                                    <div className="flex flex-col justify-center">
                                        <Avatar>
                                            <AvatarFallback>
                                                {data?.user?.name?.[0].toUpperCase()}
                                            </AvatarFallback>
                                            {data.user.image &&
                                                <AvatarImage src={data?.user?.image} />
                                            }
                                        </Avatar>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-medium flex items-center">
                                            {limitName(data?.user?.name)}</p>
                                        <p className="text-sm opacity-75">Boas compras!</p>
                                    </div>
                                </div>

                                <Separator />
                            </div>
                        )}

                        <div className="flex flex-col gap-2 py-4 mt-4">
                            {status === "authenticated" ?
                                <Button variant="outline" className="justify-start gap-2"
                                    onClick={handleLogoutClick}
                                >
                                    <LogOut size={16} />
                                    Sair
                                </Button> :
                                <Button variant="outline" className="justify-start gap-2"
                                    onClick={handleLoginClick}
                                >
                                    <LogIn size={16} />
                                    Fazer Login
                                </Button>}

                            <Button variant="outline" className="justify-start gap-2">
                                <HomeIcon size={16} />
                                Início
                            </Button>

                            <Button variant="outline" className="justify-start gap-2">
                                <ShoppingBag size={16} />
                                Catálogo
                            </Button>

                            <Button variant="outline" className="justify-start gap-2">
                                <PercentIcon size={16} />
                                Ofertas
                            </Button>

                            <Button variant="outline" className="justify-start gap-2">
                                <ShoppingCart size={16} />
                                Carrinho
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>

                <h2 className="text-lg font-semibold"><span className="text-primary">Demo </span>Store</h2>

                <Button size="icon" variant="outline">
                    <ShoppingCart size={20} />
                </Button>
            </CardContent>
        </Card>
    );
};
export default Header;