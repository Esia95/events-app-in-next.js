import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatEvents = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            legacyBehavior
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <a className="card">
              <Image src={ev.image} width={300} height={300} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvents;
