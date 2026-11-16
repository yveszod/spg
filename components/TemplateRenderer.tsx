import type { PageData, TemplateType } from "@/types/page";

import RestaurantTemplate from "@/components/templates/RestaurantTemplate";
import SalonTemplate from "@/components/templates/SalonTemplate";

type Props = {
  template: TemplateType;
  data: PageData;
};

export default function TemplateRenderer({ template, data }: Props) {
  switch (template) {
    case "restaurant":
      return <RestaurantTemplate data={data} />;

    case "salon":
      return <SalonTemplate data={data} />;

    default:
      return <div>Template not found</div>;
  }
}