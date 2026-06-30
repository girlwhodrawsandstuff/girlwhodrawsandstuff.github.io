const Intro = () => {
  return (
    <>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-6xl font-semibold text-stone-700">Hi, I'm Varsha!</h1>
        <p className="text-stone-700">
          Senior Software Engineer at SpotDraft, based in Bangalore, India.
        </p>

        <article className="text-stone-700 flex flex-col gap-3">
          <p>
            I build performant, scalable web applications using JavaScript, React, and Angular. I
            enjoy solving complex problems, architecting maintainable frontends, and obsessing over
            the details that make apps fast, accessible, and reliable, using AI as part of my
            day-to-day workflow without losing sight of the judgment calls that still need to be
            mine.
          </p>

          <p>
            When I'm not coding, I'm probably making something cute with polymer clay, crocheting,
            or spending time with my cats!
          </p>
        </article>
      </section>
    </>
  );
};

export default Intro;
