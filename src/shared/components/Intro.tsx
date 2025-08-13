const Intro = () => {
  return (
    <>
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-6xl font-semibold text-stone-700">Hi, I'm Varsha!</h1>
        <p className="text-stone-700">
          Senior Frontend Engineer at Razorpay, based in Bangalore, India.
        </p>

        <article className="text-stone-700 flex flex-col gap-3">
          <p>
            I build performant, scalable web applications using JavaScript, React, and Angular —
            writing code that goes beyond the UI. I enjoy solving complex problems, architecting
            maintainable frontends, and obsessing over the details that make apps fast, accessible,
            and reliable.
          </p>

          <p>
            Lately, I've been exploring machine learning and generative AI which I can leverage as
            powerful tools across development workflows, from documentation to testing and beyond.
          </p>

          <p>
            When I'm not coding, I'm probably making something cutsie with polymer clay, crocheting,
            or spending time with my cats!
          </p>
        </article>
      </section>
    </>
  );
};

export default Intro;
