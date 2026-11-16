import type { PageData } from "@/types/page";
import RestaurantTemplate from "@/components/templates/RestaurantTemplate";

const pageData: PageData = {
  business: {
    name: "大阪食堂",
    category: "居酒屋",
    description: "大阪の地元料理とお酒を楽しめる小さな居酒屋です。",
  },

  hero: {
    title: "大阪の味を、ゆっくり楽しむ。",
    subtitle: "新世界で20年。地元の料理とお酒をご用意しています。",
  },

  services: [
    {
      name: "たこ焼き",
      description: "外はカリッと、中はとろっと。",
      price: "¥600",
    },
    {
      name: "串カツ盛り合わせ",
      description: "大阪名物の串カツを5本セットで。",
      price: "¥1,200",
    },
  ],

  access: {
    address: "大阪市浪速区恵美須東1-1-1",
    nearestStation: "恵美須町駅 徒歩3分",
  },

  contact: {
    phone: "06-1234-5678",
  },
};

export default function Home() {
  return <RestaurantTemplate data={pageData} />;
}