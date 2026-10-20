// ==========================================
// DATA KATALOG FATIMAH FLORIST (LENGKAP)
// ==========================================
const products = [
    // --- BLOOM BOX ---
    {
        id: 1,
        name: "BlomBox Artificial Flower Drak Blue",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BlomBox artificial flower drak blue 300k.jpeg",
        description: "Rangkaian bunga artifisial nuansa gelap elegan di dalam box eksklusif."
    },
    {
        id: 2,
        name: "BlomBox Artificial Flower Navy",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BlomBox artificial flower navy 300k.jpeg",
        description: "Bloom box tema navy mewah yang cantik untuk berbagai acara spesial."
    },
    {
        id: 3,
        name: "BlomBox Artificial Flower Pink",
        category: "Bloom Box",
        price: 350000,
        image: "IMAGE/BlomBox artificial flower pink 350k.jpeg",
        description: "Bloom box nuansa pink lembut yang romantis dan manis."
    },
    {
        id: 4,
        name: "BlomBox Artificial Flower Sage",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BlomBox artificial flower sage 300k.jpeg",
        description: "Bloom box warna sage green kekinian yang aesthetic."
    },
    {
        id: 5,
        name: "BloomBox Akrilik Artificial Flower",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BloomBox akrilik artificial flower 300k.jpeg",
        description: "Box akrilik transparan modern berisi rangkaian bunga artifisial berkualitas."
    },
    {
        id: 6,
        name: "BloomBox Artificial Flower Color Full",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BloomBox artificial flower color full 300k.jpeg",
        description: "Rangkaian bunga warna-warni ceria di dalam box eksklusif."
    },
    {
        id: 7,
        name: "BloomBox Artificial Flower Maroon",
        category: "Bloom Box",
        price: 280000,
        image: "IMAGE/BloomBox artificial flower maroon 280k.jpeg",
        description: "Bloom box warna merah maroon yang elegan dan berkelas."
    },
    {
        id: 8,
        name: "BloomBox Blue",
        category: "Bloom Box",
        price: 300000,
        image: "IMAGE/BloomBox blue 300k.jpeg",
        description: "Bloom box nuansa biru segar nan menawan."
    },
    {
        id: 9,
        name: "BloomBox Garbera",
        category: "Bloom Box",
        price: 500000,
        image: "IMAGE/BloomBox garbera 500k.jpeg",
        description: "Bloom box spesial bunga garbera ukuran besar dan mewah."
    },
    {
        id: 10,
        name: "BloomBox Lily",
        category: "Bloom Box",
        price: 650000,
        image: "IMAGE/BloomBox Lily 650.jpeg",
        description: "Rangkaian bunga lily premium pilihan di dalam box eksklusif."
    },
    {
        id: 11,
        name: "BloomBox Rose",
        category: "Bloom Box",
        price: 350000,
        image: "IMAGE/BloomBox rose 350k.jpeg",
        description: "Bloom box mawar pilihan yang cantik dan tahan lama."
    },

    // --- BUKET BUNGA & KOREAN STYLE ---
    {
        id: 12,
        name: "Bouquet Batter",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet batter 300k.jpeg",
        description: "Buket bunga artifisial model unik dan elegan."
    },
    {
        id: 13,
        name: "Bouquet Biru Artificial",
        category: "Buket Bunga",
        price: 120000,
        image: "IMAGE/Bouquet biru artificial 120k.jpeg",
        description: "Buket bunga artifisial warna biru cerah menyegarkan."
    },
    {
        id: 14,
        name: "Bouquet Blue Luxury",
        category: "Buket Bunga",
        price: 700000,
        image: "IMAGE/Bouquet blue 700k.jpeg",
        description: "Buket besar nuansa biru mewah untuk momen sangat spesial."
    },
    {
        id: 15,
        name: "Bouquet Coklat 8 Pcs",
        category: "Buket Snack",
        price: 400000,
        image: "IMAGE/Bouquet coklat 8 pcs 400k.jpeg",
        description: "Buket berisi 8 pcs cokelat pilihan merk terkenal."
    },
    {
        id: 16,
        name: "Bouquet Coklat & Rose Red",
        category: "Buket Snack",
        price: 500000,
        image: "IMAGE/Bouquet coklat 10 pcs x rose red 500k.jpeg",
        description: "Kombinasi sempurna 10 pcs cokelat dan bunga mawar merah."
    },
    {
        id: 17,
        name: "Bouquet Coklat Ferrero 12 Pcs",
        category: "Buket Snack",
        price: 380000,
        image: "IMAGE/Bouquet coklat forrero 12 pcs 380k.jpeg",
        description: "Buket eksklusif berisi 12 pcs cokelat Ferrero Rocher."
    },
    {
        id: 18,
        name: "Bouquet Coklat x Teddy Bear",
        category: "Buket Snack",
        price: 250000,
        image: "IMAGE/Bouquet coklat x teddy bear 250k.jpeg",
        description: "Buket cokelat manis dipadukan dengan boneka teddy bear imut."
    },
    {
        id: 19,
        name: "Bouquet Ferrero 50 Pcs (Giant)",
        category: "Buket Snack",
        price: 1000000,
        image: "IMAGE/Bouquet forrero 50 pcs 1 jt.jpeg",
        description: "Buket raksasa berisi 50 pcs cokelat Ferrero untuk kado spektakuler."
    },
    {
        id: 20,
        name: "Bouquet Garbera",
        category: "Buket Bunga",
        price: 350000,
        image: "IMAGE/Bouquet garbera 350k.jpeg",
        description: "Buket bunga garbera segar pilihan dengan balutan kertas cantik."
    },
    {
        id: 21,
        name: "Bouquet Garbera Mix Baby Breath",
        category: "Buket Bunga",
        price: 250000,
        image: "IMAGE/Bouquet grabera mix baby breath 250k.jpeg",
        description: "Perpaduan bunga garbera dan baby breath yang manis."
    },
    {
        id: 22,
        name: "Bouquet Krisan",
        category: "Buket Bunga",
        price: 280000,
        image: "IMAGE/Bouquet kerisan 280k.jpeg",
        description: "Rangkaian bunga krisan segar rimbun dan cantik."
    },
    {
        id: 23,
        name: "Bouquet Korean Style",
        category: "Korean Style",
        price: 300000,
        image: "IMAGE/Bouquet korean style 300k.jpeg",
        description: "Buket gaya Korea dengan balutan wrap kain premium."
    },
    {
        id: 24,
        name: "Bouquet Korean Style Colorful",
        category: "Korean Style",
        price: 150000,
        image: "IMAGE/Bouquet korean style color full 150k.jpeg",
        description: "Buket gaya Korea warna-warni ceria."
    },
    {
        id: 25,
        name: "Bouquet Korean Style Fanta",
        category: "Korean Style",
        price: 300000,
        image: "IMAGE/Bouquet korean style fanta 300k.jpeg",
        description: "Buket gaya Korea warna pink fanta yang cerah dan mencolok."
    },
    {
        id: 26,
        name: "Bouquet Korean Style Hot Pink",
        category: "Korean Style",
        price: 320000,
        image: "IMAGE/Bouquet korean style hot pink 320k.jpeg",
        description: "Buket model Korea hot pink trendy dan modern."
    },
    {
        id: 27,
        name: "Bouquet Korean Style Blue (XL)",
        category: "Korean Style",
        price: 450000,
        image: "IMAGE/Bouquet koren style blue artificial (uk XL) 450k.jpeg",
        description: "Buket gaya Korea ukuran besar (XL) warna biru elegan."
    },
    {
        id: 28,
        name: "Bouquet Korean Style Soft Pink",
        category: "Korean Style",
        price: 330000,
        image: "IMAGE/Bouquet koren style soft pink 330k.jpeg",
        description: "Buket gaya Korea warna soft pink lembut untuk hadiah spesial."
    },
    {
        id: 29,
        name: "Bouquet Lavender",
        category: "Buket Bunga",
        price: 240000,
        image: "IMAGE/Bouquet lavender 240k.jpeg",
        description: "Buket bunga lavender artifisial bernuansa ungu menenangkan."
    },
    {
        id: 30,
        name: "Bouquet Lily",
        category: "Buket Bunga",
        price: 600000,
        image: "IMAGE/Bouquet Lily 600k1.jpeg",
        description: "Buket bunga lily harum mewah dan berkelas."
    },
    {
        id: 31,
        name: "Bouquet Lily",
        category: "Buket Bunga",
        price: 600000,
        image: "IMAGE/Bouquet Lily 600k.jpeg",
        description: "Buket bunga lily pilihan."
    },
    {
        id: 32,
        name: "Bouquet Lily Artificial (XL)",
        category: "Buket Bunga",
        price: 400000,
        image: "IMAGE/Bouquet Lily artificial uk XL 400k.jpeg",
        description: "Buket lily ukuran XL artifisial tahan lama dan megah."
    },
    {
        id: 33,
        name: "Bouquet Lily Mix Rose",
        category: "Buket Bunga",
        price: 500000,
        image: "IMAGE/Bouquet Lily mix rose 500k.jpeg",
        description: "Kombinasi elegan antara bunga lily dan mawar."
    },
    {
        id: 34,
        name: "Bouquet Lily Round Luxury",
        category: "Buket Bunga",
        price: 1500000,
        image: "IMAGE/Bouquet Lily round 1,5 jt.jpeg",
        description: "Buket bundar lily eksklusif ukuran besar kelas premium."
    },
    {
        id: 35,
        name: "Bouquet Lily & Rose Mix",
        category: "Buket Bunga",
        price: 600000,
        image: "IMAGE/Bouquet lily, rose 600k.jpeg",
        description: "Rangkaian spesial bunga lily dan mawar segar berkualitas tinggi."
    },
    {
        id: 36,
        name: "Bouquet Navy",
        category: "Buket Bunga",
        price: 270000,
        image: "IMAGE/Bouquet navy 270k.jpeg",
        description: "Buket nuansa warna navy maskulin dan elegan."
    },
    {
        id: 37,
        name: "Bouquet Peony Artificial",
        category: "Buket Bunga",
        price: 250000,
        image: "IMAGE/Bouquet peony artificial 250k.jpeg",
        description: "Buket bunga peony artifisial bertekstur lembut."
    },
    {
        id: 38,
        name: "Bouquet Pink Artificial",
        category: "Buket Bunga",
        price: 120000,
        image: "IMAGE/Bouquet pink artificial 120k.jpeg",
        description: "Buket artifisial warna pink ekonomis dan cantik."
    },
    {
        id: 39,
        name: "Bouquet Pom Pom",
        category: "Buket Bunga",
        price: 700000,
        image: "IMAGE/Bouquet pom pom 700k.jpeg",
        description: "Buket bunga krisan pom pom besar yang unik dan meriah."
    },
    {
        id: 40,
        name: "Bouquet Roko",
        category: "Custom",
        price: 500000,
        image: "IMAGE/Bouquet roko 500k.jpeg",
        description: "Buket custom kreatif unik."
    },
    {
        id: 41,
        name: "Bouquet Rose Standard",
        category: "Buket Bunga",
        price: 100000,
        image: "IMAGE/Bouquet rose 100k.jpeg",
        description: "Buket mawar simpel, manis, dan ramah di kantong."
    },
    {
        id: 42,
        name: "Bouquet Rose Blue Round",
        category: "Buket Bunga",
        price: 400000,
        image: "IMAGE/Bouquet rose blue round artificial 400k.jpeg",
        description: "Buket mawar biru bentuk bulat melingkar rapi."
    },
    {
        id: 43,
        name: "Bouquet Rose Hitam Artificial",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet rose hitam artificial 300k.jpeg",
        description: "Buket mawar hitam artifisial dengan kesan misterius dan elegan."
    },
    {
        id: 44,
        name: "Bouquet Rose Lavender",
        category: "Buket Bunga",
        price: 200000,
        image: "IMAGE/Bouquet rose lavender 200k.jpeg",
        description: "Buket mawar warna lavender lembut."
    },
    {
        id: 45,
        name: "Bouquet Rose Mix Baby Breath",
        category: "Buket Bunga",
        price: 350000,
        image: "IMAGE/Bouquet rose mix baby breath 350k.jpeg",
        description: "Buket mawar cantik dikelilingi baby breath putih."
    },
    {
        id: 46,
        name: "Bouquet Rose Pink x Wrap Sage",
        category: "Buket Bunga",
        price: 220000,
        image: "IMAGE/Bouquet rose pink x warp sage 220k.jpeg",
        description: "Mawar pink dibalut dengan kertas pembungkus warna sage."
    },
    {
        id: 47,
        name: "Bouquet Rose Putih",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet rose putih 300k.jpeg",
        description: "Buket mawar putih segar pilihan."
    },
    {
        id: 48,
        name: "Bouquet Rose Putih Artificial",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet rose putih artificial 300k.jpeg",
        description: "Buket mawar putih artifisial suci dan menawan."
    },
    {
        id: 49,
        name: "Bouquet Rose Red",
        category: "Buket Bunga",
        price: 400000,
        image: "IMAGE/Bouquet rose red 400k.jpeg",
        description: "Buket mawar merah klasik tanda cinta yang mewah."
    },
    {
        id: 50,
        name: "Bouquet Rose Round Artificial",
        category: "Buket Bunga",
        price: 450000,
        image: "IMAGE/Bouquet rose round artificial 450k.jpeg",
        description: "Buket mawar bundar artifisial padat dan rapi."
    },
    {
        id: 51,
        name: "Bouquet Rose Vintage",
        category: "Buket Bunga",
        price: 280000,
        image: "IMAGE/Bouquet rose vintage 280k.jpeg",
        description: "Buket mawar gaya vintage klasik bernuansa hangat."
    },
    {
        id: 52,
        name: "Bouquet Rose Vintage Artificial",
        category: "Buket Bunga",
        price: 130000,
        image: "IMAGE/Bouquet rose vintage artificial 130k.jpeg",
        description: "Buket mawar vintage artifisial ekonomis."
    },
    {
        id: 53,
        name: "Bouquet Rose Wrap Pink",
        category: "Buket Bunga",
        price: 270000,
        image: "IMAGE/Bouquet rose warp pink 270k.jpeg",
        description: "Buket mawar dengan balutan pembungkus warna pink manis."
    },
    {
        id: 54,
        name: "Bouquet Rose x Baby Breath",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet rose x baby breath 300k.jpeg",
        description: "Perpaduan klasik mawar dan baby breath."
    },
    {
        id: 55,
        name: "Bouquet Round Rose Artificial",
        category: "Buket Bunga",
        price: 400000,
        image: "IMAGE/Bouquet round rose artificial 400k.jpeg",
        description: "Rangkaian mawar bundar artifisial rapi."
    },
    {
        id: 56,
        name: "Bouquet Round Rose Artificial (Large)",
        category: "Buket Bunga",
        price: 500000,
        image: "IMAGE/Bouquet round rose artificial 500k.jpeg",
        description: "Buket mawar bundar artifisial ukuran besar."
    },
    {
        id: 57,
        name: "Bouquet Sage",
        category: "Buket Bunga",
        price: 700000,
        image: "IMAGE/Bouquet sage 700k.jpeg",
        description: "Buket besar nuansa sage green mewah."
    },
    {
        id: 58,
        name: "Bouquet Sage Vintage",
        category: "Buket Bunga",
        price: 250000,
        image: "IMAGE/Bouquet sage vintage 250k.jpeg",
        description: "Buket nuansa sage gaya vintage estetik."
    },
    {
        id: 59,
        name: "Bouquet Sage Wrap Hitam",
        category: "Buket Bunga",
        price: 120000,
        image: "IMAGE/Bouquet sage warp hitam 120k.jpeg",
        description: "Buket tema sage dengan pembungkus hitam kontras keren."
    },
    {
        id: 60,
        name: "Bouquet Sage Wrap Putih",
        category: "Buket Bunga",
        price: 120000,
        image: "IMAGE/Bouquet sage x warp putih 120k.jpeg",
        description: "Buket tema sage dengan balutan wrap putih bersih."
    },
    {
        id: 61,
        name: "Bouquet Snack x Teddy Bear",
        category: "Buket Snack",
        price: 450000,
        image: "IMAGE/Bouquet snack x taddy bear 450k.jpeg",
        description: "Buket snack komplit ukuran besar dengan boneka teddy bear."
    },
    {
        id: 62,
        name: "Bouquet Sunflower",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet sunflower 300k.jpeg",
        description: "Buket bunga matahari cerah penyemangat hari."
    },
    {
        id: 63,
        name: "Bouquet Teddy Bear",
        category: "Buket Bunga",
        price: 175000,
        image: "IMAGE/Bouquet taddy bear 175k.jpeg",
        description: "Buket spesial beruang boneka lucu."
    },
    {
        id: 64,
        name: "Bouquet Thumbelina Artificial",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Bouquet Thumbelina artificial 300k.jpeg",
        description: "Buket model thumbelina artifisial cantik."
    },
    {
        id: 65,
        name: "Bouquet Thumbelina Wrap Hitam",
        category: "Buket Bunga",
        price: 250000,
        image: "IMAGE/Bouquet Thumbelina artificial warp hitam 250k.jpeg",
        description: "Buket thumbelina dengan balutan wrap hitam modern."
    },
    {
        id: 66,
        name: "Bouquet Thumbelina Pink Artificial",
        category: "Buket Bunga",
        price: 600000,
        image: "IMAGE/Bouquet Thumbelina pink artificial 600k.jpeg",
        description: "Buket thumbelina pink besar yang mewah."
    },
    {
        id: 67,
        name: "Bouquet Thumbelina Size L",
        category: "Buket Bunga",
        price: 350000,
        image: "IMAGE/Bouquet Thumbelina size L 350k.jpeg",
        description: "Buket thumbelina ukuran L pas untuk kado."
    },
    {
        id: 68,
        name: "Bouquet Thumbelina Size XL",
        category: "Buket Bunga",
        price: 500000,
        image: "IMAGE/Bouquet Thumbelina size xl 500k.jpeg",
        description: "Buket thumbelina ukuran XL ekstra besar."
    },
    {
        id: 69,
        name: "Handbouquet",
        category: "Buket Bunga",
        price: 250000,
        image: "IMAGE/Handbouquet 250k.jpeg",
        description: "Handbouquet cantik untuk pengantin atau acara resmi."
    },
    {
        id: 70,
        name: "Omakase Bouquet Artificial",
        category: "Buket Bunga",
        price: 290000,
        image: "IMAGE/Omakase bouquet artificial 290k.jpeg",
        description: "Rangkaian buket gaya omakase seni bebas yang unik."
    },
    {
        id: 71,
        name: "Omakase Bouquet Artificial (XL)",
        category: "Buket Bunga",
        price: 400000,
        image: "IMAGE/Omakase bouquet artificial size xl 400k.jpeg",
        description: "Rangkaian buket omakase ukuran XL."
    },
    {
        id: 72,
        name: "Snack Teddy Bear",
        category: "Buket Snack",
        price: 175000,
        image: "IMAGE/Sanck tadybear 175k.jpeg",
        description: "Buket snack mini dengan boneka teddy bear."
    },
    {
        id: 73,
        name: "Thumbelina Artificial",
        category: "Buket Bunga",
        price: 300000,
        image: "IMAGE/Thumbelina artificial 300k.jpeg",
        description: "Rangkaian thumbelina artifisial menawan."
    },
    {
        id: 74,
        name: "Vases Artificial Flower Pink",
        category: "Bunga Meja",
        price: 330000,
        image: "IMAGE/Vases artificial flower pink 330k.jpeg",
        description: "Vas bunga artifisial nuansa pink manis untuk dekorasi ruangan."
    },
    {
        id: 75,
        name: "Vases Flower Artificial",
        category: "Bunga Meja",
        price: 300000,
        image: "IMAGE/Vases flower artificial 300k.jpeg",
        description: "Dekorasi vas bunga artifisial elegan siap pajang."
    },
    {
        id: 77,
        name: "Bouquet Money Round Rose Model 1",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.51.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 78,
        name: "Bouquet Money Round Rose Model 2",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.52.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 79,
        name: "Bouquet Money Round Rose Model 3",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.53.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 80,
        name: "Bouquet Money Round Rose Model 4",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.54.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 81,
        name: "Bouquet Money Round Rose Model 5",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.55.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 82,
        name: "Bouquet Money Round Rose Model 6",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.56.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 83,
        name: "Bouquet Money Round Rose Model 7",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.57.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 84,
        name: "Bouquet Money Round Rose Model 8",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.58.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 85,
        name: "Bouquet Money Round Rose Model 9",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.29.59.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 86,
        name: "Bouquet Money Round Rose Model 10",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.30.00.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 87,
        name: "Bouquet Money Round Rose Model 11",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.30.02.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 88,
        name: "Bouquet Money Round Rose Model 12",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.31.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 89,
        name: "Bouquet Money Round Rose Model 13",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.34.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 90,
        name: "Bouquet Money Round Rose Model 14",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.35 (1).jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 91,
        name: "Bouquet Money Round Rose Model 15",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.35.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 92,
        name: "Bouquet Money Round Rose Model 16",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.36.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 93,
        name: "Bouquet Money Round Rose Model 17",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.37 (1).jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 94,
        name: "Bouquet Money Round Rose Model 18",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.37.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 95,
        name: "Bouquet Money Round Rose Model 19",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.38 (1).jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 96,
        name: "Bouquet Money Round Rose Model 20",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.38.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 97,
        name: "Bouquet Money Round Rose Model 21",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.43.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 98,
        name: "Bouquet Money Round Rose Model 22",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.44 (1).jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 99,
        name: "Bouquet Money Round Rose Model 23",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.44.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 100,
        name: "Bouquet Money Round Rose Model 24",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.45.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 101,
        name: "Bouquet Money Round Rose Model 25",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.46.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 102,
        name: "Bouquet Money Round Rose Model 26",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.47.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 103,
        name: "Bouquet Money Round Rose Model 27",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.48.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 104,
        name: "Bouquet Money Round Rose Model 28",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.49 (1).jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 105,
        name: "Bouquet Money Round Rose Model 29",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.49.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 106,
        name: "Bouquet Money Round Rose Model 30",
        category: "Buket Uang",
        price: 250000,
        image: "IMAGE/Bouquet money round rose/WhatsApp Image 2026-10-06 at 13.37.50.jpeg",
        description: "Buket uang bentuk lingkaran mewah dengan rangkaian mawar cantik."
    },
    {
        id: 107,
        name: "Bouquet Snack Random Model 1",
        category: "Buket Snack",
        price: 120000,
        image: "IMAGE/Bouquet snack random 120k/WhatsApp Image 2026-10-06 at 13.44.36 (1).jpeg",
        description: "Buket snack komplit pilihan acak yang manis dan menarik untuk kado ucapan."
    },
    {
        id: 108,
        name: "Bouquet Snack Random Model 2",
        category: "Buket Snack",
        price: 120000,
        image: "IMAGE/Bouquet snack random 120k/WhatsApp Image 2026-10-06 at 13.44.36.jpeg",
        description: "Buket snack komplit pilihan acak yang manis dan menarik untuk kado ucapan."
    },
    {
        id: 109,
        name: "Bouquet Snack Random Model 3",
        category: "Buket Snack",
        price: 120000,
        image: "IMAGE/Bouquet snack random 120k/WhatsApp Image 2026-10-06 at 13.44.37.jpeg",
        description: "Buket snack komplit pilihan acak yang manis dan menarik untuk kado ucapan."
    },
    {
        id: 110,
        name: "Korean Style Bulat Model 1",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.35.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 111,
        name: "Korean Style Bulat Model 2",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.36 (1).jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 112,
        name: "Korean Style Bulat Model 3",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.36.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 113,
        name: "Korean Style Bulat Model 4",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.37.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 114,
        name: "Korean Style Bulat Model 5",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.38.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 115,
        name: "Korean Style Bulat Model 6",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.39.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 116,
        name: "Korean Style Bulat Model 7",
        category: "Korean Style",
        price: 95000,
        image: "IMAGE/Korean style bulat 95k/WhatsApp Image 2026-10-06 at 13.41.40.jpeg",
        description: "Buket gaya Korea bentuk bulat yang cantik dan minimalis."
    },
    {
        id: 117,
        name: "Bouquet Blue Artificial",
        category: "Buket Bunga",
        price: 350000,
        image: "IMAGE/Bouquet blue artificial 350k.jpeg",
        description: "Buket bunga artifisial bernuansa biru yang elegan dan menawan."
    },
    {
        id: 118,
        name: "Bouquet Green Fresh",
        category: "Buket Bunga",
        price: 270000,
        image: "IMAGE/Bouquet green fresh 270k.jpeg",
        description: "Rangkaian buket bunga segar bernuansa hijau alami yang segar dipandang."
    },
    {
        id: 119,
        name: "Bouquet Artificial Blue",
        category: "Buket Bunga",
        price: 330000,
        image: "IMAGE/Bouquet artificial blue 330k.jpeg",
        description: "Buket artifisial warna biru pilihan berkualitas tinggi dan tahan lama."
    }
];

// Nomor WhatsApp Admin Fatimah Florist
const adminWhatsApp = "628895138447";

// DOM Elements
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryList = document.getElementById('categoryList');
const noResult = document.getElementById('noResult');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

const modalImg = document.getElementById('modalImg');
const modalCat = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const moneyOptionsContainer = document.getElementById('moneyOptionsContainer');
const moneySelect = document.getElementById('moneySelect');
const modalWhatsApp = document.getElementById('modalWhatsApp');

let activeProduct = null;

// Format Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

// Display Products
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        noResult.classList.remove('hidden');
        return;
    } else {
        noResult.classList.add('hidden');
    }

    productsToDisplay.forEach(product => {
        const isMoney = product.category === "Buket Uang";
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatRupiah(product.price)}${isMoney ? ' <small style="font-size:0.75rem; color:#777; font-weight:normal;">(Mulai)</small>' : ''}</div>
                <button class="order-btn" onclick="event.stopPropagation(); openModal(${product.id})">
                    <i class="fa-brands fa-whatsapp"></i> Lihat / Pesan
                </button>
            </div>
        `;
        card.addEventListener('click', () => openModal(product.id));
        productGrid.appendChild(card);
    });
}

// DOM Elements tambahan untuk Lightbox
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.close-lightbox');

// Buka Modal Detail Produk saat kartu diklik
function openModal(productId) {
    activeProduct = products.find(p => p.id === productId);
    if (!activeProduct) return;

    modalImg.src = activeProduct.image;
    modalCat.textContent = activeProduct.category;
    modalTitle.textContent = activeProduct.name;
    modalDesc.textContent = activeProduct.description;

    // Cek Apakah Produk Kategori "Buket Uang"
    if (activeProduct.category === "Buket Uang") {
        moneyOptionsContainer.style.display = 'block';
        moneySelect.selectedIndex = 0;
        const currentPrice = parseInt(moneySelect.value);
        const selectedText = moneySelect.options[0].getAttribute('data-text');

        modalPrice.textContent = formatRupiah(currentPrice);
        updateWhatsAppLink(activeProduct.name, formatRupiah(currentPrice), selectedText);
    } else {
        moneyOptionsContainer.style.display = 'none';
        modalPrice.textContent = formatRupiah(activeProduct.price);
        updateWhatsAppLink(activeProduct.name, formatRupiah(activeProduct.price), null);
    }

    productModal.classList.add('show');
}

// ==========================================
// FITUR LIGHTBOX: KLIK GAMBAR DI DALAM MODAL
// ==========================================
modalImg.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = modalImg.src;
});

// Tutup Lightbox saat tombol (X) diklik
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

// Tutup Lightbox saat area gelap diklik
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});

// Fitur Zoom In / Zoom Out saat gambar di Lightbox diklik
let isZoomed = false;
lightboxImg.addEventListener('click', () => {
    if (!isZoomed) {
        lightboxImg.style.transform = 'scale(1.5)';
        lightboxImg.style.cursor = 'zoom-out';
        isZoomed = true;
    } else {
        lightboxImg.style.transform = 'scale(1)';
        lightboxImg.style.cursor = 'zoom-in';
        isZoomed = false;
    }
});

// Ketika Pilihan Dropdown Lembar Uang Berubah
moneySelect.addEventListener('change', () => {
    if (!activeProduct) return;
    const selectedPrice = parseInt(moneySelect.value);
    const selectedText = moneySelect.options[moneySelect.selectedIndex].getAttribute('data-text');

    modalPrice.textContent = formatRupiah(selectedPrice);
    updateWhatsAppLink(activeProduct.name, formatRupiah(selectedPrice), selectedText);
});

function updateWhatsAppLink(name, price, moneyOptionText) {
    let message = `Halo Fatimah Florist, saya ingin memesan produk berikut:%0A%0A*Nama Produk:* ${name}%0A*Total Harga Jasa:* ${price}`;
    
    if (moneyOptionText) {
        message += `%0A*Jumlah Lembar Uang:* ${moneyOptionText}`;
    }
    
    message += `%0A%0AMohon info ketersediaan dan proses selanjutnya ya. Terima kasih!`;
    modalWhatsApp.href = `https://wa.me/${adminWhatsApp}?text=${message}`;
}

// Tutup Modal
closeModal.addEventListener('click', () => productModal.classList.remove('show'));
window.addEventListener('click', (e) => { if (e.target === productModal) productModal.classList.remove('show'); });

// Filter & Search
categoryList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        filterAndSearch();
    }
});

searchInput.addEventListener('input', () => filterAndSearch());

function filterAndSearch() {
    const activeBtn = document.querySelector('.cat-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    const keyword = searchInput.value.toLowerCase();

    const filtered = products.filter(p => {
        const matchCat = category === 'all' || p.category === category;
        const matchKey = p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword);
        return matchCat && matchKey;
    });

    displayProducts(filtered);
}

// Init
displayProducts(products);
