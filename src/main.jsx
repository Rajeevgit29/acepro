import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Menu, X, ChevronDown, TrendingUp, Target,
        Layers3, Leaf, Mail, Phone, MapPin, CheckCircle2, Quote, Clock} from 'lucide-react';
import {HeroArt, PmsArt, AifArt, FofArt, GoalRetire, GoalEducation, GoalWealth, GoalHome,
        GoalLegacy, GoalCorpus, CalculatorArt, AdvisorArt, ProcessArt, ArticleArt,
        IconGoals, IconResearch, IconTech, IconPatience} from './illustrations.jsx';
import './styles.css';

/* Kept short: the longest phrase sets the hero's minimum width on small screens. */
const heroGoals = ['retirement.', "a child's education.", 'a first home.', 'lasting wealth.', 'a legacy.'];

const offerings = [
  {slug:'portfolio-management-services', badge:'Most popular', art:PmsArt, title:'Portfolio Management Services',
   text:'Discretionary portfolios built bottom-up from businesses we would want to own for years, not quarters.',
   meta:'Six distinct strategies'},
  {slug:'alternative-investment-fund', badge:'For sophisticated investors', art:AifArt, title:'Alternative Investment Fund',
   text:'Pooled vehicles that reach opportunities beyond listed markets, with defined mandates and disciplined risk controls.',
   meta:'SEBI registered category funds'},
  {slug:'fund-of-funds', badge:'Diversified access', art:FofArt, title:'Fund of Funds',
   text:'A single, professionally selected allocation across underlying funds — breadth without the administrative load.',
   meta:'One vehicle, many managers'},
];

const guidance = [
  {icon:IconGoals, title:'We start with your goals', text:'Horizon, liquidity needs and risk appetite come before any product conversation.'},
  {icon:IconResearch, title:'Research-backed conviction', text:'Bottom-up analysis of business quality, growth durability and the price you pay for both.'},
  {icon:IconTech, title:'A repeatable process', text:'The same quality filter is applied to every holding, in every market, in every cycle.'},
  {icon:IconPatience, title:'Built to stay invested', text:'Portfolios designed so you can hold through volatility instead of reacting to it.'},
];

const goals = [
  {art:GoalRetire, title:'Retirement', text:'Build an income-generating corpus that outlives inflation, not just your working years.'},
  {art:GoalEducation, title:"Child's education", text:'A funding plan matched to a date you already know — with the right risk as it approaches.'},
  {art:GoalWealth, title:'Wealth creation', text:'Long-horizon equity compounding for capital you do not need to touch for a decade.'},
  {art:GoalHome, title:'Buying a home', text:'Grow a down payment in instruments sized to a three-to-seven year timeline.'},
  {art:GoalLegacy, title:'Legacy planning', text:'Structure and steward family capital so it transfers cleanly to the next generation.'},
  {art:GoalCorpus, title:'Emergency corpus', text:'Keep a liquid, low-volatility reserve so long-term investments are never disturbed.'},
];

const strategies = [
  {n:'01', title:'Large Cap Strategy', tag:'Steady growth', text:'A quality-first portfolio of established businesses designed for measured, long-term capital appreciation.', icon:ShieldCheck},
  {n:'02', title:'Galaxy Strategy', tag:'All-cap opportunity', text:'A flexible, research-driven approach seeking compelling businesses across market capitalisations.', icon:Sparkles},
  {n:'03', title:'Mid & Small Cap', tag:'High growth', text:'Focused exposure to emerging leaders with strong fundamentals and meaningful runway for growth.', icon:TrendingUp},
  {n:'04', title:'Wealth Builder', tag:'Concentrated quality', text:'A focused portfolio of durable, fundamentally strong businesses built to compound across cycles.', icon:Target},
  {n:'05', title:'Emerging Businesses', tag:'Discovery led', text:'A high-conviction strategy seeking tomorrow’s category leaders at an early stage of their journey.', icon:Leaf},
  {n:'06', title:'C3B Strategy', tag:'Consumption theme', text:'Participation in India’s consumption story across products, services and aspirational categories.', icon:Layers3},
];

/* PLACEHOLDER COPY — replace every entry below with quotes AcePro has written
   consent for before this section goes live. Names are intentionally generic. */
const testimonials = [
  {quote:'The conversation started with what we were saving for, not with a product pitch. That framing changed how we invest.', who:'Client since 2018', city:'Mumbai', topic:'Advisory experience'},
  {quote:'Every quarter we get a clear explanation of what changed in the portfolio and why. No jargon, no surprises.', who:'Client since 2016', city:'New Delhi', topic:'Transparency'},
  {quote:'They talked us out of exiting during a sharp drawdown. Staying invested was the single best decision we made.', who:'Client since 2014', city:'Bengaluru', topic:'Long-term discipline'},
  {quote:'Onboarding, documentation and reporting were handled end to end. The process felt genuinely institutional.', who:'Client since 2021', city:'Pune', topic:'Service'},
];

const resources = [
  {slug:'investors-corner', label:"Investor's Corner", text:'Disclosures, factsheets and periodic updates for existing investors.', read:'Resource hub'},
  {slug:'awards-accolades', label:'Awards & Accolades', text:'Recognition received by AcePro Advisors and the wider Sarthi Group.', read:'Company'},
  {slug:'faqs', label:'Frequently Asked Questions', text:'How PMS, AIF and Fund of Funds accounts work, from onboarding to exit.', read:'4 min read'},
  {slug:'grievance-redressal', label:'Grievance Redressal', text:'Escalation matrix and timelines for raising and resolving a complaint.', read:'Regulatory'},
];

const sitePages = [
  {slug:'home-main', id:520, label:'Original Homepage Content', group:'Company'},
  {slug:'about-us-2', id:393, label:'About Us', group:'Company'},
  {slug:'founder', id:395, label:'Founder', group:'Company'},
  {slug:'advisory-board', id:397, label:'Advisory Board', group:'Company'},
  {slug:'awards-accolades', id:417, label:'Awards & Accolades', group:'Company'},
  {slug:'portfolio-management-services', id:518, label:'Portfolio Management Services', group:'Offerings'},
  {slug:'alternative-investment-fund', id:403, label:'Alternative Investment Fund', group:'Offerings'},
  {slug:'fund-of-funds', id:3107, label:'Fund of Funds', group:'Offerings'},
  {slug:'investors-corner', id:408, label:"Investor's Corner", group:'Resources'},
  {slug:'faqs', id:414, label:'FAQs', group:'Resources'},
  {slug:'grievance-redressal', id:412, label:'Grievance Redressal', group:'Resources'},
  {slug:'privacy-policy-2', id:410, label:'Privacy Policy', group:'Resources'},
  {slug:'contact-us', id:420, label:'Contact Us', group:'Connect'},
];

const navGroups = [
  {label:'Our offerings', items:offerings.map(o=>({slug:o.slug, label:o.title, desc:o.meta}))},
  {label:'Plan your goals', items:[
    {anchor:'goals', label:'Goal-based planning', desc:'Map money to what it is for'},
    {anchor:'calculator', label:'Wealth calculator', desc:'Project a monthly investment'},
    {anchor:'strategies', label:'Our strategies', desc:'Six disciplined portfolios'},
  ]},
  {label:'Company', items:[
    {slug:'about-us-2', label:'About us'}, {slug:'founder', label:'Founder'},
    {slug:'advisory-board', label:'Advisory board'}, {slug:'awards-accolades', label:'Awards & accolades'},
  ]},
  {label:'Resources', items:[
    {slug:'investors-corner', label:"Investor's corner"}, {slug:'faqs', label:'FAQs'},
    {slug:'grievance-redressal', label:'Grievance redressal'}, {slug:'privacy-policy-2', label:'Privacy policy'},
  ]},
];

const inr = v => v >= 1e7 ? `₹${(v/1e7).toFixed(2)} Cr`
  : v >= 1e5 ? `₹${(v/1e5).toFixed(2)} L`
  : `₹${Math.round(v).toLocaleString('en-IN')}`;

/* ---------------- CMS pages (unchanged data source: acepro.in) ---------------- */
function cleanHtml(html){
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script,style,link,iframe').forEach(el=>el.remove());
  doc.querySelectorAll('*').forEach(el=>{
    [...el.attributes].forEach(attr=>{
      if(attr.name === 'style' || attr.name === 'class' || attr.name.startsWith('data-') || attr.name.startsWith('on')) el.removeAttribute(attr.name);
    });
  });
  return doc.body.innerHTML;
}

function CmsPage({page, go}){
  const [content,setContent]=useState('');
  const [error,setError]=useState(false);
  useEffect(()=>{
    setContent(''); setError(false); window.scrollTo(0,0);
    fetch(`https://www.acepro.in/wp-json/wp/v2/pages/${page.id}?_fields=content`)
      .then(r=>{if(!r.ok) throw new Error(); return r.json()})
      .then(data=>setContent(cleanHtml(data.content.rendered)))
      .catch(()=>setError(true));
  },[page.id]);
  return <section className="cms-page">
    <div className="cms-hero"><div className="sectionLabel light">ACEPRO / {page.group.toUpperCase()}</div><h1>{page.label}</h1><p>Complete information from AcePro Advisors</p></div>
    <div className="cms-layout">
      <aside><span>ON THIS WEBSITE</span>{sitePages.map(p=><button className={p.slug===page.slug?'active':''} key={p.slug} onClick={()=>go(p.slug)}>{p.label}</button>)}</aside>
      <article className="cms-content">{error?<div className="load-error"><h2>Content could not be loaded.</h2><p>Please check your connection or view this page on acepro.in.</p></div>:content?<div dangerouslySetInnerHTML={{__html:content}}/>:<div className="loading"><i/><span>Loading complete page content…</span></div>}</article>
    </div>
  </section>
}

/* ---------------- Interactive pieces ---------------- */
function RotatingGoal(){
  const [i,setI] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=>setI(v=>(v+1)%heroGoals.length), 2600);
    return ()=>clearInterval(t);
  },[]);
  return <em key={i} className="rotator">{heroGoals[i]}</em>;
}

function Slider({label, value, min, max, step, onChange, format}){
  return (
    <label className="slider">
      <span className="sliderTop"><span>{label}</span><b>{format(value)}</b></span>
      <input type="range" min={min} max={max} step={step} value={value}
             onChange={e=>onChange(Number(e.target.value))}
             style={{'--pct': `${((value-min)/(max-min))*100}%`}}/>
      <span className="sliderEnds"><i>{format(min)}</i><i>{format(max)}</i></span>
    </label>
  );
}

function Calculator({onCta}){
  const [monthly,setMonthly] = useState(50000);
  const [years,setYears] = useState(15);
  const [rate,setRate] = useState(13);

  const {invested, future} = useMemo(()=>{
    const i = rate/12/100, n = years*12;
    const fv = monthly * ((Math.pow(1+i, n) - 1) / i) * (1+i);
    return {invested: monthly*n, future: fv};
  },[monthly, years, rate]);

  const gain = future - invested;
  const investedPct = Math.max(6, (invested/future)*100);

  return (
    <section className="calc" id="calculator">
      <div className="calcArt"><CalculatorArt/></div>
      <div className="calcBody">
        <div className="sectionLabel">03 — WEALTH CALCULATOR</div>
        <h2>Small, regular investments.<br/><em>Meaningful future value.</em></h2>
        <p className="calcIntro">Move the sliders to see what a disciplined monthly commitment could compound into over time.</p>

        <div className="calcGrid">
          <div className="calcInputs">
            <Slider label="Monthly investment" value={monthly} min={10000} max={500000} step={5000}
                    onChange={setMonthly} format={v=>`₹${v.toLocaleString('en-IN')}`}/>
            <Slider label="Investment period" value={years} min={3} max={30} step={1}
                    onChange={setYears} format={v=>`${v} yr`}/>
            <Slider label="Assumed annual return" value={rate} min={6} max={20} step={0.5}
                    onChange={setRate} format={v=>`${v}%`}/>
          </div>

          <div className="calcResult">
            <span className="calcResultLabel">Projected value in {years} years</span>
            <strong>{inr(future)}</strong>
            <div className="calcBar"><i style={{width:`${investedPct}%`}}/></div>
            <div className="calcSplit">
              <div><span>You invest</span><b>{inr(invested)}</b></div>
              <div><span>Potential growth</span><b className="pos">{inr(gain)}</b></div>
            </div>
            <button onClick={onCta}>Build my investment plan <ArrowRight size={16}/></button>
            <small>Illustrative only. Assumed returns are not guaranteed and actual outcomes will vary with market conditions.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  const [i,setI] = useState(0);
  const move = d => setI(v => (v + d + testimonials.length) % testimonials.length);
  useEffect(()=>{
    const t = setInterval(()=>setI(v=>(v+1)%testimonials.length), 6000);
    return ()=>clearInterval(t);
  },[]);
  const t = testimonials[i];
  return (
    <section className="voices">
      <div className="sectionLabel">07 — IN THEIR WORDS</div>
      <div className="voicesHead">
        <h2>And it’s not just<br/><em>us saying this.</em></h2>
        <div className="voicesNav">
          <button aria-label="Previous" onClick={()=>move(-1)}><ArrowLeft size={17}/></button>
          <button aria-label="Next" onClick={()=>move(1)}><ArrowRight size={17}/></button>
        </div>
      </div>
      <figure className="voiceCard" key={i}>
        <Quote size={34}/>
        <blockquote>{t.quote}</blockquote>
        <figcaption><strong>{t.who}</strong><span>{t.city}</span><i>{t.topic}</i></figcaption>
      </figure>
      <div className="dots">{testimonials.map((_,k)=>
        <button key={k} className={k===i?'on':''} aria-label={`Quote ${k+1}`} onClick={()=>setI(k)}/>)}</div>
    </section>
  );
}

function NavGroup({group, go, scroll}){
  const [open,setOpen] = useState(false);
  return (
    <div className="navGroup" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <button className="navTop" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>
        {group.label} <ChevronDown size={14}/>
      </button>
      <div className={`dropdown${open?' open':''}`}>
        {group.items.map(item=>(
          <button key={item.label} onClick={()=>{setOpen(false); item.anchor ? scroll(item.anchor) : go(item.slug)}}>
            <span>{item.label}</span>
            {item.desc && <small>{item.desc}</small>}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */
function App(){
 const [open,setOpen]=useState(false);
 const [page,setPage]=useState(()=>location.hash.startsWith('#/page/')?location.hash.replace('#/page/',''):null);
 useEffect(()=>{const sync=()=>setPage(location.hash.startsWith('#/page/')?location.hash.replace('#/page/',''):null);addEventListener('hashchange',sync);return()=>removeEventListener('hashchange',sync)},[]);
 const go=slug=>{location.hash=slug?`/page/${slug}`:'';setPage(slug||null);setOpen(false)};
 const scroll=id=>{if(page){go(null);setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),40)}else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 const current=sitePages.find(p=>p.slug===page);

 return <div>
  <div className="utility">
    <span><CheckCircle2 size={13}/> SEBI Registered Portfolio Manager</span>
    <div><button onClick={()=>go('investors-corner')}>Investor’s corner</button><button onClick={()=>go('grievance-redressal')}>Grievance redressal</button></div>
  </div>

  <header>
   <a className="brand" href="#top" onClick={()=>go(null)}><span className="brandmark"><i/><i/><i/></span><span><b>ACE</b>PRO<small>ADVISORS</small></span></a>
   <nav className={open?'open':''}>
    {navGroups.map(g=><NavGroup key={g.label} group={g} go={go} scroll={scroll}/>)}
   </nav>
   <button className="navCta" onClick={()=>go('contact-us')}>Talk to an expert <ArrowRight size={16}/></button>
   <button className="menu" aria-label="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>

  <main id="top">{current?<CmsPage page={current} go={go}/>:<>

   {/* 1 — HERO */}
   <section className="hero">
    <div className="heroCopy">
     <div className="eyebrow"><span/> RESEARCH-LED PORTFOLIO MANAGEMENT</div>
     <h1>Invest with clarity.<br/>Plan for <RotatingGoal/></h1>
     <p>AcePro Advisors builds disciplined, research-driven portfolios around what your money is actually for — and manages them through every market cycle.</p>
     <div className="heroActions">
       <button className="primary" onClick={()=>go('contact-us')}>Start your journey <ArrowRight size={18}/></button>
       <button className="ghost" onClick={()=>scroll('calculator')}>Try the wealth calculator</button>
     </div>
     <div className="trust">
       <div><strong>2010</strong><span>Established</span></div><i/>
       <div><strong>6</strong><span>Investment strategies</span></div><i/>
       <div><strong>30+</strong><span>Years of leadership</span></div><i/>
       <div><strong>3</strong><span>Regulated offerings</span></div>
     </div>
    </div>
    <div className="heroArt"><HeroArt/></div>
   </section>

   {/* 2 — OFFERINGS */}
   <section className="offerings" id="offerings">
    <div className="sectionLabel">01 — WHAT WE OFFER</div>
    <div className="blockHead">
      <h2>Three regulated ways<br/>to <em>put capital to work.</em></h2>
      <p>Each vehicle is managed with the same research process — only the structure, access and mandate differ.</p>
    </div>
    <div className="offerGrid">
      {offerings.map(({slug,badge,art:Art,title,text,meta})=>(
        <article key={slug} onClick={()=>go(slug)}>
          <div className="offerArt"><Art/></div>
          <span className="badge">{badge}</span>
          <h3>{title}</h3>
          <p>{text}</p>
          <footer><small>{meta}</small><span>Explore <ArrowRight size={15}/></span></footer>
        </article>
      ))}
    </div>
    <button className="viewAll" onClick={()=>scroll('directory')}>View all offerings & disclosures <ArrowRight size={15}/></button>
   </section>

   {/* 3 — CALCULATOR */}
   <Calculator onCta={()=>go('contact-us')}/>

   {/* 4 — WHY GUIDANCE */}
   <section className="guidance">
    <div className="guidanceArt"><AdvisorArt/></div>
    <div className="guidanceBody">
      <div className="sectionLabel">04 — WHY GUIDANCE MATTERS</div>
      <h2>Choosing investments is easy.<br/><em>Choosing the right ones isn’t.</em></h2>
      <p>Markets offer no shortage of options. What separates outcomes is a process for deciding which ones deserve your capital — and the discipline to hold them.</p>
      <div className="guidanceList">
        {guidance.map(({icon:Icon,title,text})=>(
          <div key={title}><Icon/><div><strong>{title}</strong><small>{text}</small></div></div>
        ))}
      </div>
      <button className="primary" onClick={()=>go('contact-us')}>Talk to an expert <ArrowRight size={17}/></button>
    </div>
   </section>

   {/* 5 — GOALS */}
   <section className="goals" id="goals">
    <div className="sectionLabel">05 — GOAL-BASED PLANNING</div>
    <div className="blockHead">
      <h2>Your goals,<br/><em>guided by expert planning.</em></h2>
      <p>Every portfolio we manage begins with a question that has nothing to do with markets: what is this money for?</p>
    </div>
    <div className="goalGrid">
      {goals.map(({art:Art,title,text})=>(
        <article key={title}>
          <div className="goalArt"><Art/></div>
          <h3>{title}</h3><p>{text}</p>
          <button onClick={()=>go('contact-us')}>Plan for this <ArrowRight size={14}/></button>
        </article>
      ))}
    </div>
    <button className="primary center" onClick={()=>go('contact-us')}>Build my investment plan <ArrowRight size={17}/></button>
   </section>

   {/* 6 — STRATEGIES */}
   <section className="strategies" id="strategies">
    <div className="sectionLabel light">06 — INVESTMENT STRATEGIES</div>
    <div className="strategyHead">
      <h2>Different ambitions.<br/><em>One disciplined approach.</em></h2>
      <p>Six distinct strategies shaped for varied risk profiles and long-term objectives — all filtered through the same test of quality.</p>
    </div>
    <div className="strategyGrid">{strategies.map(({n,title,tag,text,icon:Icon})=>
      <article key={n}><div className="cardTop"><span>{n}</span><Icon size={22}/></div><div className="tag">{tag}</div><h3>{title}</h3><p>{text}</p><button onClick={()=>go('portfolio-management-services')}>View strategy <ArrowRight size={16}/></button></article>)}
    </div>
   </section>

   {/* 7 — APPROACH */}
   <section className="approach" id="approach">
    <div className="approachPanel">
      <div className="sectionLabel">07 — OUR APPROACH</div>
      <h2>Confidence comes<br/>from a <em>clear process.</em></h2>
      <p>We look beyond short-term market movement to understand the engines of long-term value creation. Three tests decide whether a business enters a portfolio.</p>
      <div className="principles">
        <div><b>01</b><span><strong>Quality of business</strong><small>Durable models, capable leadership and healthy balance sheets.</small></span></div>
        <div><b>02</b><span><strong>Quality of growth</strong><small>Sustainable earnings backed by structural opportunity.</small></span></div>
        <div><b>03</b><span><strong>Quality of price</strong><small>Valuation discipline with a meaningful margin of safety.</small></span></div>
      </div>
    </div>
    <div className="quotePanel">
      <div className="processArt"><ProcessArt/></div>
      <blockquote>“Wealth is built patiently — through clear thinking, consistent process and the courage to stay the course.”</blockquote>
      <p>DEEPAK SHARMA</p><span>Founder &amp; Group Managing Director</span>
    </div>
   </section>

   {/* 8 — TESTIMONIALS */}
   <Testimonials/>

   {/* 9 — RESOURCES */}
   <section className="insights">
    <div className="sectionLabel">08 — INSIGHTS & RESOURCES</div>
    <div className="blockHead">
      <h2>Built on transparency,<br/><em>clarity and long-term thinking.</em></h2>
      <p>Disclosures, company information and investor resources — pulled live from the AcePro website.</p>
    </div>
    <div className="insightGrid">
      {resources.map((r,idx)=>(
        <article key={r.slug} onClick={()=>go(r.slug)}>
          <div className="insightArt"><ArticleArt variant={idx}/></div>
          <div className="insightBody">
            <span><Clock size={12}/> {r.read}</span>
            <h3>{r.label}</h3><p>{r.text}</p>
          </div>
        </article>
      ))}
    </div>
    <button className="viewAll" onClick={()=>scroll('directory')}>View every page <ArrowRight size={15}/></button>
   </section>

   {/* 10 — ABOUT */}
   <section className="about" id="about">
    <div className="sectionLabel">09 — ABOUT ACEPRO</div>
    <div className="aboutGrid">
      <h2>We invest in businesses,<br/>not just <em>tickers.</em></h2>
      <div>
        <p className="lead">AcePro Advisors is the asset management arm of Sarthi Group, bringing institutional rigour and a deeply personal approach to portfolio management.</p>
        <p>Our decisions are grounded in fundamentals, guided by independent thinking, and measured against one clear objective — responsible wealth maximisation for every client. We are a SEBI registered portfolio manager offering PMS, AIF and Fund of Funds mandates to individuals, families and institutions.</p>
        <button onClick={()=>go('about-us-2')}>Read more about us <ArrowRight size={16}/></button>
      </div>
    </div>
    <div className="values">
      <div><span>01</span><ShieldCheck/><h3>Integrity, always</h3><p>Transparent decisions and client interests at the centre of every action.</p></div>
      <div><span>02</span><Target/><h3>Research, deeply</h3><p>Bottom-up analysis and a clear view of long-term business fundamentals.</p></div>
      <div><span>03</span><TrendingUp/><h3>Outcomes, aligned</h3><p>Strategies matched thoughtfully to your goals, horizon and risk appetite.</p></div>
    </div>
   </section>

   {/* 11 — DIRECTORY */}
   <section className="siteDirectory" id="directory">
    <div className="sectionLabel">10 — COMPLETE WEBSITE</div>
    <div className="directoryHead"><h2>Everything you need,<br/><em>all in one place.</em></h2><p>Access every page, disclosure and resource from the current AcePro website.</p></div>
    <div className="directoryGrid">{['Company','Offerings','Resources','Connect'].map(group=>
      <div key={group}><h3>{group}</h3>{sitePages.filter(p=>p.group===group).map(p=>
        <button key={p.slug} onClick={()=>go(p.slug)}><span>{p.label}</span><ArrowRight size={15}/></button>)}</div>)}
    </div>
   </section>

   {/* 12 — CTA */}
   <section className="cta" id="contact">
    <span>YOUR WEALTH. YOUR AMBITION.</span>
    <h2>Let’s build what’s next.</h2>
    <p>Speak with our team to find the portfolio strategy that fits your investment journey.</p>
    <button onClick={()=>go('contact-us')}>Start a conversation <ArrowRight size={18}/></button>
   </section>
   </>}
  </main>

  <footer className="siteFooter">
   <div className="footerTop">
    <div>
      <a className="brand footerBrand" href="#top" onClick={()=>go(null)}><span className="brandmark"><i/><i/><i/></span><span><b>ACE</b>PRO<small>ADVISORS</small></span></a>
      <p>Research-led investing for<br/>enduring wealth.</p>
      <div className="registered"><CheckCircle2/><span>SEBI Registered<br/><small>Portfolio Manager</small></span></div>
    </div>
    <div><h4>Offerings</h4>{offerings.map(o=><button key={o.slug} onClick={()=>go(o.slug)}>{o.title}</button>)}</div>
    <div><h4>Company</h4>{sitePages.filter(p=>p.group==='Company').map(p=><button key={p.slug} onClick={()=>go(p.slug)}>{p.label}</button>)}</div>
    <div><h4>Resources</h4>{sitePages.filter(p=>p.group==='Resources').map(p=><button key={p.slug} onClick={()=>go(p.slug)}>{p.label}</button>)}</div>
    <div><h4>Contact</h4>
      <a href="mailto:info@acepro.in"><Mail size={15}/> info@acepro.in</a>
      <a href="tel:+911123739426"><Phone size={15}/> +91 11 2373 9426</a>
      <span><MapPin size={15}/> New Delhi, India</span>
    </div>
   </div>
   <div className="disclaimer">
    <h5>Risk disclosure</h5>
    <p>Investments in securities markets are subject to market risks. Read all related documents carefully before investing. Past performance is not indicative of future results and does not guarantee future returns. Projections shown by the wealth calculator on this website are illustrative, based on assumptions you select, and are not a promise or forecast of returns. Please consider your investment objective, risk tolerance and financial position before making an investment decision.</p>
   </div>
   <div className="legal">
    <span>© 2026 AcePro Advisors Private Limited. All rights reserved.</span>
    <span>Asset management arm of Sarthi Group</span>
   </div>
  </footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
