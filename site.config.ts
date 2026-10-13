import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Groomer Ella",
  tagline: "Dog grooming in Toronto with Groomer Ella Lee.",
  category: "Dog grooming",
  schemaType: "LocalBusiness",
  area: "Toronto, ON",
  siteUrl: "https://groomer-ella.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#B76E79" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Dog grooming in Toronto",
    headline: "Fresh grooms for happy pups",
    subhead: "Gentle dog grooming with Groomer Ella Lee. Send an Instagram DM to ask about booking for your pup.",
    images: [
      { src: "/images/post-1.jpg", alt: "Freshly groomed black toy poodle with a bow" },
      { src: "/images/post-5.jpg", alt: "Teddy bear cut apricot poodle" },
      { src: "/images/post-2.jpg", alt: "Groomed dog with ribbon" },
    ],
    secondaryCta: { label: "See the gallery", href: "#gallery" },
  },

  highlights: [
    "Dog grooming in Toronto",
    "Groomer Ella Lee",
    "Book by Instagram DM",
    "Fresh cuts and teddy bear styles",
  ],

  about: {
    title: "Meet Groomer Ella",
    body: [
      "Groomer Ella is Ella Lee, offering dog grooming in Toronto. From fluffy teddy bear cuts to tidy everyday trims, every pup leaves looking fresh and feeling comfortable.",
      "Send a message on Instagram to ask about availability for your dog.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Freshly groomed pup" },
  },

  menu: {
    label: "Services",
    title: "Grooming",
    intro: "Full dog grooming. Message us for details for your breed and coat.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing for your dog's breed, size, and coat.",
    groups: [
      {
        title: "For your pup",
        items: [
          { name: "Dog grooming", description: "Full groom tailored to your dog. Ask about teddy bear and breed styles." },
        ],
      },
    ],
  },

  gallery: {
    title: "Happy pups",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Black toy poodle fresh groom with bow", caption: "Fresh groom", href: "https://www.instagram.com/p/DecjidUlNEN/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Apricot poodle teddy bear cut", caption: "Fresh groom, happy pup", href: "https://www.instagram.com/p/Dat-StYjPW_/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Groomed dog with ribbon", caption: "Styled and cute", href: "https://www.instagram.com/p/DcL5FpxEbFB/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1350, alt: "Groomed puppy close up", caption: "Soft and fluffy", href: "https://www.instagram.com/p/Db3YRI4Ea4S/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "Groomed dog portrait", caption: "Ready for cuddles", href: "https://www.instagram.com/p/DayZlh9lLTc/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "Fresh cut dog", caption: "Neat and tidy", href: "https://www.instagram.com/p/DaYta6XFDN3/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1350, alt: "Groomed pup smiling", caption: "Happy after groom", href: "https://www.instagram.com/p/DaHJ6iAFOoe/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Cute groomed dog", caption: "So cute", href: "https://www.instagram.com/p/DagjLwIhmYD/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "groomer_ella",
    embeds: [
      "https://www.instagram.com/p/DecjidUlNEN/",
      "https://www.instagram.com/p/Dat-StYjPW_/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book in a quick DM",
    intro: "Bookings are arranged through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Groomer Ella! I would like to book a dog groom.\nPreferred date:\nDog breed and size:\nCoat or style notes:\n",
    links: [],
    note: "Grooming in Toronto. Message to confirm availability.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your preferred date, your dog's breed and size, and any style notes." },
    { q: "Where do you groom?", a: "Grooming is offered in Toronto. Details are confirmed when you book." },
    { q: "Who is the groomer?", a: "Groomer Ella Lee." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto, Ontario",
    socials: [],
  },

  seo: {
    title: "Groomer Ella | Dog grooming in Toronto",
    description: "Dog grooming in Toronto with Groomer Ella Lee. Fresh cuts and teddy bear styles. Book by Instagram DM.",
    keywords: ["dog groomer Toronto", "pet grooming Toronto", "poodle groom Toronto", "Groomer Ella Lee"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
