import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";
import p_img13 from "./p_img13.png";
import p_img14 from "./p_img14.png";
import p_img15 from "./p_img15.png";
import p_img16 from "./p_img16.png";
import p_img17 from "./p_img17.png";
import p_img18 from "./p_img18.png";
import p_img19 from "./p_img19.png";
import p_img20 from "./p_img20.png";
import p_img21 from "./p_img21.png";
import p_img22 from "./p_img22.png";
import p_img23 from "./p_img23.png";
import p_img24 from "./p_img24.png";
import p_img25 from "./p_img25.png";
import p_img26 from "./p_img26.png";
import p_img27 from "./p_img27.png";
import p_img28 from "./p_img28.png";
import p_img29 from "./p_img29.png";
import p_img30 from "./p_img30.png";
import p_img31 from "./p_img31.png";
import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";

import logo from "./logo.png";
import footer_logo from "./footer_logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import hero_img2 from "./hero_img2.png";
import hero_image3 from "./hero_image3.png";
import hero_img4 from "./hero_img4.png";
import hero_image from "./hero_image.png";

export const assets = {
  logo,
  footer_logo,
  hero_img,
  hero_img2,
  hero_image3,
  hero_img4,
  hero_image,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "janedoe",
        rating: 5,
        title: "Absolutely love it!",
        body: "This top is super comfortable and fits perfectly. Great quality fabric.",
        date: "2024-01-20T10:15:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "amysmith",
        rating: 4,
        title: "Very comfy",
        body: "It’s soft and airy. Perfect for summer. The color was slightly off from the picture, but still nice.",
        date: "2024-01-22T14:00:00Z",
        verified_purchase: true,
      },
      {
        review_id: 3,
        username: "lisab",
        rating: 3,
        title: "Good but not great",
        body: "The stitching could be better, but it’s decent for the price.",
        date: "2024-01-25T09:30:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaaab",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: 1716621345448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "styleguy",
        rating: 5,
        title: "Great all-rounder",
        body: "The fit is perfect and the fabric feels really soft. Works well for both casual and semi-formal looks.",
        date: "2024-03-01T10:00:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "weekendwarrior",
        rating: 4,
        title: "Good but slightly tight",
        body: "I love the quality and color, but the sleeves feel a bit tighter than expected. Still a great purchase.",
        date: "2024-03-02T14:30:00Z",
        verified_purchase: true,
      },
    ],
  },

  {
    _id: "aaaac",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "kidlover22",
        rating: 5,
        title: "Perfect fit for my daughter",
        body: "My daughter loves how comfy this top is. It’s lightweight and perfect for summer.",
        date: "2024-02-01T10:30:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "momof3",
        rating: 4,
        title: "Cute and comfy",
        body: "Adorable design and good quality. Slightly pricey but worth it.",
        date: "2024-02-02T11:15:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaad",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XXL"],
    date: 1716621345448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "johnnyB",
        rating: 5,
        title: "Great everyday tee",
        body: "Soft cotton and fits well. I wear it all the time!",
        date: "2024-02-03T09:00:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "alexman",
        rating: 4,
        title: "Comfortable and stylish",
        body: "Good quality and nice color. A bit tight around the arms but still good.",
        date: "2024-02-04T14:45:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaae",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716622345448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "fashionista",
        rating: 5,
        title: "Love the quality",
        body: "The fabric is super soft and the fit is perfect.",
        date: "2024-02-05T12:00:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "shopaholic",
        rating: 4,
        title: "Nice but color slightly off",
        body: "Overall great top, though the color was a shade darker than shown.",
        date: "2024-02-06T16:20:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaaf",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [p_img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716623423448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "sarahK",
        rating: 5,
        title: "My girl loves it",
        body: "Colorful and comfy, my daughter wears it every weekend.",
        date: "2024-02-07T09:30:00Z",
        verified_purchase: true,
      },
      {
        review_id: 2,
        username: "happyparent",
        rating: 4,
        title: "Good for the price",
        body: "Nice top, slightly loose around the neck but still good quality.",
        date: "2024-02-08T10:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaag",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716621542448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "businessguy",
        rating: 4,
        title: "Great office pants",
        body: "Fits well and looks professional. Material could be softer.",
        date: "2024-02-09T15:10:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaah",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [p_img8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716622345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "casualdude",
        rating: 3,
        title: "Decent shirt",
        body: "Not bad for the price, but I’ve had softer cotton tees.",
        date: "2024-02-10T11:00:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaaai",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img9],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621235448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "parentjoy",
        rating: 5,
        title: "My daughter’s favorite",
        body: "She adores the design and it feels great on her skin.",
        date: "2024-02-11T08:45:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaaj",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716622235448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "officewear",
        rating: 4,
        title: "Good fit",
        body: "Length and waist are perfect, nice option for work.",
        date: "2024-02-12T13:20:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaak",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 120,
    image: [p_img11],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716623345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "mikeT",
        rating: 5,
        title: "Excellent tee",
        body: "Soft, well-fitting and goes well with jeans.",
        date: "2024-02-13T09:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaal",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: [p_img12],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716624445448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "teeenthusiast",
        rating: 4,
        title: "Solid choice",
        body: "Nice color and stitching. A reliable basic tee.",
        date: "2024-02-14T16:10:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaam",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [p_img13],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716625545448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "bethd",
        rating: 5,
        title: "Lovely fabric",
        body: "Very light and breathable, perfect for warm weather.",
        date: "2024-02-15T14:40:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaan",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: [p_img14],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716626645448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "dadlife",
        rating: 4,
        title: "My son loves it",
        body: "Comfortable and durable so far.",
        date: "2024-02-16T10:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaao",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [p_img15],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716627745448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "officeguy",
        rating: 3,
        title: "Average trousers",
        body: "Not bad, but the fit could be better at the waist.",
        date: "2024-02-17T11:00:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaaap",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170,
    image: [p_img16],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716628845448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "momlife",
        rating: 5,
        title: "Adorable top",
        body: "My daughter loves the pattern. Good quality cotton.",
        date: "2024-02-18T14:20:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaaq",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: [p_img17],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716629945448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "formalwear",
        rating: 4,
        title: "Good quality",
        body: "Nice fabric and the cut is decent.",
        date: "2024-02-19T09:45:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaar",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180,
    image: [p_img18],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716631045448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "kidstyle",
        rating: 4,
        title: "Fun and vibrant",
        body: "My son loves the bright color and the fabric feels good.",
        date: "2024-02-20T10:10:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaas",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: [p_img19],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716632145448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "happyuncle",
        rating: 5,
        title: "Great gift",
        body: "My nephew was thrilled with this. Fits him nicely.",
        date: "2024-02-21T13:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaat",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img20],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716633245448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "fashionqueen",
        rating: 4,
        title: "Stylish and comfy",
        body: "The belt adds a nice touch. Light and flowy fabric.",
        date: "2024-02-22T15:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaau",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170,
    image: [p_img21],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "cozygal",
        rating: 5,
        title: "Warm and cozy",
        body: "Perfect for cool evenings. Fits true to size.",
        date: "2024-02-23T17:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaav",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img22],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716635445448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "paula_s",
        rating: 4,
        title: "Nice fit",
        body: "The waist belt is adjustable and the pants are very comfortable.",
        date: "2024-02-24T19:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaaw",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180,
    image: [p_img23],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716636545448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "coolkid",
        rating: 5,
        title: "Great for playtime",
        body: "Comfortable and easy to wash.",
        date: "2024-02-25T09:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaax",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [p_img24],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716637645448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "kidfashion",
        rating: 4,
        title: "Good quality",
        body: "My nephew loves it. Color stays after multiple washes.",
        date: "2024-02-26T11:15:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaay",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img25],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716638745448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "gratefulmom",
        rating: 5,
        title: "Daughter-approved",
        body: "She loves wearing it to school. Soft and does not shrink.",
        date: "2024-02-27T10:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaaz",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img26],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "winterready",
        rating: 4,
        title: "Cozy and warm",
        body: "Nice jacket for mild winters. Zipper is sturdy.",
        date: "2024-02-28T14:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaaba",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img27],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716640945448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "playfulmom",
        rating: 5,
        title: "Perfect for playtime",
        body: "My daughter can run around in this without any discomfort.",
        date: "2024-03-01T10:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabb",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230,
    image: [p_img28],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716642045448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "denimguy",
        rating: 4,
        title: "Stylish jacket",
        body: "Great layering piece, slightly stiff at first but breaks in nicely.",
        date: "2024-03-02T08:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabc",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [p_img29],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716643145448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "everydaywear",
        rating: 5,
        title: "Daily go-to top",
        body: "Matches with many outfits, very versatile.",
        date: "2024-03-03T12:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabd",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240,
    image: [p_img30],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716644245448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "kidstyle2",
        rating: 3,
        title: "A bit expensive",
        body: "Quality is fine but the price is high for a kid’s top.",
        date: "2024-03-04T16:20:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaabe",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img31],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "runnerguy",
        rating: 4,
        title: "Good for workouts",
        body: "Breathable and holds up well during runs.",
        date: "2024-03-05T14:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabf",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250,
    image: [p_img32],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716646445448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "casualbuyer",
        rating: 5,
        title: "Feels premium",
        body: "Very soft and doesn’t fade after wash.",
        date: "2024-03-06T09:40:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabg",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230,
    image: [p_img33],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716647545448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "kidclothesfan",
        rating: 4,
        title: "Cute design",
        body: "Pattern is adorable and quality is good.",
        date: "2024-03-07T11:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabh",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260,
    image: [p_img34],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716648645448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "stylediva",
        rating: 5,
        title: "Chic and comfortable",
        body: "Worth the price, fits perfectly and goes with many outfits.",
        date: "2024-03-08T10:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabi",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240,
    image: [p_img35],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716649745448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "winterlover",
        rating: 4,
        title: "Pretty good",
        body: "Warm enough for mild winters, zipper could be smoother.",
        date: "2024-03-09T13:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabj",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270,
    image: [p_img36],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716650845448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "coldclimate",
        rating: 5,
        title: "Perfect for winter",
        body: "Very cozy and keeps me warm. Looks stylish too!",
        date: "2024-03-10T08:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabk",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250,
    image: [p_img37],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716651945448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "womensfashion",
        rating: 4,
        title: "Lovely top",
        body: "Good quality and fits well. Slightly expensive though.",
        date: "2024-03-11T09:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabl",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280,
    image: [p_img38],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716653045448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "premiumbuyer",
        rating: 5,
        title: "High quality",
        body: "Extremely soft and luxurious feel. Love it!",
        date: "2024-03-12T11:40:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabm",
    name: "Men Printed Plain Cotton Shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260,
    image: [p_img39],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716654145448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "shirtcollector",
        rating: 4,
        title: "Nice print",
        body: "Unique design and good fit. Fabric is decent.",
        date: "2024-03-13T14:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabn",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290,
    image: [p_img40],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716655245448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "denimlover",
        rating: 5,
        title: "Great jacket",
        body: "Perfect thickness and great look.",
        date: "2024-03-14T10:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabo",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270,
    image: [p_img41],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716656345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "casualstyle",
        rating: 4,
        title: "Comfortable tee",
        body: "Nice everyday tee, a bit pricey but feels good.",
        date: "2024-03-15T08:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabp",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300,
    image: [p_img42],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716657445448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "unclepaul",
        rating: 3,
        title: "A bit pricey for kids",
        body: "Quality is good but price seems high.",
        date: "2024-03-16T10:45:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaabq",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280,
    image: [p_img43],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716658545448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "kidsfashion",
        rating: 4,
        title: "Good fit",
        body: "Nice trousers, my kid looks sharp in these.",
        date: "2024-03-17T15:20:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabr",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310,
    image: [p_img44],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716659645448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "winterchic",
        rating: 5,
        title: "Elegant and warm",
        body: "Very satisfied with the quality and style.",
        date: "2024-03-18T09:10:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabs",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290,
    image: [p_img45],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716660745448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "denimfan",
        rating: 4,
        title: "Good purchase",
        body: "Nice jacket, just a bit stiff at first.",
        date: "2024-03-19T12:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabt",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320,
    image: [p_img46],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716661845448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "styleman",
        rating: 5,
        title: "High quality denim",
        body: "Feels premium and looks great with everything.",
        date: "2024-03-20T14:15:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabu",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300,
    image: [p_img47],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716662945448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "carefulshopper",
        rating: 4,
        title: "Well-made trousers",
        body: "Quality seems good, hope they last a while.",
        date: "2024-03-21T09:00:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabv",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 330,
    image: [p_img48],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716664045448,
    bestseller: true,
    reviews: [
      {
        review_id: 1,
        username: "jacketlover",
        rating: 5,
        title: "Great look",
        body: "Matches well with casual and semi-formal outfits.",
        date: "2024-03-22T10:20:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabw",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310,
    image: [p_img49],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716665145448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "parentspick",
        rating: 4,
        title: "Looks smart",
        body: "Good for family events, fits nicely.",
        date: "2024-03-23T11:45:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabx",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 340,
    image: [p_img50],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716666245448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "momknowsbest",
        rating: 3,
        title: "Too pricey",
        body: "Quality is fine, but I expected more for this price.",
        date: "2024-03-24T14:00:00Z",
        verified_purchase: false,
      },
    ],
  },
  {
    _id: "aaaby",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320,
    image: [p_img51],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716667345448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "cozychic",
        rating: 5,
        title: "Warm and fashionable",
        body: "Feels great and looks amazing!",
        date: "2024-03-25T09:30:00Z",
        verified_purchase: true,
      },
    ],
  },
  {
    _id: "aaabz",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 350,
    image: [p_img52],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716668445448,
    bestseller: false,
    reviews: [
      {
        review_id: 1,
        username: "denimfan2",
        rating: 5,
        title: "Outstanding quality",
        body: "Absolutely love this jacket, worth the investment.",
        date: "2024-03-26T15:10:00Z",
        verified_purchase: true,
      },
    ],
  },
];
