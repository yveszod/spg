import type { PageData } from "@/types/page";

type Props = {
  data: PageData;
};

export default function RestaurantTemplate({ data }: Props) {
  return (
    <main>
      <header>
        <h1>{data.business.name}</h1>
        <p>{data.business.description}</p>
      </header>

      <section>
        <h2>{data.hero.title}</h2>
        <p>{data.hero.subtitle}</p>
      </section>

      <section>
        <h2>メニュー</h2>

        {data.services.map((service) => (
          <article key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.price && <p>{service.price}</p>}
          </article>
        ))}
      </section>

      <section>
        <h2>アクセス</h2>
        <p>{data.access.address}</p>
        {data.access.nearestStation && (
          <p>{data.access.nearestStation}</p>
        )}
      </section>

      <section>
        <h2>お問い合わせ</h2>
        {data.contact.phone && <p>{data.contact.phone}</p>}
        {data.contact.email && <p>{data.contact.email}</p>}
      </section>
    </main>
  );
}