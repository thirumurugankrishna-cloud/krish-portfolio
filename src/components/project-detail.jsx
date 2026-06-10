import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const MetaItem = ({ label, children }) => (
  <div className=" flex flex-col gap-2">
    <span className=" text-xs 2xl:text-sm uppercase tracking-[1.5px] text-teritary-foreground">
      {label}
    </span>
    <span className=" text-base 2xl:text-lg text-foreground font-medium">
      {children}
    </span>
  </div>
);

const ImageBlock = ({ images = [], layout = "full" }) => {
  if (!images.length) return null;

  const gridClass =
    layout === "grid-3"
      ? "grid grid-cols-1 md:grid-cols-3 gap-6"
      : layout === "grid-2"
      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
      : "flex flex-col gap-6";

  return (
    <div className={`${gridClass} mt-10`}>
      {images.map((img, i) => (
        <figure key={i} className=" flex flex-col gap-3">
          <div className=" relative w-full overflow-hidden rounded-2xl border border-border bg-[#101010]">
            <Image
              src={img.src}
              alt={img.alt || img.caption || "project image"}
              width={1600}
              height={1000}
              className=" w-full h-auto object-cover"
            />
          </div>
          {img.caption ? (
            <figcaption className=" text-sm 2xl:text-base text-teritary-foreground">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
};

const Bullets = ({ bullets = [] }) => {
  if (!bullets.length) return null;
  const hasTitles = bullets.some((b) => b.title);

  if (hasTitles) {
    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-8">
        {bullets.map((b, i) => (
          <div key={i} className=" flex flex-col gap-2 border-l border-border pl-5">
            {b.title ? (
              <h4 className=" text-lg 2xl:text-xl font-medium text-foreground">
                {b.title}
              </h4>
            ) : null}
            <p className=" text-base 2xl:text-lg text-secondary-foreground leading-relaxed">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className=" mt-6 space-y-3">
      {bullets.map((b, i) => (
        <li
          key={i}
          className=" flex gap-3 text-base 2xl:text-lg text-secondary-foreground leading-relaxed"
        >
          <span className=" mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
  );
};

const Section = ({ section }) => (
  <section className=" w-full py-10 2xl:py-14 border-t border-border first:border-t-0">
    {section.kicker ? (
      <span className=" text-sm 2xl:text-base uppercase tracking-[2px] text-teritary-foreground">
        {section.kicker}
      </span>
    ) : null}

    {section.title ? (
      <h2 className=" mt-3 text-3xl 2xl:text-[44px] font-medium tracking-tight leading-tight max-w-3xl">
        {section.title}
      </h2>
    ) : null}

    {section.body?.length ? (
      <div className=" mt-6 space-y-5 max-w-3xl">
        {section.body.map((p, i) => (
          <p
            key={i}
            className=" text-base 2xl:text-xl text-secondary-foreground leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    ) : null}

    <Bullets bullets={section.bullets} />
    <ImageBlock images={section.images} layout={section.layout} />
  </section>
);

const ProjectDetail = ({ project, nextProject }) => {
  const { title, subtitle, cover, meta, tags = [], sections = [] } = project;

  return (
    <main className=" w-full px-6 md:px-[80px] 2xl:px-[120px] pb-24">
      {/* Back link */}
      <Link
        href="/#work"
        className=" group inline-flex items-center gap-2 text-sm 2xl:text-base text-secondary-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className=" h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to work
      </Link>

      {/* Hero */}
      <header className=" mt-10 2xl:mt-16">
        {tags.length ? (
          <p className=" text-sm 2xl:text-base text-teritary-foreground">
            {tags.join("  ")}
          </p>
        ) : null}

        <h1 className=" mt-5 text-[44px] md:text-[64px] 2xl:text-[84px] font-medium leading-[1.05] tracking-tight max-w-5xl">
          {title}
        </h1>

        {subtitle ? (
          <p className=" mt-6 text-lg md:text-xl 2xl:text-2xl text-secondary-foreground max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        ) : null}

        {/* Meta */}
        <div className=" mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-8">
          {meta.role ? <MetaItem label="Role">{meta.role}</MetaItem> : null}
          {meta.duration ? (
            <MetaItem label="Duration">{meta.duration}</MetaItem>
          ) : null}
          {meta.tools ? (
            <MetaItem label="Tools">{meta.tools.join(", ")}</MetaItem>
          ) : null}
          {meta.website ? (
            <MetaItem label="Website">
              <a
                href={meta.website.href}
                target="_blank"
                rel="noreferrer"
                className=" inline-flex items-center gap-1 nav-link relative w-fit"
              >
                {meta.website.label}
                <ArrowUpRight className=" h-4 w-4" />
              </a>
            </MetaItem>
          ) : meta.team ? (
            <MetaItem label="Team">{meta.team}</MetaItem>
          ) : null}
        </div>
      </header>

      {/* Cover image */}
      {cover ? (
        <div className=" mt-12 relative w-full overflow-hidden rounded-3xl border border-border bg-[#101010]">
          <Image
            src={cover}
            alt={`${title} cover`}
            width={2000}
            height={1100}
            priority
            className=" w-full h-auto max-h-[80vh] object-cover"
          />
        </div>
      ) : null}

      {/* Sections */}
      <div className=" mt-16 2xl:mt-20">
        {sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Next project */}
      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className=" group mt-20 flex flex-col gap-3 border-t border-border pt-12"
        >
          <span className=" text-sm 2xl:text-base uppercase tracking-[2px] text-teritary-foreground">
            Next project
          </span>
          <span className=" inline-flex items-center gap-3 text-3xl 2xl:text-5xl font-medium tracking-tight">
            {nextProject.title}
            <ArrowUpRight className=" h-7 w-7 2xl:h-10 2xl:w-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Link>
      ) : null}
    </main>
  );
};

export default ProjectDetail;
