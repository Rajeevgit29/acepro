import React from 'react';

/* Flat vector illustration set for AcePro.
   Single shared palette so every drawing reads as one family. */
export const palette = {
  ink:'#0c211a', slate:'#4a5f57', line:'#cfded6',
  green:'#1aaa63', dark:'#0e6b43', deep:'#071b14',
  lime:'#a9ef76', mint:'#d8f0e1', pale:'#eef8f1',
  amber:'#f5b942', sand:'#ffe0b2', coral:'#ff9d7e',
  sky:'#a8d8f0', skin:'#e8b98f', paper:'#ffffff',
};
const p = palette;

/* ---------- Hero: analyst reading a portfolio dashboard ---------- */
export function HeroArt(){
  return (
    <svg viewBox="0 0 620 500" role="img" aria-label="An investor reviewing a growing portfolio dashboard">
      <defs>
        <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.green} stopOpacity=".38"/>
          <stop offset="1" stopColor={p.green} stopOpacity="0"/>
        </linearGradient>
      </defs>

      <circle cx="345" cy="235" r="205" fill={p.mint}/>
      <circle cx="345" cy="235" r="205" fill="none" stroke={p.green} strokeOpacity=".18"/>
      <circle cx="500" cy="95" r="58" fill={p.lime} opacity=".45"/>

      {/* dashboard card */}
      <rect x="158" y="86" width="392" height="262" rx="20" fill={p.ink} opacity=".1"/>
      <rect x="152" y="78" width="392" height="262" rx="20" fill={p.paper}/>
      <circle cx="180" cy="106" r="5" fill={p.coral}/>
      <circle cx="196" cy="106" r="5" fill={p.amber}/>
      <circle cx="212" cy="106" r="5" fill={p.lime}/>
      <rect x="440" y="98" width="82" height="17" rx="8.5" fill={p.pale}/>
      <circle cx="452" cy="106.5" r="4" fill={p.green}/>

      {/* chart plot */}
      {[0,1,2,3].map(i => <line key={i} x1="180" y1={168+i*36} x2="516" y2={168+i*36} stroke={p.line} strokeDasharray="3 6"/>)}
      <path d="M180 288 C218 279 232 246 268 252 S324 208 358 219 S420 162 452 173 S498 126 516 122 L516 288 Z" fill="url(#heroFill)"/>
      <path d="M180 288 C218 279 232 246 268 252 S324 208 358 219 S420 162 452 173 S498 126 516 122"
            fill="none" stroke={p.green} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="452" cy="173" r="6" fill={p.paper} stroke={p.green} strokeWidth="4"/>
      <circle cx="516" cy="122" r="8" fill={p.green} stroke={p.paper} strokeWidth="4"/>

      {/* card footer stats */}
      <rect x="180" y="306" width="66" height="8" rx="4" fill={p.mint}/>
      <rect x="264" y="306" width="52" height="8" rx="4" fill={p.mint}/>
      <rect x="334" y="306" width="80" height="8" rx="4" fill={p.mint}/>

      {/* floating rupee badge */}
      <rect x="66" y="120" width="132" height="62" rx="16" fill={p.paper} stroke={p.line}/>
      <circle cx="100" cy="151" r="19" fill={p.green}/>
      <text x="100" y="158" textAnchor="middle" fill={p.paper} fontSize="20" fontWeight="700" fontFamily="Manrope, sans-serif">₹</text>
      <rect x="128" y="141" width="54" height="7" rx="3.5" fill={p.mint}/>
      <rect x="128" y="156" width="34" height="7" rx="3.5" fill={p.pale}/>

      {/* floating growth pill */}
      <rect x="452" y="290" width="130" height="56" rx="16" fill={p.paper} stroke={p.line}/>
      <path d="M474 324 L490 306 L504 316 L522 296" fill="none" stroke={p.green} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M512 296 H524 V308" fill="none" stroke={p.green} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="540" y="310" width="28" height="7" rx="3.5" fill={p.mint}/>

      {/* investor seen from behind */}
      <path d="M64 466 Q64 380 124 380 Q184 380 184 466 Z" fill={p.dark}/>
      <path d="M124 380 Q160 380 174 412 L150 466 H124 Z" fill={p.green} opacity=".55"/>
      <circle cx="124" cy="336" r="32" fill={p.skin}/>
      <path d="M92 336 Q92 300 124 300 Q156 300 156 336 Q146 318 124 320 Q102 322 92 336 Z" fill={p.ink}/>
      <path d="M172 396 L216 350" stroke={p.dark} strokeWidth="19" strokeLinecap="round"/>
      <circle cx="222" cy="344" r="12" fill={p.skin}/>

      {/* plant */}
      <path d="M556 466 L562 414 H602 L608 466 Z" fill={p.coral}/>
      <path d="M582 414 V368" stroke={p.dark} strokeWidth="5" strokeLinecap="round"/>
      <path d="M582 386 Q548 380 550 348 Q582 350 582 386 Z" fill={p.green}/>
      <path d="M582 376 Q616 368 616 338 Q584 342 582 376 Z" fill={p.lime}/>

      <line x1="24" y1="466" x2="596" y2="466" stroke={p.line} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/* ---------- Offering illustrations ---------- */
export function PmsArt(){
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Portfolio management">
      <circle cx="100" cy="76" r="60" fill={p.mint}/>
      <rect x="46" y="62" width="108" height="66" rx="10" fill={p.paper} stroke={p.line}/>
      <path d="M82 62V52a8 8 0 018-8h20a8 8 0 018 8v10" fill="none" stroke={p.dark} strokeWidth="6" strokeLinecap="round"/>
      <rect x="46" y="82" width="108" height="8" fill={p.pale}/>
      <rect x="60" y="98" width="14" height="18" rx="3" fill={p.line}/>
      <rect x="80" y="90" width="14" height="26" rx="3" fill={p.green}/>
      <rect x="100" y="80" width="14" height="36" rx="3" fill={p.dark}/>
      <rect x="120" y="70" width="14" height="46" rx="3" fill={p.lime}/>
      <circle cx="150" cy="42" r="18" fill={p.paper} stroke={p.green} strokeWidth="4"/>
      <path d="M162 54L172 64" stroke={p.green} strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

export function AifArt(){
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Alternative investment fund">
      <circle cx="100" cy="76" r="60" fill={p.pale}/>
      <path d="M100 34l48 26-48 26-48-26z" fill={p.lime}/>
      <path d="M100 60L148 86l-48 26-48-26z" fill={p.green}/>
      <path d="M100 86l48 26-48 26-48-26z" fill={p.dark}/>
      <circle cx="156" cy="40" r="13" fill={p.amber}/>
      <path d="M156 32l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8z" fill={p.paper}/>
    </svg>
  );
}

export function FofArt(){
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Fund of funds">
      <circle cx="100" cy="76" r="60" fill={p.mint}/>
      {[[62,38,p.green],[100,30,p.lime],[138,38,p.dark]].map(([x,y,f],i)=>(
        <circle key={i} cx={x} cy={y} r="15" fill={f}/>
      ))}
      <path d="M62 54q0 26 38 30M100 46v38M138 54q0 26-38 30" fill="none" stroke={p.line} strokeWidth="3" strokeDasharray="4 5"/>
      <path d="M56 92h88l-11 34a8 8 0 01-7.6 5.4H74.6A8 8 0 0167 126z" fill={p.paper} stroke={p.dark} strokeWidth="4" strokeLinejoin="round"/>
      <rect x="48" y="84" width="104" height="12" rx="6" fill={p.dark}/>
      <text x="100" y="120" textAnchor="middle" fill={p.dark} fontSize="20" fontWeight="700" fontFamily="Manrope, sans-serif">₹</text>
    </svg>
  );
}

/* ---------- Goal illustrations ---------- */
function GoalFrame({tint, children, label}){
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={label}>
      <rect x="14" y="12" width="172" height="126" rx="26" fill={tint}/>
      {children}
    </svg>
  );
}

export function GoalRetire(){
  return (
    <GoalFrame tint={p.sand} label="Retirement planning">
      <circle cx="150" cy="46" r="18" fill={p.amber}/>
      <path d="M52 120V86a14 14 0 0114-14h44a14 14 0 0114 14v34" fill={p.dark}/>
      <rect x="44" y="94" width="90" height="26" rx="9" fill={p.green}/>
      <rect x="44" y="88" width="14" height="34" rx="7" fill={p.lime}/>
      <rect x="120" y="88" width="14" height="34" rx="7" fill={p.lime}/>
      <rect x="52" y="120" width="8" height="12" rx="4" fill={p.ink}/>
      <rect x="118" y="120" width="8" height="12" rx="4" fill={p.ink}/>
      <path d="M140 120h20l-3 13h-14z" fill={p.coral}/>
      <path d="M150 120v-18" stroke={p.dark} strokeWidth="4" strokeLinecap="round"/>
      <path d="M150 108q-14-2-12-16 14 2 12 16z" fill={p.green}/>
      <path d="M150 112q14-4 13-18-14 3-13 18z" fill={p.lime}/>
    </GoalFrame>
  );
}

export function GoalEducation(){
  return (
    <GoalFrame tint={p.sky} label="Children's education">
      <rect x="60" y="98" width="80" height="12" rx="4" fill={p.coral}/>
      <rect x="56" y="86" width="88" height="12" rx="4" fill={p.amber}/>
      <rect x="64" y="74" width="72" height="12" rx="4" fill={p.paper}/>
      <path d="M100 34l48 20-48 20-48-20z" fill={p.dark}/>
      <path d="M76 62v14c0 8 11 13 24 13s24-5 24-13V62" fill={p.green}/>
      <path d="M148 54v26" stroke={p.ink} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="148" cy="84" r="5" fill={p.lime}/>
    </GoalFrame>
  );
}

export function GoalWealth(){
  return (
    <GoalFrame tint={p.mint} label="Long term wealth creation">
      {[[52,104,3],[86,92,5],[120,76,7]].map(([x,y,n],i)=>(
        <g key={i}>
          {Array.from({length:n}).map((_,k)=>(
            <ellipse key={k} cx={x+14} cy={y+22-k*9} rx="20" ry="7"
                     fill={k%2 ? p.lime : p.green} stroke={p.dark} strokeWidth="2"/>
          ))}
        </g>
      ))}
      <path d="M134 60V38" stroke={p.dark} strokeWidth="4" strokeLinecap="round"/>
      <path d="M134 48q-20-2-18-20 20 2 18 20z" fill={p.dark}/>
      <path d="M134 42q20-4 20-22-20 2-20 22z" fill={p.green}/>
      <line x1="34" y1="126" x2="166" y2="126" stroke={p.dark} strokeWidth="3" strokeLinecap="round"/>
    </GoalFrame>
  );
}

export function GoalHome(){
  return (
    <GoalFrame tint={p.pale} label="Buying a home">
      <path d="M100 38l54 40H46z" fill={p.dark}/>
      <rect x="60" y="76" width="80" height="48" rx="6" fill={p.paper} stroke={p.line} strokeWidth="3"/>
      <rect x="90" y="94" width="22" height="30" rx="4" fill={p.green}/>
      <rect x="68" y="88" width="16" height="16" rx="3" fill={p.lime}/>
      <rect x="122" y="88" width="14" height="16" rx="3" fill={p.sky}/>
      <circle cx="94" cy="110" r="2.5" fill={p.lime}/>
      <path d="M150 124v-18" stroke={p.dark} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="150" cy="98" r="12" fill={p.green}/>
    </GoalFrame>
  );
}

export function GoalLegacy(){
  return (
    <GoalFrame tint={p.mint} label="Legacy and estate planning">
      {/* a shield sheltering a growing tree — capital stewarded for the next generation */}
      <path d="M100 26l44 15v33c0 28-20 46-44 54-24-8-44-26-44-54V41z" fill={p.dark}/>
      <path d="M100 39l31 11v25c0 20-14 33-31 40-17-7-31-20-31-40V50z" fill={p.pale}/>
      <path d="M100 112V68" stroke={p.dark} strokeWidth="5" strokeLinecap="round"/>
      <path d="M100 88L86 76M100 82l14-12" stroke={p.dark} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="100" cy="58" r="15" fill={p.green}/>
      <circle cx="82" cy="70" r="11" fill={p.lime}/>
      <circle cx="118" cy="66" r="11" fill={p.green}/>
    </GoalFrame>
  );
}

export function GoalCorpus(){
  return (
    <GoalFrame tint={p.sky} label="Emergency corpus">
      <path d="M100 34c30 0 46 20 48 34H52c2-14 18-34 48-34z" fill={p.coral}/>
      <path d="M100 34v56" stroke={p.ink} strokeWidth="4" strokeLinecap="round"/>
      <path d="M100 90q0 14 14 14t14-12" fill="none" stroke={p.ink} strokeWidth="4" strokeLinecap="round"/>
      {[[64,86],[80,100],[136,86]].map(([x,y],i)=>(
        <line key={i} x1={x} y1={y} x2={x-4} y2={y+16} stroke={p.paper} strokeWidth="4" strokeLinecap="round"/>
      ))}
      <ellipse cx="66" cy="122" rx="20" ry="7" fill={p.green} stroke={p.dark} strokeWidth="2"/>
      <ellipse cx="66" cy="114" rx="20" ry="7" fill={p.lime} stroke={p.dark} strokeWidth="2"/>
    </GoalFrame>
  );
}

/* ---------- Section illustrations ---------- */
export function CalculatorArt(){
  return (
    <svg viewBox="0 0 320 260" role="img" aria-label="Projecting the growth of a monthly investment">
      <circle cx="170" cy="126" r="112" fill={p.pale}/>
      <rect x="30" y="52" width="116" height="164" rx="16" fill={p.paper} stroke={p.line} strokeWidth="3"/>
      <rect x="44" y="66" width="88" height="34" rx="8" fill={p.deep}/>
      <text x="122" y="90" textAnchor="end" fill={p.lime} fontSize="18" fontWeight="700" fontFamily="Manrope, sans-serif">₹</text>
      {[0,1,2,3].map(r => [0,1,2].map(k => (
        <rect key={`${r}-${k}`} x={44+k*32} y={112+r*24} width="24" height="17" rx="5"
              fill={r===3 && k===2 ? p.green : p.pale}/>
      )))}
      <rect x="172" y="90" width="126" height="126" rx="16" fill={p.deep}/>
      <path d="M188 194 C206 190 214 168 232 170 S262 138 278 142 S294 112 288 108" fill="none"
            stroke={p.lime} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="286" cy="110" r="7" fill={p.lime}/>
      <rect x="188" y="204" width="46" height="6" rx="3" fill="#1e5340"/>
      <circle cx="240" cy="52" r="26" fill={p.amber}/>
      <text x="240" y="62" textAnchor="middle" fill={p.paper} fontSize="26" fontWeight="700" fontFamily="Manrope, sans-serif">₹</text>
    </svg>
  );
}

export function AdvisorArt(){
  return (
    <svg viewBox="0 0 320 280" role="img" aria-label="An adviser walking a client through a plan">
      <circle cx="160" cy="140" r="122" fill={p.mint}/>
      <rect x="96" y="42" width="150" height="120" rx="14" fill={p.paper} stroke={p.line} strokeWidth="3"/>
      {[0,1,2].map(i=>(
        <g key={i}>
          <circle cx="120" cy={76+i*30} r="8" fill={i===0?p.green:p.pale}/>
          {i===0 && <path d="M116 76l3 4 6-7" fill="none" stroke={p.paper} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>}
          <rect x="138" y={71+i*30} width={i===2?60:88} height="9" rx="4.5" fill={p.pale}/>
        </g>
      ))}
      <path d="M96 162l-16 22 34-6z" fill={p.paper}/>
      {/* adviser */}
      <path d="M22 262q0-58 42-58t42 58z" fill={p.dark}/>
      <circle cx="64" cy="176" r="24" fill={p.skin}/>
      <path d="M40 176q0-26 24-26t24 26q-8-12-24-10t-24 10z" fill={p.ink}/>
      {/* client */}
      <path d="M214 262q0-52 38-52t38 52z" fill={p.green}/>
      <circle cx="252" cy="188" r="22" fill={p.skin}/>
      <path d="M230 186q2-24 22-24t22 24q0-12-22-12t-22 12z" fill={p.coral}/>
      <line x1="12" y1="262" x2="308" y2="262" stroke={p.line} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function ProcessArt(){
  return (
    <svg viewBox="0 0 300 300" role="img" aria-label="A three-stage research process">
      <circle cx="150" cy="150" r="126" fill="none" stroke={p.line} strokeDasharray="5 8"/>
      <circle cx="150" cy="150" r="60" fill={p.deep}/>
      <text x="150" y="145" textAnchor="middle" fill={p.lime} fontSize="13" letterSpacing="2" fontFamily="Manrope, sans-serif">QUALITY</text>
      <text x="150" y="166" textAnchor="middle" fill="#8fb0a2" fontSize="10" letterSpacing="2" fontFamily="Manrope, sans-serif">FILTER</text>

      <g>
        <circle cx="150" cy="34" r="34" fill={p.green}/>
        <rect x="136" y="26" width="7" height="18" rx="3.5" fill={p.paper}/>
        <rect x="147" y="20" width="7" height="24" rx="3.5" fill={p.lime}/>
        <rect x="158" y="30" width="7" height="14" rx="3.5" fill={p.paper}/>
      </g>
      <g>
        <circle cx="41" cy="216" r="34" fill={p.lime}/>
        <circle cx="36" cy="211" r="13" fill="none" stroke={p.ink} strokeWidth="5"/>
        <path d="M46 221l10 10" stroke={p.ink} strokeWidth="5" strokeLinecap="round"/>
      </g>
      <g>
        <circle cx="259" cy="216" r="34" fill={p.dark}/>
        <path d="M259 199l14 5v11c0 9-6 15-14 18-8-3-14-9-14-18v-11z" fill={p.lime}/>
      </g>
    </svg>
  );
}

export function ArticleArt({variant=0}){
  const sets = [[p.mint,p.green],[p.sky,p.dark],[p.sand,p.amber],[p.pale,p.lime]];
  const [bg, fg] = sets[variant % sets.length];
  return (
    <svg viewBox="0 0 320 170" role="img" aria-label="Research note" preserveAspectRatio="none">
      <rect width="320" height="170" fill={bg}/>
      <path d="M0 132c48-6 62-42 104-36s58-40 96-34 76-22 120-32v100z" fill={fg} opacity=".55"/>
      <path d="M0 150c52 0 74-28 116-24s60-30 100-24 62-14 104-20v88H0z" fill={fg}/>
      <circle cx="262" cy="42" r="20" fill={p.paper} opacity=".85"/>
      <rect x="24" y="26" width="56" height="9" rx="4.5" fill={p.paper} opacity=".8"/>
      <rect x="24" y="44" width="94" height="9" rx="4.5" fill={p.paper} opacity=".5"/>
    </svg>
  );
}

/* ---------- Small pictograms for "why guidance matters" ---------- */
const pictoProps = {fill:'none', stroke:p.dark, strokeWidth:5, strokeLinecap:'round', strokeLinejoin:'round'};

export function IconGoals(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill={p.mint}/>
      <circle cx="32" cy="32" r="15" {...pictoProps}/>
      <circle cx="32" cy="32" r="5" fill={p.green}/>
      <path d="M32 32l18-18M44 14h8v8" {...pictoProps} stroke={p.green}/>
    </svg>
  );
}
export function IconResearch(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill={p.mint}/>
      <circle cx="29" cy="28" r="13" {...pictoProps}/>
      <path d="M39 38l10 11" {...pictoProps}/>
      <path d="M24 30l4 5 7-9" {...pictoProps} stroke={p.green}/>
    </svg>
  );
}
export function IconTech(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill={p.mint}/>
      <rect x="21" y="21" width="22" height="22" rx="5" {...pictoProps}/>
      <rect x="28" y="28" width="8" height="8" rx="2" fill={p.green}/>
      <path d="M27 21v-7M37 21v-7M27 50v-7M37 50v-7M21 27h-7M21 37h-7M50 27h-7M50 37h-7" {...pictoProps}/>
    </svg>
  );
}
export function IconPatience(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill={p.mint}/>
      <circle cx="32" cy="33" r="16" {...pictoProps}/>
      <path d="M32 24v9l7 5" {...pictoProps} stroke={p.green}/>
      <path d="M26 12h12" {...pictoProps}/>
    </svg>
  );
}
