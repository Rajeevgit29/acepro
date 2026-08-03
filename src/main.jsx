import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, BarChart3, ShieldCheck, Sparkles, Menu, X, ChevronDown, TrendingUp, Target, Layers3, Leaf, Mail, Phone, MapPin, CheckCircle2} from 'lucide-react';
import './styles.css';

const strategies = [
  {n:'01', title:'Large Cap Strategy', tag:'Steady growth', text:'A quality-first portfolio of established businesses designed for measured, long-term capital appreciation.', icon:ShieldCheck},
  {n:'02', title:'Galaxy Strategy', tag:'All-cap opportunity', text:'A flexible, research-driven approach seeking compelling businesses across market capitalisations.', icon:Sparkles},
  {n:'03', title:'Mid & Small Cap', tag:'High growth', text:'Focused exposure to emerging leaders with strong fundamentals and meaningful runway for growth.', icon:TrendingUp},
  {n:'04', title:'Wealth Builder', tag:'Concentrated quality', text:'A focused portfolio of durable, fundamentally strong businesses built to compound across cycles.', icon:Target},
  {n:'05', title:'Emerging Businesses', tag:'Discovery led', text:'A high-conviction strategy seeking tomorrow’s category leaders at an early stage of their journey.', icon:Leaf},
  {n:'06', title:'C3B Strategy', tag:'Consumption theme', text:'Participation in India’s consumption story across products, services and aspirational categories.', icon:Layers3},
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

function App(){
 const [open,setOpen]=useState(false);
 const [page,setPage]=useState(()=>location.hash.startsWith('#/page/')?location.hash.replace('#/page/',''):null);
 useEffect(()=>{const sync=()=>setPage(location.hash.startsWith('#/page/')?location.hash.replace('#/page/',''):null);addEventListener('hashchange',sync);return()=>removeEventListener('hashchange',sync)},[]);
 const go=slug=>{location.hash=slug?`/page/${slug}`:'';setPage(slug||null);setOpen(false)};
 const scroll=id=>{if(page){go(null);setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),40)}else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 const current=sitePages.find(p=>p.slug===page);
 return <div>
  <header>
   <a className="brand" href="#top" onClick={()=>go(null)}><span className="brandmark"><i/><i/><i/></span><span><b>ACE</b>PRO<small>ADVISORS</small></span></a>
   <nav className={open?'open':''}>
    <button onClick={()=>go('about-us-2')}>About</button><button onClick={()=>go('portfolio-management-services')}>PMS</button><button onClick={()=>go('alternative-investment-fund')}>AIF</button><button onClick={()=>go('fund-of-funds')}>Fund of Funds</button><button onClick={()=>go('investors-corner')}>Investor Corner</button>
   </nav>
   <button className="navCta" onClick={()=>go('contact-us')}>Start a conversation <ArrowRight size={16}/></button>
   <button className="menu" aria-label="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>

  <main id="top">{current?<CmsPage page={current} go={go}/>:<>
   <section className="hero">
    <div className="orb one"/><div className="orb two"/>
    <div className="heroCopy">
     <div className="eyebrow"><span/> SEBI REGISTERED PORTFOLIO MANAGER</div>
     <h1>Purposeful investing.<br/><em>Enduring wealth.</em></h1>
     <p>Research-led portfolio strategies designed around your ambitions—and built to navigate every market cycle with conviction.</p>
     <div className="heroActions"><button className="primary" onClick={()=>scroll('strategies')}>Explore our strategies <ArrowRight size={18}/></button><button className="textBtn" onClick={()=>scroll('about')}>Discover AcePro <span>↓</span></button></div>
     <div className="trust"><div><strong>2010</strong><span>Established</span></div><i/><div><strong>6</strong><span>Investment strategies</span></div><i/><div><strong>30+</strong><span>Years of leadership</span></div></div>
    </div>
    <div className="heroVisual" aria-label="stylised investment growth chart">
      <div className="visualTop"><span>ACEPRO / GROWTH</span><span className="live"><i/> LONG TERM</span></div>
      <div className="chart"><span className="axis a1">₹</span><span className="axis a2">15Y</span><svg viewBox="0 0 600 350" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#65e08e" stopOpacity=".35"/><stop offset="1" stopColor="#65e08e" stopOpacity="0"/></linearGradient></defs><path className="fill" d="M0 315 C80 300 85 260 145 270 S220 210 270 230 S345 160 385 180 S455 95 490 120 S545 45 600 42 L600 350 L0 350Z"/><path className="line" d="M0 315 C80 300 85 260 145 270 S220 210 270 230 S345 160 385 180 S455 95 490 120 S545 45 600 42"/><circle cx="490" cy="120" r="7"/><circle cx="600" cy="42" r="8"/></svg></div>
      <div className="quote"><span>OUR PRINCIPLE</span><p>Clarity over noise.<br/>Discipline over impulse.</p></div>
    </div>
   </section>

   <section className="intro" id="about">
    <div className="sectionLabel">01 — WHO WE ARE</div>
    <div className="introGrid"><h2>We invest in businesses,<br/>not just <em>tickers.</em></h2><div><p className="lead">AcePro Advisors is the asset management arm of Sarthi Group, bringing institutional rigour and a deeply personal approach to portfolio management.</p><p>Our decisions are grounded in fundamentals, guided by independent thinking, and measured against one clear objective—responsible wealth maximisation for every client.</p><a href="#approach">How we think <ArrowRight size={16}/></a></div></div>
    <div className="values"><div><span>01</span><ShieldCheck/><h3>Integrity, always</h3><p>Transparent decisions and client interests at the centre of every action.</p></div><div><span>02</span><BarChart3/><h3>Research, deeply</h3><p>Bottom-up analysis and a clear view of long-term business fundamentals.</p></div><div><span>03</span><Target/><h3>Outcomes, aligned</h3><p>Strategies matched thoughtfully to your goals, horizon and risk appetite.</p></div></div>
   </section>

   <section className="strategies" id="strategies">
    <div className="sectionLabel light">02 — INVESTMENT STRATEGIES</div>
    <div className="strategyHead"><h2>Different ambitions.<br/><em>One disciplined approach.</em></h2><p>Explore a suite of distinct strategies shaped for varied risk profiles and long-term objectives.</p></div>
    <div className="strategyGrid">{strategies.map(({n,title,tag,text,icon:Icon})=><article key={n}><div className="cardTop"><span>{n}</span><Icon size={22}/></div><div className="tag">{tag}</div><h3>{title}</h3><p>{text}</p><button>View strategy <ArrowRight size={16}/></button></article>)}</div>
   </section>

   <section className="approach" id="approach">
    <div className="approachPanel"><div className="sectionLabel">03 — OUR APPROACH</div><h2>Confidence comes<br/>from a clear process.</h2><p>We look beyond short-term market movement to understand the engines of long-term value creation.</p><div className="principles"><div><b>01</b><span><strong>Quality of business</strong><small>Durable models, capable leadership and healthy balance sheets.</small></span></div><div><b>02</b><span><strong>Quality of growth</strong><small>Sustainable earnings backed by structural opportunity.</small></span></div><div><b>03</b><span><strong>Quality of price</strong><small>Valuation discipline with a meaningful margin of safety.</small></span></div></div></div>
    <div className="quotePanel"><div className="rings"/><blockquote>“Wealth is built patiently—through clear thinking, consistent process and the courage to stay the course.”</blockquote><p>DEE﻿PAK SHARMA</p><span>Founder & Group Managing Director</span></div>
   </section>

   <section className="siteDirectory"><div className="sectionLabel">04 — COMPLETE WEBSITE</div><div className="directoryHead"><h2>Everything you need,<br/><em>all in one place.</em></h2><p>Access every page, disclosure and resource from the current AcePro website.</p></div><div className="directoryGrid">{['Company','Offerings','Resources','Connect'].map(group=><div key={group}><h3>{group}</h3>{sitePages.filter(p=>p.group===group).map(p=><button key={p.slug} onClick={()=>go(p.slug)}><span>{p.label}</span><ArrowRight size={15}/></button>)}</div>)}</div></section>
   <section className="cta" id="contact"><span>YOUR WEALTH. YOUR AMBITION.</span><h2>Let’s build what’s next.</h2><p>Speak with our team to find the portfolio strategy that fits your investment journey.</p><button onClick={()=>go('contact-us')}>Start a conversation <ArrowRight size={18}/></button></section>
   </>}
  </main>

  <footer><div className="footerTop"><div><a className="brand footerBrand" href="#top"><span className="brandmark"><i/><i/><i/></span><span><b>ACE</b>PRO<small>ADVISORS</small></span></a><p>Research-led investing for<br/>enduring wealth.</p></div><div><h4>Explore</h4><button onClick={()=>scroll('about')}>About us</button><button onClick={()=>scroll('strategies')}>Strategies</button><button onClick={()=>scroll('approach')}>Our approach</button></div><div><h4>Contact</h4><a href="mailto:info@acepro.in"><Mail size={15}/> info@acepro.in</a><a href="tel:+911123739426"><Phone size={15}/> +91 11 2373 9426</a><span><MapPin size={15}/> New Delhi, India</span></div><div className="registered"><CheckCircle2/><span>SEBI Registered<br/><small>Portfolio Manager</small></span></div></div><div className="legal"><span>© 2026 AcePro Advisors Private Limited</span><span>Investments in securities market are subject to market risks. Read all related documents carefully.</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
