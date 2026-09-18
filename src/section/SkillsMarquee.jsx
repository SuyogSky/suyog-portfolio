import React from 'react'

function SkillsMarquee() {
  const skills = [
    "React.js",
    "Angular",
    "Typescript",
    "Tailwind CSS",
    "Next.js",
    "GSAP",
    "REST APIs",
    "State Management",
    "Pixel-Perfect UI",
    "Figma"
  ]

  return (
    <section className="w-full h-40 bg-paper-3 flex items-center justify-center overflow-hidden select-none">
      <div className="marquee-wrapper relative w-full -rotate-1 py-4 bg-paper-soft border-y border-ink-faint flex items-center">
        <span className="absolute -top-3 left-20 -rotate-13 flex w-17.5 h-5 bg-yellow-soft border-y border-yellow-deep opacity-80"></span>

        <span className="absolute -top-3 right-20 rotate-13 flex w-17.5 h-5 bg-yellow-soft border-y border-yellow-deep opacity-80"></span>

        <div className="animate-marquee flex shrink-0 items-center justify-around gap-10 min-w-full">
          {[...skills, ...skills].map((skill, index) => (
            <div className="flex items-center gap-10">
              <p className={`font-hand text-2xl font-black text-nowrap ${index % 2 === 0 ? 'text-teal' : 'text-coral'}`}>{skill}</p>
              <span className="text-3xl text-pencil">✦</span>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center justify-around gap-10 min-w-full">
          {[...skills, ...skills].map((skill, index) => (
            <div className="flex items-center gap-10">
              <p className={`font-hand text-2xl font-black text-nowrap ${index % 2 === 0 ? 'text-teal' : 'text-coral'}`}>{skill}</p>
              <span className="text-3xl text-pencil">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsMarquee