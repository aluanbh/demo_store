const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try {
        const mousesCategory = await prisma.category.upsert({
            where: { slug: "mouses" },
            update: {},
            create: {
                name: "Mouses",
                slug: "mouses",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
                products: {
                    create: [
                        {
                            name: "Logitech MX Master 3s",
                            slug: "logitech-mx-master-3s",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            basePrice: 650,
                            discountPercentage: 10, // 10% discount
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png" },
                                ],

                            },
                        },
                        {
                            name: "Logitech Pro X Superlight",
                            slug: "logitech-pro-x-superlight",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png" },
                                ],

                            },
                            basePrice: 750,
                            discountPercentage: 5, // 5% discount
                        },
                        {
                            name: "Logitech G305 Lightspeed",
                            slug: "logitech-g305-lightspeed",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png" },
                                ],

                            },
                            basePrice: 300,
                            discountPercentage: 15, // 15% discount
                        },
                        {
                            name: "Hyperx Pulsefire Dart",
                            slug: "hyperx-pulsefire-dart",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png" },
                                ],

                            },
                            basePrice: 600,
                            discountPercentage: 10, // 10% discount
                        },
                        {
                            name: "Razer Deathadder V2 Pro",
                            slug: "razer-deathadder-v2-pro",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png" },
                                ],

                            },
                            basePrice: 350,
                            discountPercentage: 0,
                        },
                    ],
                },
            }
        });

        const keyboardsCategory = await prisma.category.upsert({
            where: { slug: "keyboards" },
            update: {},
            create: {
                name: "Teclados",
                slug: "keyboards",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
                products: {
                    create: [
                        {
                            name: "Logitech MX Keys Mini",
                            slug: "logitech-mx-keys-mini",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png" },
                                ],
                            },
                            basePrice: 650,
                            discountPercentage: 10, // 10% discount
                        },
                        {
                            name: "Logitech MX Keys S",
                            slug: "logitech-mx-keys-s",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png" },
                                ],
                            },
                            basePrice: 750,
                            discountPercentage: 10, // 10% discount
                        },
                        {
                            name: "Logitech Pop Keys",
                            slug: "logitech-pop-keys",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png" },
                                ],
                            },
                            basePrice: 440,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Logitech MX Mechanical",
                            slug: "logitech-mx-mechanical",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png" },
                                ],
                            },
                            basePrice: 700,
                            discountPercentage: 15, // 10% discount
                        },
                        {
                            name: "Epomaker TH80",
                            slug: "epomaker-th80",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png" },
                                ],
                            },
                            basePrice: 500,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Redragon Gamer Ashe",
                            slug: "redragon-gamer-ashe",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png" },
                                ],
                            },
                            basePrice: 400,
                            discountPercentage: 25, // 10% discount
                        },
                    ],
                },
            },
        });

        const headphonesCategory = await prisma.category.upsert({
            where: { slug: "headphones" },
            update: {},
            create: {
                name: "Fones",
                slug: "headphones",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
                products: {
                    create: [
                        {
                            name: "Logitech Zone Vibe 100",
                            slug: "logitech-zone-vibe-100",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png" },
                                ],
                            },
                            basePrice: 750,
                            discountPercentage: 10, // 10% discount
                        },
                        {
                            name: "Logitech Pro X 2 Lightspeed",
                            slug: "logitech-pro-x-2-lightspeed",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png" },
                                ],
                            },
                            basePrice: 1200,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Logitech Astro A30",
                            slug: "logitech-astro-a30",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png" },
                                ],
                            },
                            basePrice: 1500,
                            discountPercentage: 15, // 10% discount
                        },
                        {
                            name: "Logitech Zone Wired Earbuds",
                            slug: "logitech-zone-wired-earbuds",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png" },
                                ],
                            },
                            basePrice: 550,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Hyperx Cloud Stinger 2",
                            slug: "hyperx-cloud-stinger-2",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png" },
                                ],
                            },
                            basePrice: 250,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Razer Kraken X",
                            slug: "razer-kraken-x",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png" },
                                ],
                            },
                            basePrice: 200,
                            discountPercentage: 0, // 10% discount
                        },
                    ]
                }
            },
        });

        const mousepadsCategory = await prisma.category.upsert({
            where: { slug: "mousepads" },
            update: {},
            create: {
                name: "Mousepads",
                slug: "mousepads",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
                products: {
                    create: [
                        {
                            name: "Logitech G240",
                            slug: "logitech-g240",
                            description: "Mousepad Logitech G240",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g240.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g240.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g240.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g240.png" },
                                ],
                            },
                            basePrice: 100,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Logitech G440",
                            slug: "logitech-g440",
                            description: "Mousepad Logitech G440",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g440.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g440.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g440.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g440.png" },
                                ],
                            },
                            basePrice: 150,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Logitech G640",
                            slug: "logitech-g640",
                            description: "Mousepad Logitech G640",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g640.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g640.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g640.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g640.png" },
                                ],
                            },
                            basePrice: 200,
                            discountPercentage: 0, // 10% discount
                        },
                    ]
                },
            }
        });

        const monitorsCategory = await prisma.category.upsert({
            where: { slug: "monitors" },
            update: {},
            create: {
                name: "Monitores",
                slug: "monitors",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
                products: {
                    create: [
                        {
                            name: "Dell S2421HN",
                            slug: "dell-s2421hn",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png" },
                                ],
                            },
                            basePrice: 1500,
                            discountPercentage: 15, // 10% discount
                        },
                        {
                            name: "Dell P2422H",
                            slug: "dell-p2422h",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png" },
                                ],
                            },
                            basePrice: 2000,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Dell P2723QE",
                            slug: "dell-p2723qe",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png" },
                                ],
                            },
                            basePrice: 2500,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Dell S3422DWG",
                            slug: "dell-s3422dwg",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png" },
                                ],
                            },
                            basePrice: 3200,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Dell S3222DGM",
                            slug: "dell-s3222dgm",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png" },
                                ],
                            },
                            basePrice: 3500,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Dell AW2524HF",
                            slug: "dell-aw2524hf",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png" },
                                ],
                            },
                            basePrice: 4200,
                            discountPercentage: 10, // 10% discount
                        },
                    ]
                }
            }
        });

        const speakersCategory = await prisma.category.upsert({
            where: { slug: "speakers" },
            update: {},
            create: {
                name: "Speakers",
                slug: "speakers",
                imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
                products: {
                    create: [
                        {
                            name: "Logitech Surround Sound Z607",
                            slug: "logitech-surround-sound-z607",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png" },
                                ],
                            },
                            basePrice: 1200,
                            discountPercentage: 5, // 10% discount
                        },
                        {
                            name: "Logitech Dock",
                            slug: "logitech-dock",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png" },
                                ],
                            },
                            basePrice: 4500,
                            discountPercentage: 15, // 10% discount
                        },
                        {
                            name: "Sony SA-Z9R Speakers",
                            slug: "sony-sa-z9r-speakers",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png" },
                                ],
                            },
                            basePrice: 4000,
                            discountPercentage: 10, // 10% discount
                        },
                        {
                            name: "Sony XB43 Extra Bass",
                            slug: "sony-xb43-extra-bass",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png" },
                                ],
                            },
                            basePrice: 3200,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Sony XB23 Extra Bass",
                            slug: "sony-xb23-extra-bass",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png" },
                                ],
                            },
                            basePrice: 3500,
                            discountPercentage: 0, // 10% discount
                        },
                        {
                            name: "Sony HT-S200F Soundbar",
                            slug: "sony-ht-s200f-soundbar",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
                            imageUrls: {
                                create: [
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png" },
                                    { url: "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png" },
                                ],
                            },
                            basePrice: 2500,
                            discountPercentage: 0, // 10% discount
                        },
                    ]
                }
            }
        });




        console.log("Seed completed successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
