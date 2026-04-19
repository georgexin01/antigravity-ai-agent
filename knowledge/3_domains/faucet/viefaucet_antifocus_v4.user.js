// @name         AI Faucet Earning Agent (Pure V15)
// @namespace    http://tampermonkey.net/
// @version      7.1
// @description  Pure AI Faucet Mode: Sub-Second Triage & Tactical Earning.
// @author       AI Faucet Mission Commander
// @match        *://viefaucet.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        TELEMETRY_CHANNEL: 'ai_faucet_telemetry_v15',
        BATON_KEY: 'FAUCET_MISSION_STATE_V15',
        MISSION_DELAY: 800, // Sub-Second Triage
        DEBUG: true,
        AUTO_SOLVE: true,
        ROI_INTERVAL: 30000, // 30s
        WATCHDOG_INTERVAL: 5000, 
        HEARTBEAT: 2000
    };

    // 1. Telemetry Bridge
    const bc = new BroadcastChannel(CONFIG.TELEMETRY_CHANNEL);
    const log = (tag, msg) => {
        if (CONFIG.DEBUG) console.log(`[${tag}] ${msg}`);
        bc.postMessage({ type: 'LOG', tag, msg, timestamp: Date.now() });
    };

    // 2. Baton Relay (Borealis State Persistence)
    const Baton = {
        get() {
            const raw = localStorage.getItem(CONFIG.BATON_KEY);
            return raw ? JSON.parse(raw) : this.init();
        },
        save(data) {
            localStorage.setItem(CONFIG.BATON_KEY, JSON.stringify({ ...data, last_updated: Date.now() }));
        },
        init() {
            const initial = { version: "15.0", mission: "INITIALIZING", status: "idle", progress: 0, target: "Dashboard" };
            this.save(initial);
            return initial;
        },
        update(updates) {
            const current = this.get();
            const next = { ...current, ...updates };
            this.save(next);
            bc.postMessage({ 
                type: 'MISSION_DATA', 
                percent: next.progress, 
                mission: next.mission, 
                target: next.target,
                tokens: next.telemetry?.tokens,
                velocity: next.telemetry?.velocity,
                efficiency: next.telemetry?.efficiency || 98
            });
            return next;
        }
    };

    // 2.5 ROI Engine (Omniscience)
    const ROIEngine = {
        lastTokens: 0,
        startTs: Date.now(),

        scrape() {
            const tokenEl = document.querySelector('.user-balance, #token-balance, .tokens'); 
            if (tokenEl) {
                const tokens = parseInt(tokenEl.textContent.replace(/,/g, '')) || 0;
                if (tokens !== this.lastTokens) {
                    const diff = tokens - this.lastTokens;
                    this.lastTokens = tokens;
                    const velocity = `+${((tokens - (Baton.get().telemetry?.initial_tokens || tokens)) / ((Date.now() - this.startTs) / 3600000)).toFixed(1)} TPH`;
                    
                    const baton = Baton.get();
                    Baton.update({ 
                        telemetry: { 
                            ...baton.telemetry, 
                            tokens, 
                            velocity,
                            initial_tokens: baton.telemetry?.initial_tokens || tokens
                        } 
                    });
                    log('ROI', `Yield Detected: ${tokens} | Velocity: ${velocity}`);
                }
            }
        }
    };

    // 3. Stealth & Focus Locks (Singularity Protocol)
    const activateStealth = () => {
        Object.defineProperty(document, 'hidden', { value: false, writable: false });
        Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
        Object.defineProperty(document, 'hasFocus', { value: () => true, writable: false });
        window.addEventListener('blur', (e) => e.stopImmediatePropagation(), true);
        window.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);
        log('STEALTH', 'Singularity Focus Lock Engaged');
    };
    activateStealth();

    // 4. Agentic Mission Control
    const Agent = {
        lastAction: 0,

        async run() {
            if (Date.now() - this.lastAction < CONFIG.MISSION_DELAY) return;
            this.lastAction = Date.now();

            const baton = Baton.get();
            const url = window.location.href;

            log('AGENT', `Baton Sync: ${baton.mission} | Progress: ${baton.progress}%`);

            if (url.includes('/app/faucet')) {
                await this.handleFaucet(baton);
            } else if (url.includes('/app/ptc')) {
                await this.handlePTC(baton);
            } else if (url.includes('/app/dashboard')) {
                this.navigate('FAUCET', 'Moving to Primary Yield Source');
            } else if (url.includes('viefaucet.com')) {
                window.location.href = 'https://viefaucet.com/app/dashboard';
            }
        },

        navigate(target, reason) {
            const routes = {
                'FAUCET': 'https://viefaucet.com/app/faucet',
                'PTC': 'https://viefaucet.com/app/ptc/window'
            };
            Baton.update({ mission: target, status: 'navigating', target: reason, progress: 0 });
            log('NAV', reason);
            window.location.href = routes[target];
        },

        async handleFaucet(baton) {
            Baton.update({ mission: 'FAUCET_CLAIM', progress: 25, target: 'Awaiting Verify' });
            const verifyBtn = document.querySelector('button.el-button--primary:not(.is-disabled)');
            
            if (verifyBtn && verifyBtn.textContent.includes('Verify')) {
                Baton.update({ progress: 50, target: 'Solving Anti-Bot' });
                
                // --- ANTI-BOT SOLVER (Project DNA Logic) ---
                const antibotContainer = document.querySelector('.antibot-container');
                const orderText = document.querySelector('.antibot-order')?.textContent;
                
                if (antibotContainer && orderText) {
                    const links = Array.from(antibotContainer.querySelectorAll('a, img, .antibot-link'));
                    const sequence = orderText.split(/[\s,]+/).filter(t => t.trim());
                    
                    for (const num of sequence) {
                        const link = this.findLink(links, num);
                        if (link) {
                            log('FAUCET', `Solving: ${num}`);
                            link.click();
                            await new Promise(r => setTimeout(r, 1200));
                        }
                    }
                }

                // --- CAPTCHA SYNC (Active Solver) ---
                const turnstile = document.querySelector('[name="cf-turnstile-response"]');
                if (turnstile && turnstile.value) {
                    Baton.update({ progress: 95, target: 'Executing Gaussian Click' });
                    log('FAUCET', 'Turnstile Cleared. Dispatched Gaussian verify.');
                    
                    // Gaussian Delay to mimic human hesitation
                    setTimeout(() => {
                        verifyBtn.click();
                        setTimeout(() => this.navigate('PTC', 'Omniscience Triage Complete'), 3000);
                    }, 1500 + Math.random() * 2000);
                } else {
                    log('CAPTCHA', 'Waiting for Mission Clearance...');
                    Baton.update({ target: 'Syncing Solver Matrix' });
                }
            } else {
                Baton.update({ mission: 'COOLDOWN', progress: 100, target: 'Diverting to PTC' });
                this.navigate('PTC', 'Yield on Cooldown');
            }
        },

        findLink(links, key) {
            const romanMap = { "1":"I", "2":"II", "3":"III", "4":"IV", "5":"V", "6":"VI", "7":"VII", "8":"VIII", "9":"IX", "10":"X" };
            const wordMap = { "one":"1", "two":"2", "three":"3", "four":"4", "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9", "ten":"10" };
            
            const targetRoman = romanMap[key] || key;
            const targetWord = Object.keys(wordMap).find(k => wordMap[k] === key);
            
            return links.find(l => {
                const text = (l.alt || l.textContent || l.getAttribute('rel') || "").toUpperCase();
                return text.includes(targetRoman) || (targetWord && text.includes(targetWord.toUpperCase())) || text === key;
            });
        },

        async handlePTC(baton) {
            Baton.update({ mission: 'PTC_SWEEP', progress: 30, target: 'Scanning Ad Grid' });
            
            if (document.title.includes('Just a moment')) return;

            const adBtn = document.querySelector('button.el-button--primary.claim-button:not(.is-disabled)');
            const modalVerifyBtn = document.querySelector('.el-dialog button.el-button--primary');

            if (modalVerifyBtn) {
                const turnstile = document.querySelector('.el-dialog [name="cf-turnstile-response"]');
                if (turnstile && turnstile.value) {
                    Baton.update({ progress: 85, target: 'Closing Ad Modal' });
                    modalVerifyBtn.click();
                }
            } else if (adBtn) {
                const adTitle = adBtn.closest('.ad-card')?.querySelector('.ad-title')?.textContent || 'New Ad';
                Baton.update({ target: `Viewing: ${adTitle}`, progress: 50 });
                adBtn.click();
            } else {
                this.navigate('FAUCET', 'PTC Cycle Complete');
            }
        }
    };

    // 5. Human Mimicry (Gaussian Curvature)
    const GC = {
        lastX: 0, lastY: 0,
        move(tx, ty) {
            const steps = 15;
            for(let i=0; i<=steps; i++) {
                const t = i/steps;
                const x = this.lastX + (tx - this.lastX) * t;
                const y = this.lastY + (ty - this.lastY) * t + Math.sin(t * Math.PI) * 20; // Bezier-like curve
                setTimeout(() => {
                    window.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y, bubbles: true }));
                }, i * 20);
            }
            this.lastX = tx; this.lastY = ty;
        }
    };

    const pulse = () => {
        GC.move(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        if (Math.random() > 0.85) window.scrollBy(0, (Math.random() - 0.5) * 400);
        window.dispatchEvent(new Event('focus'));
        ROIEngine.scrape(); // Heartbeat ROI Check
    };

    // 6. Singularity Loop (The Watchdog)
    const Watchdog = {
        check() {
            const baton = Baton.get();
            const now = Date.now();
            
            // Check for Faucet Cooldown (Parallel monitor)
            if (baton.mission !== 'FAUCET_CLAIM' && baton.faucet_ready_at && now > baton.faucet_ready_at) {
                log('WATCHDOG', 'Faucet Ready! Diverting for Yield.');
                Agent.navigate('FAUCET', 'Priority Cooldown Zero');
            }
        }
    };

    Baton.get();
    setInterval(() => {
        Agent.run();
        pulse();
    }, 2000);
    setInterval(() => Watchdog.check(), CONFIG.WATCHDOG_INTERVAL);

    // 7. Mutation Triage (Sub-Second Trigger)
    const observer = new MutationObserver(() => {
        const adBtn = document.querySelector('button.el-button--primary.claim-button:not(.is-disabled)');
        const verifyBtn = document.querySelector('button.el-button--primary:not(.is-disabled)');
        if (adBtn || verifyBtn) Agent.run();
    });
    observer.observe(document.body, { childList: true, subtree: true });

})();
