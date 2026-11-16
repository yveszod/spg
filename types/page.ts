export type PageData = {
  business: {
    name: string;
    category: string;
    description: string;
  };

  hero: {
    title: string;
    subtitle: string;
    imageUrl?: string;
  };

  services: {
    name: string;
    description: string;
    price?: string;
  }[];

  access: {
    address: string;
    nearestStation?: string;
  };

  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
};

export type TemplateType = "restaurant" | "salon";