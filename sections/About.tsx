import Image from "next/image"
export default function About(){
  return (
    <section
      id={"about"}
      className={"p-4 flex flex-col"}
    >
      <h1 className={"text-5xl font-bold font-outfit mt-4 mb-0 p-4"}>About & Education</h1>
      <p className={"font-geist text-text mt-0 mb-4 p-4 pt-0"}>
        Combining high-standard academic theory with active deployment practice
      </p>

      <p className={"font-geist text-lg text-text px-4"}>
        I am a dedicated software builder and problem-solver. Having completed my degree at the Polytechnic University of Bragança (IPB), I have consolidated deep expertise in core system algorithms, data structures, network paradigms, and software architectural modeling.
      </p>
      <br/>
      <p className={"font-geist text-lg text-text px-4"}>
        My engineering approach prioritizes clean architecture, self-documenting code systems, and rigorous benchmarking. I thrive in challenging environments that bridge front-end clarity with scalable distributed back-ends.
      </p>

    </section>
  )
}