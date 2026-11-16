import type { PageData } from "@/types/page";

type Props = {
  data: PageData;
};

export default function SalonTemplate({ data }: Props) {
  return (
    <main>
      <header>
        <p>{data.business.category}</p>
        <h1>{data.business.name}</h1>
        <h2>{data.hero.title}</h2>
        <p>{data.hero.subtitle}</p>
      </header>

      <section>
        <h2>Services</h2>

        {data.services.map((service) => (
          <article key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.price && <p>{service.price}</p>}
          </article>
        ))}
      </section>

      <section>
        <h2>About us</h2>
        <p>{data.business.description}</p>
      </section>

      <section>
        <h2>Access</h2>
        <p>{data.access.address}</p>
        {data.access.nearestStation && (
          <p>{data.access.nearestStation}</p>
        )}
      </section>

      <section>
        <h2>Contact</h2>
        {data.contact.phone && <p>{data.contact.phone}</p>}
        {data.contact.email && <p>{data.contact.email}</p>}
      </section>
    </main>
  );
}