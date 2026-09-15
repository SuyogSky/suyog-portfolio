import React from 'react'
import HeroImg from '../assets/hero.png'

function Hero() {
    return (
        <section className="w-full h-full min-h-screen flex flex-col px-30 bg-paper
            bg-[size:32px_32px] 
            bg-[linear-gradient(to_right,rgba(28,27,25,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.05)_1px,transparent_1px)] 
            dark:bg-night-paper dark:bg-[linear-gradient(to_right,rgba(245,239,226,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,226,0.05)_1px,transparent_1px)]"
        >
            <header className="w-full h-20 px-20 border-line-soft flex items-center justify-between">
                <div className="font-display text-xl uppercase">S<span className="text-teal">.</span>S</div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-pencil">Personal Portfolio / 01</div>
                <span></span>
            </header>

            <main className="relative w-full h-full flex-1">
                <div className="w-full pt-10 flex items-start justify-between">
                    <div>
                        <p className="font-hand text-3xl font-bold">Hi, I'm</p>
                        <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-pencil">Software Developer</p>
                    </div>

                    <div className="px-7 py-5 flex flex-col items-center justify-center gap-2 rotate-7 bg-yellow-soft border-2 border-line rounded-sm shadow-[10px_12px_0_rgba(28,27,25,0.10)]">
                        <p className="font-hand text-2xl font-bold">Open to Work!</p>
                        <span className="font-mono text-xs uppercase text-pencil-dark">EST. 2026</span>
                    </div>
                </div>

                <h1 className="font-display text-[clamp(4.5rem,14vw,13rem)] leading-[0.7] mt-10 tracking-tighter uppercase flex items-center justify-center gap-x-[2vw] text-ink dark:text-night-ink w-full">
                    <span>Suyog</span>
                    <span className="translate-y-15 text-transparent [-webkit-text-stroke:2px_var(--color-pencil)] dark:[-webkit-text-stroke:2px_var(--color-night-pencil)]">
                        Shakya
                    </span>
                </h1>

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-120 h-180 flex items-center justify-center">
                        <div className="absolute w-110 h-160 bg-paper-warm border border-line-soft shadow-[10px_12px_0_rgba(28,27,25,0.10)] -rotate-7"></div>
                        <div className="absolute w-110 h-160 bg-paper-warm border border-line-soft shadow-[10px_12px_0_rgba(28,27,25,0.10)] rotate-4"></div>
                        <span className="w-105 h-80 bg-yellow rounded-[50%] absolute blur-xs opacity-50 -rotate-10"></span>
                        <img src={HeroImg} alt="Suyog Shakya Image" className="absolute top-0 left-0 w-120 z-10 drop-shadow-[10px_14px_0_rgba(28,27,25,0.13)]" />
                    </div>
                </div>

                <div className="w-40 absolute bottom-40 right-50 flex items-center flex-col">
                    <div className="relative rounded-t-[50%] rounded-b-lg w-40 h-6 border border-line-soft
                        bg-[repeating-linear-gradient(90deg,var(--color-paper-2)_0px,var(--color-paper-2)_4px,var(--color-paper-3)_5px,var(--color-paper-2)_7px)] 
                        dark:bg-[repeating-linear-gradient(90deg,var(--color-night-paper)_0px,var(--color-night-paper)_4px,var(--color-night-paper-2)_5px,var(--color-night-paper)_7px)] 
                        shadow-[3px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]">
                        <span className="absolute right-3 bottom-1.5 inline-block w-1.5 h-1.5 border border-pencil-dark rounded-full"></span>
                    </div>

                    <nav className="w-37.5 px-4 bg-paper-soft border-x border-line-soft shadow-[4px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]">
                        <div className="flex items-center justify-between gap-4 border-b border-dashed border-line-soft py-2">
                            <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-pencil-dark">Menu</span>
                            <p className="font-hand text-xl lowercase text-pencil-dark">Navigate</p>
                        </div>
                        <ul className="mt-4 pb-4 list-none flex flex-col items-start gap-3 text-xs font-semibold font-mono tracking-widest uppercase border-b border-dashed border-line-soft">
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil">01</span>Home</li>
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil">02</span>About</li>
                            <li className="flex items-center justify-start gap-2 p-1 cursor-pointer hover:text-teal hover:-rotate-4 hover:translate-x-2 transition-all duration-300"><span className="text-[8px] text-pencil">03</span>Contact</li>
                        </ul>
                        <div className="flex items-center justify-between font-mono text-[8px] tracking-widest text-pencil">
                            <span className="text-2xl pb-1">✦</span>
                            <span className="">Suyog Shakya</span>
                        </div>
                    </nav>

                    <div className="relative rounded-t-lg rounded-b-[50%] w-40 h-6 border border-line-soft
                        bg-[repeating-linear-gradient(90deg,var(--color-paper-2)_0px,var(--color-paper-2)_4px,var(--color-paper-3)_5px,var(--color-paper-2)_7px)] 
                        dark:bg-[repeating-linear-gradient(90deg,var(--color-night-paper)_0px,var(--color-night-paper)_4px,var(--color-night-paper-2)_5px,var(--color-night-paper)_7px)] 
                        shadow-[3px_4px_0_rgba(28,27,25,0.12)] dark:shadow-[3px_4px_0_rgba(0,0,0,0.4)]">
                        <span className="absolute right-3 top-1.5 inline-block w-1.5 h-1.5 border border-pencil-dark rounded-full"></span>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full flex items-end justify-between gap-4 py-6">
                    <span className="font-mono text-xs tracking-widest text-pencil pb-4">Page 01</span>
                    <div className="">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-pencil">What i do</span>
                        <p className="mt-1 font-display text-5xl">Frontend<span className="text-teal">.</span></p>
                    </div>
                    <div className="font-hand text-2xl">turn the page ↓</div>
                    <div className="text-right">
                        <p className="font-hand text-2xl">React · Angular · TypeScript</p>
                        <p className="mt-1 font-body text-xs font-normal leading-5 tracking-wide text-ink-muted">I turn ideas into interfaces people actually enjoy using.</p>
                    </div>
                    <span className="font-mono text-xs tracking-widest text-pencil pb-4">2026</span>
                </div>
            </main>
        </section>
    )
}

export default Hero