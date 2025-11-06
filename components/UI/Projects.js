import Image from "next/image";

export default function Projects({ name, img, alt, type, link, year, tools }) {
  return (
    <article itemScope itemType="https://schema.org/CreativeWork">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={link}
        className="h-max bg-gray-400 img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
        aria-label={`View ${name} project`}
      >
        <Image
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="900"
          height="700"
          loading="lazy"
        />
      </a>
      <div className="mt-4">
        <div className="flex space-x-2 mb-3" role="list">
            <span className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl" role="listitem" itemProp="dateCreated">{year}</span>
            <span className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl" role="listitem" itemProp="keywords">{tools}</span>
        </div>
        <div className="2xl:space-y-3">
        <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200" itemProp="name">
          {name}
        </h3>
        <p className="text-body-2 2xl:text-4xl font-light text-primary-400" itemProp="description">{type}</p>
        </div>
      </div>
    </article>
  );
}
