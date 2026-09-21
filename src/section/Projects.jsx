import React from 'react'
import OCRThumbnail from '../assets/ocr.jpeg'
import QAAutomation from '../assets/qa-automation.jpeg'

function Projects() {
    return (
        <section className="w-full bg-paper
            bg-size-[32px_32px] 
            bg-[linear-gradient(to_right,rgba(28,27,25,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.05)_1px,transparent_1px)] 
            dark:bg-night-paper dark:bg-[linear-gradient(to_right,rgba(245,239,226,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,226,0.05)_1px,transparent_1px)]
            border-b
            [border-image:repeating-linear-gradient(to_right,var(--color-line-soft)_0,var(--color-line-soft)_10px,transparent_10px,transparent_18px)_1]">
            <div className="w-full max-w-7xl mx-auto px-12 max-md:px-8 max-sm:px-4 py-30 max-md:py-20 max-sm:py-15">
                <div className="font-mono text-xs max-sm:text-[10px] uppercase tracking-[0.3em] text-pencil flex items-center justify-start gap-3">
                    <span className="text-coral">[</span>
                    Selected Works / 02
                    <span className="text-coral">]</span>
                </div>
                <h1 className="font-display font-bold text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[0.8] w-fit flex flex-col gap-2 mt-4">
                    Featured Projects.
                </h1>
                <p className="font-hand text-2xl text-pencil-dark mt-10 max-w-100 leading-tight">“A curated collection of interfaces I've engineered and crafted.”</p>

                <div className="flex items-center justify-start gap-4 mt-8 flex-wrap max-sm:flex-col max-sm:items-start max-sm:gap-2">
                    <button className="font-mono font-semibold text-sm px-2 py-0.5 flex items-center justify-center gap-2.5 border-2 border-line rounded-xl cursor-pointer">
                        <input type="checkbox" name="" id="" />
                        All
                        <span className="text-pencil text-xs">(06)</span>
                    </button>

                    <button className="font-mono font-semibold text-sm px-2 py-0.5 flex items-center justify-center gap-2.5 border-2 border-transparent hover:border-line-soft rounded-xl cursor-pointer">
                        <input type="checkbox" name="" id="" />
                        React
                        <span className="text-pencil text-xs">(03)</span>
                    </button>

                    <button className="font-mono font-semibold text-sm px-2 py-0.5 flex items-center justify-center gap-2.5 border-2 border-transparent hover:border-line-soft rounded-xl cursor-pointer">
                        <input type="checkbox" name="" id="" />
                        Angular
                        <span className="text-pencil text-xs">(02)</span>
                    </button>

                    <p className="font-hand text-base text-pencil ml-2">Showing 6 of 6 projects</p>
                </div>

                <main className="w-full flex flex-col items-center justify-start gap-[clamp(70px,9vw,110px)] py-15 max-sm:py-12">
                    <article className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-[clamp(28px,5vw,64px)] items-center">
                        <div className="px-3 py-6 max-w-120 mx-auto bg-paper-soft shadow-[4px_6px_0_rgba(28,27,25,0.2)] -rotate-2 hover:rotate-0 hover:-translate-y-5 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                            <img src={OCRThumbnail} alt="" className="border border-ink rounded-md" />
                            <p className="font-hand text-xl text-center px-2 pt-5">scainit · live tracking view ✎</p>
                        </div>
                        <div className="bg-paper-2 p-7 pt-8 border-t-4 border-coral shadow-[4px_6px_0_rgba(28,27,25,0.2)]">
                            <small className="font-mono text-xs tracking-[0.3em] text-teal uppercase"><b className="text-coral">01</b> // Scainit</small>
                            <h4 className="font-display font-normal text-[clamp(1.5rem,2.6vw,2rem)] mt-2 mb-3.5 leading-[1.1]">Scainit - AI-OCR Platform</h4>
                            <p className="text-base font-body text-ink-muted leading-[1.6] max-sm:text-xs mt-6">An AI-powered OCR platform that turns uploaded documents into structured, trackable data.</p>
                            <p className="text-base font-body text-ink-muted leading-[1.6] max-sm:text-xs mt-3">Built in Angular with a centralized NgRx store that cuts redundant API calls, plus live document tracking and chat streaming over SignalR and SSE.</p>
                            <div className="flex items-center flex-wrap gap-2 my-5">
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">Angular</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md rotate-2">Typescript</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">NGRX</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">SignalR</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">Chart.JS</span>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                                <a href="#" className="font-bold text-xs font-mono uppercase decoration-0 py-2.5 px-4 tracking-widest border-3 border-teal outline-[1.5px] outline-teal outline-offset-3 -rotate-2">Live demo ↗</a>
                                <span className="text-pencil border-2 border-dashed border-line-faint py-1.5 px-4">Private Repo</span>
                            </div>
                        </div>
                    </article>

                    <article className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-[clamp(28px,5vw,64px)] items-center">
                        <div className="lg:order-2 px-3 py-6 max-w-120 mx-auto bg-paper-soft shadow-[4px_6px_0_rgba(28,27,25,0.2)] -rotate-2 hover:rotate-0 hover:-translate-y-5 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                            <img src={QAAutomation} alt="" className="border border-ink rounded-md" />
                            <p className="font-hand text-xl text-center px-2 pt-5">ai stellar · test-step generator ✎</p>
                        </div>
                        <div className="bg-paper-2 p-7 pt-8 border-t-4 border-coral shadow-[4px_6px_0_rgba(28,27,25,0.2)]">
                            <small className="font-mono text-xs tracking-[0.3em] text-teal uppercase"><b className="text-coral">02</b> // AI _Stellar</small>
                            <h4 className="font-display font-normal text-[clamp(1.5rem,2.6vw,2rem)] mt-2 mb-3.5 leading-[1.1]">AI Stellar - QA Automation Hub</h4>
                            <p className="text-base font-body text-ink-muted leading-[1.6] max-sm:text-xs mt-6">A multi-environment QA automation hub where AI writes natural-language test steps for each project.</p>
                            <p className="text-base font-body text-ink-muted leading-[1.6] max-sm:text-xs mt-3">Built with Angular & NgRx on a REST backend, with every project environment kept fully isolated from the others.</p>
                            <div className="flex items-center flex-wrap gap-2 my-5">
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">Angular</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">NGRX</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md rotate-2">Typescript</span>
                                <span className="text-xs max-sm:text-[10px] font-mono uppercase tracking-widest py-0.5 px-2.5 border border-line rounded-tl-xs rounded-tr-sm rounded-br-xs rounded-bl-md">Rest API</span>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                                <a href="#" className="font-bold text-xs font-mono uppercase decoration-0 py-2.5 px-4 tracking-widest border-3 border-teal outline-[1.5px] outline-teal outline-offset-3 -rotate-2">Live demo ↗</a>
                                <span className="text-pencil border-2 border-dashed border-line-faint py-1.5 px-4">Private Repo</span>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </section>
    )
}

export default Projects