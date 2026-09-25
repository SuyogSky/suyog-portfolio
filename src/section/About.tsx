
function About() {
    return (
        <section className="w-full
            border-b
            [border-image:repeating-linear-gradient(to_right,var(--color-line-soft)_0,var(--color-line-soft)_10px,transparent_10px,transparent_18px)_1]">
            <div className="w-full flex items-start gap-30 max-xl:gap-20 max-md:flex-col-reverse max-md:gap-10 max-w-7xl mx-auto px-12 max-md:px-8 max-sm:px-4 pt-30 max-md:pt-20">
                <div className="flex flex-col gap-5 sticky max-md:static max-md:mx-auto top-30 max-md:top-20">
                    <div className="min-w-75 max-w-100 w-full bg-paper-2 px-6 py-6.5 border-t-4 border-teal shadow-[4px_6px_0_rgba(28,27,25,0.2)] sm:-rotate-2">
                        <div className="w-full flex items-center justify-between">
                            <span className="font-mono text-xs tracking-widest text-pencil uppercase">Character Sheet</span>
                            <span className="bg-coral text-white px-2.5 py-0.5 rounded-xs font-bold text-xs uppercase">Lvl 03</span>
                        </div>
                        <div className="font-display text-2xl leading-normal mt-3">Suyog Shakya</div>
                        <div className="font-hand text-xl text-teal-deep mt-0.5 leading-normal">Frontend Crafter <span className="text-pencil text-base">/ Full-Stack Dev</span></div>
                        <dl className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center justify-between text-sm border-b border-dashed border-line-soft py-1.5">
                                <dt className="text-pencil font-bold">Stack</dt>
                                <dd className="text-right text-ink-soft">React · Angular · Node · Django</dd>
                            </div>
                            <div className="flex items-center justify-between text-sm border-b border-dashed border-line-soft py-1.5">
                                <dt className="text-pencil font-bold">Class</dt>
                                <dd className="text-right text-ink-soft">Full-Stack Developer</dd>
                            </div>
                            <div className="flex items-center justify-between text-sm border-b border-dashed border-line-soft py-1.5">
                                <dt className="text-pencil font-bold">Exp</dt>
                                <dd className="text-right text-ink-soft">3+ Years</dd>
                            </div>
                        </dl>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="font-bold text-[10px] font-mono tracking-[0.04em] px-2.5 py-1 border border-ink">Pixel-Level Perfection</span>
                            <span className="font-bold text-[10px] font-mono tracking-[0.04em] px-2.5 py-1 border border-ink">Ships on Time</span>
                            <span className="font-bold text-[10px] font-mono tracking-[0.04em] px-2.5 py-1 border border-ink">Coffee Synergy</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mt-5">
                        <a href="" className="relative bg-paper-soft px-3 py-2 border-2 border-line rounded-sm shadow-[3px_3px_0_rgba(28,27,25,0.2)] flex items-center justify-center gap-2 cursor-pointer lowercase font-mono text-xs font-bold">
                            Github
                        </a>
                        <a href="" className="relative bg-paper-soft px-3 py-2 border-2 border-line rounded-sm shadow-[3px_3px_0_rgba(28,27,25,0.2)] flex items-center justify-center gap-2 cursor-pointer lowercase font-mono text-xs font-bold">
                            LinkedIn
                        </a>
                        <a href="" className="relative bg-paper-soft px-3 py-2 border-2 border-line rounded-sm shadow-[3px_3px_0_rgba(28,27,25,0.2)] flex items-center justify-center gap-2 cursor-pointer lowercase font-mono text-xs font-bold">
                            Say Hi!
                        </a>
                        <a href="" className="relative bg-yellow-soft px-3 py-2 border-2 border-dashed border-line rounded-sm shadow-[3px_3px_0_rgba(28,27,25,0.2)] flex items-center justify-center gap-2 cursor-pointer lowercase font-mono text-xs font-bold">
                            cv / resume
                        </a>
                    </div>
                </div>

                <div className="h-full">
                    <div className="font-mono text-xs max-sm:text-[10px] uppercase tracking-[0.3em] text-pencil flex items-center justify-start gap-3">
                        <span className="text-coral">[</span>
                        About & Education // Chapter 03
                        <span className="text-coral">]</span>
                    </div>
                    <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-none font-extrabold my-5">Bridging Logic and Illustration.</h2>

                    <div className="flex items-start gap-10 mt-10 max-lg:flex-col-reverse max-md:flex-row max-sm:flex-col">
                        <div className="w-full max-w-50 max-lg:max-w-60 max-lg:mx-auto max-lg:mb-5 max-md:max-w-45 max-sm:mb-0 max-sm:max-w-60 shrink-0 bg-paper-2 px-3.5 pt-3.5 pb-10 -rotate-3 shadow-[6px_8px_0_rgba(28,27,25,0.2)]">
                            <div className="w-full aspect-4/5 bg-paper-3"></div>
                            <div className="font-hand text-lg text-center mt-2.5 text-ink-soft leading-normal">fuel: dark roast & typescript ☕</div>
                        </div>
                        <div className="font-body text-base leading-relaxed text-ink-soft max-w-xl">
                            <p className="mb-4">I'm a frontend-leaning full-stack developer with 3+ years of experience across React and Angular. I sit at the intersection of engineering and visual craft — clean architecture under the hood, pixel-perfect interfaces on the surface.</p>
                            <p className="">When I'm not shipping features, you'll find me sketching, gaming, or obsessing over UI micro-interactions like the ones on this page.</p>
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <h4 className="font-mono font-normal text-xs tracking-widest leading-[1.6] text-pencil pb-2 mb-1.5 border-b-2 border-line uppercase">Education <b className="font-bold lowercase text-coral">// Academic Record</b></h4>
                        
                        <div className="flex items-start gap-8 py-5 border-b border-dashed border-ink/20">
                            <div className="">
                                <span className="inline-block font-mono text-xs tracking-[0.08em] text-pencil uppercase">Bachelor's // 2022 - 2024</span>
                                <h6 className="font-display font-normal text-xl mt-2">BSc (Hons) Computing</h6>
                                <div className="font-hand text-lg text-teal-deep mt-2">Itahari International College - London Metropolitan University</div>
                                <p className="text-ink-soft text-sm mt-3">Graduated with a BSc (Hons) in Computing, awarded the AAA Scholarship — a full academic scholarship — for all three years, and placed 1st at the IIC Quest Hackathon in 2024 against 20+ teams.</p>
                                <div className="flex items-center flex-wrap gap-2 mt-3">
                                    <span className="inline-block font-bold font-mono tracking-[0.04em] px-2 py-1 text-[10px] border border-ink text-ink-soft">AAA Scholarship</span>
                                    <span className="inline-block font-bold font-mono tracking-[0.04em] px-2 py-1 text-[10px] border border-ink text-ink-soft">1st - IIC Quest Hackathon</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-8 py-5 border-b border-dashed border-ink/20">
                            <div className="">
                                <span className="inline-block font-mono text-xs tracking-[0.08em] text-pencil uppercase">+2 Higher Secondary, Science</span>
                                <h6 className="font-display font-normal text-xl mt-2">Dharan Adarsha</h6>
                                <p className="text-ink-soft text-sm mt-3">Took the Science stream through +2 — physics, chemistry and maths, which is where the analytical habits I now lean on for debugging and system design really started to form.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-8 py-5">
                            <div className="">
                                <span className="inline-block font-mono text-xs tracking-[0.08em] text-pencil uppercase">SEE // Secondary Education</span>
                                <h6 className="font-display font-normal text-xl mt-2">Sunakhari Academy</h6>
                                <p className="text-ink-soft text-sm mt-3">Completed my SEE (10th grade) here — maths, science and English formed the first building blocks of everything that came after.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 py-16 pt-30 max-md:pt-20 text-center">
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="font-display text-[clamp(2.2rem,5vw,3.4rem)] text-coral block leading-none">3</span>
                    <span className="font-hand text-lg text-pencil block">years experience</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="font-display text-[clamp(2.2rem,5vw,3.4rem)] text-coral block leading-none">200</span>
                    <span className="font-hand text-lg text-pencil block">students mentored</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="font-display text-[clamp(2.2rem,5vw,3.4rem)] text-coral block leading-none">11</span>
                    <span className="font-hand text-lg text-pencil block">cities demoed in</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="font-display text-[clamp(2.2rem,5vw,3.4rem)] text-coral block leading-none">6</span>
                    <span className="font-hand text-lg text-pencil block">major projects shipped</span>
                </div>
            </div>
        </section>
    )
}

export default About