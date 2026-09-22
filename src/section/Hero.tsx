import { useState } from 'react'
import HeroImg from '../assets/hero.png'

function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section id="hero-section" className="w-full h-full min-h-screen flex flex-col px-12 max-md:px-8 max-sm:px-4 bg-paper
            bg-size-[32px_32px] 
            bg-[linear-gradient(to_right,rgba(28,27,25,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.05)_1px,transparent_1px)] 
            dark:bg-night-paper dark:bg-[linear-gradient(to_right,rgba(245,239,226,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,226,0.05)_1px,transparent_1px)]
            border-b
            [border-image:repeating-linear-gradient(to_right,var(--color-line-soft)_0,var(--color-line-soft)_10px,transparent_10px,transparent_18px)_1]"
        >
            <header className="w-full max-w-7xl h-20 max-sm:h-16 mx-auto flex items-center justify-between border-b sm:border-none border-dashed border-line-soft">
                <div className="font-display text-xl uppercase">S<span className="text-teal">.</span>S</div>

                <div className="font-mono text-[10px] max-sm:text-[8px] uppercase tracking-[0.3em] text-pencil flex items-center justify-center gap-3">
                    <span className="text-coral">[</span>
                    Personal Portfolio / 01
                    <span className="text-coral">]</span>
                </div>

                <span className="hidden md:inline-block w-8 sm:w-10 md:w-12"></span>

                <button className="flex md:hidden relative z-20 size-10 bg-paper-soft border-2 border-line rounded-md p-1.5 items-start justify-center flex-col gap-1.25 cursor-pointer shadow-[3px_3px_0px_rgba(28,27,25,0.18)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(28,27,25,0.18)] transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-2.5 bg-yellow/50 backdrop-blur-[0.5px] border-y border-line-soft rotate-7"></span>
                    <span className={`inline-block w-full h-0.5 rounded-lg transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2 bg-red-500' : 'bg-ink'}`}></span>
                    <span className={`inline-block w-4 h-0.5 rounded-lg bg-teal-deep transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'}`}></span>
                    <span className={`inline-block w-full h-0.5 rounded-lg bg-ink transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-red-500' : 'bg-ink'}`}></span>
                </button>
            </header>

            <main className="relative w-full max-w-375 h-full mx-auto flex-1">
                <div className="relative w-full pt-8 flex items-start justify-between">
                    <div>
                        <p className="font-hand text-2xl font-bold sm:text-3xl">Hi, I'm</p>
                        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.3em] text-pencil">Software Developer</p>
                    </div>

                    <div className="absolute top-0 right-0 p-4 max-md:p-3 flex flex-col items-center justify-center gap-2 max-md:gap-1 rotate-6 bg-yellow border-2 border-line rounded-sm shadow-[10px_12px_0_rgba(28,27,25,0.10)]
                        max-md:top-10">
                        <p className="font-hand text-xl max-md:text-lg font-semibold leading-tight">Open to Work!</p>
                        <span className="font-mono text-[10px] max-md:text-[8px] uppercase text-pencil-dark">EST. 2026</span>
                    </div>
                </div>

                <div className="relative pt-10 max-lg:pt-7">
                    <h1 className="md:absolute font-display text-[clamp(4.5rem,14vw,13rem)] leading-[0.7] max-sm:leading-[0.8] tracking-[-0.07em] uppercase 
                        text-ink dark:text-night-ink w-full
                        flex items-center justify-center max-sm:flex-col gap-x-[2vw]"
                    >
                        <span>Suyog</span>
                        <span className="translate-y-15 max-md:translate-0 text-transparent [-webkit-text-stroke:2px_var(--color-pencil)] dark:[-webkit-text-stroke:2px_var(--color-night-pencil)]">
                            Shakya
                        </span>
                    </h1>

                    <div className="relative mx-auto mb-10 w-120 aspect-2/3 max-2xl:w-110 max-xl:w-100 max-md:w-80 max-sm:w-70 flex items-center justify-center">
                        <div className="absolute w-[91%] aspect-11/16 bg-paper-warm border border-line-soft shadow-[10px_12px_0_rgba(28,27,25,0.10)] -rotate-7"></div>
                        <div className="absolute w-[91%] aspect-11/16 bg-paper-warm border border-line-soft shadow-[10px_12px_0_rgba(28,27,25,0.10)] rotate-4"></div>
                        <span className="w-[87%] aspect-21/16 bg-yellow rounded-[50%] absolute blur-xs opacity-50 -rotate-10"></span>
                        <img src={HeroImg} alt="Suyog Shakya Image" className="absolute top-0 left-0 w-full z-10 drop-shadow-[10px_14px_0_rgba(28,27,25,0.13)]" />
                    </div>
                </div>

                <div className={`w-40 h-fit absolute z-10 bottom-40 right-[6%] flex items-center flex-col md:rotate-7 transition-all duration-500
                    max-md:fixed max-md:top-5 max-md:right-8 max-md:w-60 max-sm:top-3 max-sm:right-4
                    ${isMenuOpen ? 'max-md:scale-100 max-md:translate-y-10' : 'max-md:scale-0 max-md:translate-x-25 max-md:-translate-y-25'}`}>
                    <div className="relative rounded-t-[50%] rounded-b-lg w-40 h-6 border border-line-soft
                        bg-[repeating-linear-gradient(90deg,var(--color-paper-2)_0px,var(--color-paper-2)_4px,var(--color-paper-3)_5px,var(--color-paper-2)_7px)] 
                        dark:bg-[repeating-linear-gradient(90deg,var(--color-night-paper)_0px,var(--color-night-paper)_4px,var(--color-night-paper-2)_5px,var(--color-night-paper)_7px)] 
                        shadow-[3px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]
                        max-md:hidden">
                        <span className="absolute right-3 bottom-1.5 inline-block w-1.5 h-1.5 border border-pencil-dark rounded-full"></span>
                    </div>

                    <nav className="w-37.5 px-4 bg-paper-soft border-x border-line-soft shadow-[4px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]
                        max-md:w-full max-md:border-2 max-md:px-6 max-md:border-line max-md:rounded-md max-md:shadow-[6px_6px_0_rgba(28,27,25,0.12)] max-md:dark:shadow-[6px_6px_0_rgba(0,0,0,0.4)]">
                        <div className="flex items-center justify-between gap-4 border-b border-dashed border-line-soft py-2 max-md:py-2.5">
                            <span className="font-mono text-[8px] max-md:text-[10px] tracking-[0.25em] uppercase text-pencil-dark pt-0.5 max-md:pt-1.5">Menu</span>
                            <p className="font-hand text-xl max-md:text-2xl lowercase text-pencil-dark">Navigate</p>
                        </div>
                        <ul className="mt-4 pb-4 list-none flex flex-col items-start gap-3 text-xs max-md:text-sm font-semibold font-mono tracking-widest uppercase border-b border-dashed border-line-soft">
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil max-md:text-[11px]">01</span>Home</li>
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil max-md:text-[11px]">02</span>About</li>
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil max-md:text-[11px]">03</span>Contact</li>
                        </ul>
                        <div className="flex items-center justify-between font-mono text-[8px] max-md:text-xs max-md:py-1.5 tracking-widest text-pencil">
                            <span className="text-2xl max-sm:text-lg pb-1">✦</span>
                            <span>Suyog Shakya</span>
                        </div>
                    </nav>

                    <div className="relative rounded-t-lg rounded-b-[50%] w-40 h-6 border border-line-soft
                        bg-[repeating-linear-gradient(90deg,var(--color-paper-2)_0px,var(--color-paper-2)_4px,var(--color-paper-3)_5px,var(--color-paper-2)_7px)] 
                        dark:bg-[repeating-linear-gradient(90deg,var(--color-night-paper)_0px,var(--color-night-paper)_4px,var(--color-night-paper-2)_5px,var(--color-night-paper)_7px)] 
                        shadow-[3px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]
                        max-md:hidden">
                        <span className="absolute right-3 top-1.5 inline-block w-1.5 h-1.5 border border-pencil-dark rounded-full"></span>
                    </div>
                </div>

                <div className="absolute bottom-0 z-10 w-full flex items-end justify-between max-sm:flex-col max-sm:items-start gap-4 pb-6">
                    <span className="font-mono text-xs max-lg:text-[8px] max-md:hidden uppercase tracking-widest text-pencil pb-4">Page 01</span>

                    <div className="">
                        <span className="font-mono text-xs max-lg:text-[10px] uppercase tracking-[0.25em] max-lg:tracking-widest text-pencil">What i do</span>
                        <p className="font-display text-5xl max-lg:text-3xl">Frontend<span className="text-teal">.</span></p>
                    </div>

                    <div className="font-hand text-2xl max-lg:text-xl max-sm:hidden">turn the page ↓</div>

                    <div className="text-right max-sm:text-left">
                        <p className="font-hand text-2xl max-lg:text-md">React · Angular · TypeScript</p>
                        <p className="mt-1 font-body text-xs max-lg:text-[10px] font-normal leading-5 tracking-wide text-ink-muted">I turn ideas into interfaces people actually enjoy using.</p>
                    </div>
                    
                    <span className="font-mono text-xs max-lg:text-[8px] max-md:hidden tracking-widest text-pencil pb-4">2026</span>
                </div>
            </main>
        </section>
    )
}

export default Hero