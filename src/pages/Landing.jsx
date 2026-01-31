import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Users, Layout, TrendingUp, Clock, 
  Globe, ArrowRight, ShieldCheck, Zap, Star,
  Smartphone, Award, PlayCircle, MessageCircle, Heart, XCircle, Rocket, Target, MousePointer2,
  Sparkles, ZapOff, CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ mins: 45, secs: 0 });
const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden">
{/* 1. PROFESSIONAL NAVIGATION BAR - Standard High-End Layout */}
      <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[110] border-b border-slate-50 shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* GROW WITH DAYA LOGO - Mirroring the CoachEasily branding style */}
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <Rocket className="text-white -rotate-3 group-hover:rotate-0 transition-transform duration-500" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-950 uppercase italic font-serif leading-none">
              Grow with <span className="text-blue-600">Daya</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-none mt-1">
              Digital Roadmap
            </span>
          </div>
        </div>
        
        {/* CONTACT BUTTON - High-contrast standard UI element */}
        <button onClick={() => navigate('/contact')}
        className="bg-amber-400 hover:bg-amber-500 text-black font-black py-2.5 px-6 md:px-10 rounded-2xl text-xs md:text-sm shadow-[0_4px_0_0_#d97706] hover:shadow-[0_2px_0_0_#d97706] hover:translate-y-[2px] transition-all active:translate-y-[4px] active:shadow-none uppercase tracking-widest font-sans group">
          <span className="flex items-center gap-2">
            Contact Us
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </nav>

      {/* 2. HERO SECTION - Premium Architectural Design */}
      <header className="relative pt-20 pb-28 px-4 bg-white overflow-hidden font-sans border-b border-slate-50">
        
        {/* STRUCTURAL BACKGROUND: Standard 32px radial grid for high-end look */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`, 
            backgroundSize: '32px 32px' 
          }}
        ></div>

        {/* SOFT AMBIENT LIGHTING: Subtle glows for premium depth */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* TOP PILL: Professional mono-styled badge */}
          <div className="inline-flex items-center gap-3 bg-slate-950 text-white px-6 py-2.5 rounded-full mb-10 shadow-xl ring-4 ring-slate-50 transition-all hover:ring-blue-100 cursor-default group">
             <div className="flex gap-1.5">
                <Sparkles size={14} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                <Rocket size={14} className="text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
             </div>
             <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] font-mono leading-none">
                डिजिटल उद्योजक बनण्याचा प्रवास इथून सुरू होतो
             </span>
          </div>
          
          {/* REFINED TYPOGRAPHY: Balanced font sizes for standard premium UI */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05] text-slate-950 font-serif">
            Grow with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 italic font-medium">Daya</span> <br/>
            <span className="text-slate-900 font-bold text-3xl md:text-5xl tracking-tight leading-tight">नेमकं काय आहे?</span>
          </h1>
          
          {/* CONTENT BLOCKS: Clear hierarchy based on PDF content */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16 px-4">
            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed italic font-sans max-w-3xl mx-auto border-l-4 border-blue-600 pl-6 py-2">
              "हे केवळ एक वेबिनार नाही – हा एक <span className="text-blue-600 font-black not-italic border-b-2 border-blue-100">ऑनलाइन व्यवसाय</span> सुरू करण्याचा संपूर्ण मार्ग आहे."
            </p>
            
            <p className="text-sm md:text-lg text-slate-500 font-bold leading-relaxed font-sans max-w-2xl mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
              आज अनेक लोक YouTube, Instagram, Website बद्दल ऐकतात पण योग्य दिशा, सिस्टम आणि मार्गदर्शन नसल्यामुळे सुरुवातच करत नाहीत.
            </p>
          </div>

          {/* ACTION AREA */}
          <div className="flex flex-col items-center justify-center gap-12">
            
            {/* MAIN BUTTON: High-contrast slab-style button */}
            <button onClick={() => navigate('/register')}
             className="group relative w-full md:w-auto bg-blue-600 text-white text-xl md:text-2xl font-black py-7 px-16 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] hover:bg-slate-950 transition-all duration-500 transform hover:-translate-y-2 active:scale-95">
              मोफत वेबिनारसाठी नोंदणी करा
              <ArrowRight className="inline-block ml-4 group-hover:translate-x-4 transition-transform duration-500" size={32} />
            </button>
            
            {/* COMPACT STATS GRID: Smaller, professional metadata */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-6 px-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-slate-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <div className="flex items-center gap-4 relative z-10">
                  <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => <div key={i} className="h-9 w-9 rounded-full border-2 border-white bg-slate-200 shadow-sm" />)}
                  </div>
                  <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-none">
                     Join <span className="text-slate-950 font-bold">5,170+</span> Students
                  </p>
               </div>
               <div className="h-8 w-px bg-slate-200 hidden md:block relative z-10"></div>
               <div className="flex items-center gap-3 relative z-10">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                    <Clock size={18} />
                  </div>
                  <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-none">
                     Duration: <span className="text-slate-950 italic">30 Minutes</span>
                  </p>
               </div>
            </div>
          </div>

        </div>
      </header>

{/* 3. TRANSFORMATION - Premium Glass Bento with Images */}
<section className="py-24 px-4 bg-[#F8FAFC] relative overflow-hidden font-sans">
  {/* Background Decoration Pattern */}
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }}>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="mb-16 text-center md:text-left">
       <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          The Transformation Journey
       </div>
       <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 italic font-serif text-slate-950 leading-[1.1]">
         तुमच्यासाठी काय <span className="text-blue-600">बदल</span> <br/> घडवू शकते?
       </h2>
       <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        { 
          from: "गोंधळ", 
          to: "स्पष्टता", 
          icon: <Target className="text-amber-500" />, 
          img: "https://images.unsplash.com/photo-1462556791646-c201b8241a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D", // Image representing focus/planning
          shadow: "hover:shadow-amber-200/50" 
        },
        { 
          from: "मला काहीच येत नाही", 
          to: "आत्मविश्वास", 
          icon: <Heart className="text-rose-500" />, 
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", // Image representing confidence/collaboration
          shadow: "hover:shadow-rose-200/50" 
        },
        { 
          from: "शिकणारी व्यक्ती", 
          to: "कमाई करणारी व्यक्ती", 
          icon: <TrendingUp className="text-emerald-500" />, 
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", // Image representing growth/results
          shadow: "hover:shadow-emerald-200/50" 
        }
      ].map((item, i) => (
        <div key={i} className={`bg-white rounded-[3.5rem] border border-slate-200 shadow-sm transition-all duration-700 group relative overflow-hidden hover:-translate-y-3 hover:shadow-2xl ${item.shadow}`}>
          
          {/* Card Image Wrapper */}
          <div className="h-48 w-full overflow-hidden relative">
            <img 
              src={item.img} 
              alt={item.to} 
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>

          <div className="p-10 pt-2 relative z-10 text-center md:text-left">
            <div className="mb-6 p-5 bg-slate-50 rounded-[1.5rem] w-fit mx-auto md:mx-0 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 group-hover:-rotate-6 shadow-sm">
              {item.icon}
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-400 line-through font-black text-[10px] uppercase font-mono tracking-[0.2em]">{item.from}</p>
              <div className="w-8 h-1 bg-slate-200 group-hover:w-full transition-all duration-500 rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight font-serif italic tracking-tight uppercase">
                {item.to}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                {i === 0 && "काय करायचं आणि कसं करायचं याची स्टेप-बाय-स्टेप माहिती."}
                {i === 1 && "योग्य उद्योजक मानसिकता तयार करून सातत्य ठेवण्याची ताकद."}
                {i === 2 && "फक्त माहिती न घेता प्रत्यक्ष बिझनेस उभा करण्याचा प्रवास."}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 bg-blue-600/5 border border-blue-100 p-8 rounded-[3rem] text-center">
      <p className="text-xl md:text-3xl font-black italic text-blue-700 font-serif tracking-tight">
        हे सगळं फक्त ३० मिनिटांत सुरू होतं. 🚀
      </p>
    </div>
  </div>
</section>

 {/* 4. PRACTICAL SYSTEM - Standard High-End Cinematic Section */}
<section className="relative bg-[#020617] py-24 px-4 rounded-[4rem] mx-4 md:mx-10 my-12 overflow-hidden border border-white/5">
  {/* ENHANCED HEX GRID: Reduced size to 32px for a detailed high-tech look */}
  <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
       style={{ 
         backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='28' viewBox='0 0 16 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 5.25l7.5 4.33v8.66L8 22.58l-7.5-4.33V9.58L8 5.25z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
         backgroundSize: '32px 56px'
       }}>
  </div>
  
  {/* AMBIENT LIGHTING: Strategic blue glow to highlight the content */}
  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.15),_transparent_60%)]"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <div className="space-y-10">
      {/* BALANCED TYPOGRAPHY: Reduced from 8xl to standard 6xl for premium feel */}
      <h2 className="text-white text-4xl md:text-6xl font-black leading-[1.1] font-serif tracking-tight">
        आम्ही फक्त <span className="text-blue-500 italic underline decoration-blue-500/20 underline-offset-8">सांगत नाही</span> दाखवतो
      </h2>
      
      {/* LIST ITEMS: Glassmorphism effect with balanced spacing */}
      <div className="grid gap-4">
        {[
          "प्रत्यक्ष लाइव्ह स्क्रीन डेमो",
          "वेबसाइट कशी काम करते ते दाखवले जाते",
          "लीड्स कशा येतात ते समजावले जाते",
          "ऑर्डर आणि कमाई कशी होते ते स्पष्ट केले जाते"
        ].map((text, i) => (
          <div key={i} className="flex gap-4 p-5 bg-white/[0.03] rounded-2xl border border-white/5 items-center backdrop-blur-md hover:bg-white/[0.07] transition-all group border-l-4 border-l-blue-600">
            <div className="bg-blue-600/20 p-1.5 rounded-full group-hover:scale-110 transition-transform">
               <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
            </div>
            <span className="text-white text-base md:text-lg font-bold font-sans tracking-tight opacity-90">{text}</span>
          </div>
        ))}
      </div>
      
      <p className="text-slate-500 font-bold italic font-sans text-xs md:text-sm tracking-wide flex items-center gap-3">
        <span className="h-px w-8 bg-slate-800"></span>
        कोणताही बनावट दावा नाही • रातोरात श्रीमंत होण्याच्या गोष्टी नाहीत
      </p>
    </div>

    {/* VIDEO PREVIEW: Enhanced with deeper shadow and smaller play button */}
    <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video flex items-center justify-center cursor-pointer shadow-[0_0_100px_rgba(37,99,235,0.15)] group transition-transform hover:scale-[1.02] duration-500">
       <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
       <PlayCircle className="text-white group-hover:text-blue-500 group-hover:scale-110 transition-all duration-700 drop-shadow-2xl" size={90} strokeWidth={1} />
       
       <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/10 shadow-2xl">
          <p className="text-white font-black text-[9px] tracking-[0.25em] uppercase flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></div>
             Live Demo Access
          </p>
       </div>
    </div>
  </div>
</section>

{/* 5. COMMUNITY - Premium Bento Grid Section */}
<section className="py-24 px-4 bg-white relative overflow-hidden">
  {/* UNIQUE GRID BACKGROUND: A subtle, large-scale structural grid */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none" 
    style={{ 
      backgroundImage: `linear-gradient(#e2e8f0 1.2px, transparent 1.2px), linear-gradient(90deg, #e2e8f0 1.2px, transparent 1.2px)`, 
      backgroundSize: '80px 80px' 
    }}
  ></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* BALANCED HEADLINE: Reduced from 8xl to 6xl for a cleaner look */}
    <h2 className="text-3xl md:text-6xl font-black mb-8 italic font-serif tracking-tighter text-slate-950">
      Grow with Daya Community
    </h2>
    
    <p className="text-blue-700 font-black text-lg md:text-2xl mb-16 uppercase tracking-[0.15em] italic font-mono decoration-blue-100 underline underline-offset-8">
      खरी ताकद इथे आहे - तो एकटा राहत नाही.
    </p>
    
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
      {[
        { l: "समान विचारांचे लोग", i: <Users />, c: "text-blue-600", bg: "bg-blue-50/50" },
        { l: "सतत मार्गदर्शन", i: <MessageCircle />, c: "text-emerald-600", bg: "bg-emerald-50/50" },
        { l: "काम करणारी सिस्टम", i: <Layout />, c: "text-indigo-600", bg: "bg-indigo-50/50" },
        { l: "रेडी रिसोर्सेस", i: <Smartphone />, c: "text-violet-600", bg: "bg-violet-50/50" },
        { l: "मानसिक सपोर्ट + मोटिवेशन", i: <Heart />, c: "text-rose-600", bg: "bg-rose-50/50" }
      ].map((item, i) => (
        <div key={i} className={`p-8 md:p-10 rounded-[2.5rem] ${item.bg} border border-slate-100 backdrop-blur-sm flex flex-col items-center shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 group hover:-translate-y-2`}>
          <div className={`${item.c} mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-white p-4 rounded-2xl shadow-sm border border-slate-50`}>
            {item.i}
          </div>
          <span className="font-bold text-xs md:text-sm text-slate-800 leading-tight font-sans tracking-tight uppercase group-hover:text-blue-700 transition-colors">
            {item.l}
          </span>
        </div>
      ))}
    </div>

    {/* CALLOUT: Enhanced with smaller font and sleek icon */}
    <div className="mt-16 inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-black text-base md:text-xl shadow-2xl hover:scale-105 transition-transform cursor-default">
       <MousePointer2 size={20} className="text-blue-400 animate-bounce" />
       <span className="tracking-tight italic font-serif">इथे फक्त शिकवले जात नाही, इथे व्यवसाय उभा केला जातो.</span>
    </div>
  </div>
</section>

{/* 6. SYSTEM VS NO-PRODUCT - Premium Standard Cards */}
<section className="py-24 px-4 bg-[#FAFAFA] relative overflow-hidden">
  {/* BACKGROUND DECORATION */}
  <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }}>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 font-sans relative z-10">
    
    {/* CARD 1: WEBSITE + SYSTEM */}
    <div className="group relative bg-white p-10 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden">
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/5 rounded-bl-[10rem] group-hover:bg-blue-500/10 transition-colors"></div>
      
      <div className="relative z-10">
        <div className="mb-8 bg-blue-50 text-blue-600 p-4 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <Layout size={32} />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black mb-8 italic font-serif text-slate-950 leading-tight">
          वेबसाइट + सिस्टम = <br/> <span className="text-blue-600">व्यवसायाची पायाभरणी</span>
        </h3>
        
        <ul className="space-y-4 mb-10">
          {["मोबाइल-फ्रेंडली", "ऑटोमॅटिक लीड जनरेशन", "WhatsApp / Call कनेक्टेड", "नविशक्यांसाठी सोपी"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 group/item">
              <div className="bg-emerald-100 p-1 rounded-full group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                <CheckCircle size={16} />
              </div>
              <span className="font-bold text-slate-600 text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-slate-950 p-5 rounded-2xl border-l-4 border-blue-500 shadow-lg group-hover:translate-x-2 transition-transform duration-500">
          <p className="text-[11px] md:text-xs font-black text-blue-400 uppercase tracking-widest leading-relaxed mb-1">PRO GUIDANCE</p>
          <p className="text-white font-bold text-sm md:text-base italic">टेक्निकल गोष्टी आम्ही सांभाळतो. तुम्ही फक्त ग्राहक आणि कमाईवर लक्ष द्या.</p>
        </div>
      </div>
    </div>
    
    {/* CARD 2: NO PRODUCT */}
    <div className="group relative bg-slate-950 p-10 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl transition-all duration-700 overflow-hidden text-white">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-blue-600/10 rounded-tr-[10rem] blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="mb-8 bg-white/10 text-blue-400 p-4 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <Smartphone size={32} />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black mb-4 italic font-serif leading-tight">
          उत्पादन नसतानाही <br/> <span className="text-blue-500">व्यवसाय कसा?</span>
        </h3>
        
        <p className="text-blue-400 font-bold text-base md:text-lg mb-6 italic tracking-tight underline decoration-white/20 underline-offset-8 decoration-2">हा सगळ्यात मोठा प्रश्न असतो.</p>
        
        <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed mb-10 group-hover:text-slate-200 transition-colors">
          Grow with Daya मध्ये स्वतःचे उत्पादन नसलं तरी चालतं. तयार डिजिटल/फिजिकल उत्पादने उपलब्ध आहेत. तुम्ही फक्त मार्केटिंग आणि सेल्स करा.
        </p>
        
        <div className="relative inline-block px-8 py-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-amber-400/50 transition-colors">
          <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 font-black text-base md:text-xl uppercase italic font-mono tracking-tighter group-hover:text-slate-950 transition-colors">
            No Product, No Problem!
          </span>
        </div>
      </div>
    </div>

  </div>
</section>
{/* 7. MINDSET & TIME - Advanced Duo Section */}
<section className="py-24 px-4 bg-white relative overflow-hidden font-sans">
  {/* UNIQUE BACKGROUND: Subtle Architectural Grid for Professionalism */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none" 
    style={{ 
      backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`, 
      backgroundSize: '40px 40px' 
    }}
  ></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* BALANCED TYPOGRAPHY: Reduced from 7xl to 5xl for better visual flow */}
    <h2 className="text-3xl md:text-5xl font-black mb-16 italic underline decoration-blue-600 decoration-8 underline-offset-[12px] font-serif tracking-tight text-slate-950">
      मानसिकता + सिस्टम = यशस्वी व्यवसाय
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8 text-left">
      {/* CARD 1: WHAT YOU LEARN */}
      <div className="group bg-slate-900 text-white p-10 md:p-14 rounded-[3.5rem] border border-white/5 shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-blue-600/5 rounded-bl-full group-hover:bg-blue-600/10 transition-colors"></div>
        
        <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
          <Heart size={28} />
        </div>
        
        <h4 className="text-xs font-black mb-6 uppercase tracking-[0.25em] font-mono text-blue-400">तुम्ही काय शिकता?</h4>
        
        <ul className="space-y-6 font-bold italic text-lg md:text-xl tracking-tight text-slate-200">
          {[
            "सातत्य कसं ठेवायचं",
            "भीती कशी दूर करायची",
            "स्वतःच्या भविष्यासाठी कसं उभं राहायचं"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-center group/item">
              <span className="h-1 w-4 bg-blue-600 rounded-full group-hover/item:w-8 transition-all"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD 2: TIME COMMITMENT */}
      <div className="group bg-blue-700 text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-blue-100 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
        
        <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl text-blue-700 transform group-hover:-rotate-12 transition-transform duration-500">
          <Clock size={28} />
        </div>
        
        <h4 className="text-xs font-black mb-6 uppercase tracking-[0.25em] font-mono text-blue-100">किती वेळ द्यावा लागतो?</h4>
        
        <ul className="space-y-6 font-bold italic text-lg md:text-xl tracking-tight">
          {[
            "रोज १–२ तास पुरेसे",
            "पार्ट-टाइमने सुरुवात",
            "नंतर फुल-टाइम रूपांतर शक्य"
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-center group/item">
              <span className="h-1 w-4 bg-amber-400 rounded-full group-hover/item:w-8 transition-all"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* CALLOUT FOOTNOTE */}
    <p className="mt-16 text-slate-500 font-bold italic text-base md:text-lg">
      👉 नोकरी/कॉलेज/घर सांभाळूनही करता येणारा व्यवसाय
    </p>
  </div>
</section>
{/* Founders Note Section - Standard High-End Dark Style */}
<section className="py-28 px-4 bg-[#020617] relative overflow-hidden font-sans border-y border-white/5">
  
  {/* UNIQUE DARK GRID: High-end architectural blueprint pattern */}
  <div 
    className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
    style={{ 
      backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
      backgroundSize: '60px 60px' 
    }}
  ></div>

  {/* AMBIENT GLOWS: Deep blue and amber accents for attraction */}
  <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      
      {/* FOUNDER IMAGE COLUMN - Standard Card UI */}
      <div className="flex-1 relative group w-full max-w-md lg:max-w-none">
        {/* Modern Border Glow */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/50 to-amber-400/30 rounded-[3.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
          {/* Replace with actual image of Dayanand Patole */}
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" 
            alt="Founder - Dayanand Patole" 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
          />
          
          {/* OVERLAY NAME TAG: Glassmorphism style */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 shadow-2xl">
             <h4 className="text-white font-black text-xl md:text-2xl font-serif tracking-tight italic">Dayanand Patole</h4>
             <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mt-1 font-mono">Founder, Grow with Daya</p>
          </div>
        </div>
      </div>

      {/* FOUNDER NOTE CONTENT - Balanced Typography */}
      <div className="flex-[1.3] text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8 font-mono">
           <Rocket size={12} className="animate-pulse" />
           Founder's Message
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black mb-10 italic font-serif text-white leading-[1.1] tracking-tight">
          स्वप्न पाहणारे खूप असतात, पण <br className="hidden md:block" />
          <span className="text-blue-500 underline underline-offset-8 decoration-white/10 decoration-4">दिशा मिळाल्यावरच</span> यश मिळतं. 🚀
        </h2>
        
        <div className="space-y-8 text-slate-400 text-base md:text-lg font-medium leading-relaxed font-sans italic">
          <p className="relative pl-6 md:pl-0">
            <span className="hidden md:block absolute -left-8 top-0 text-6xl text-white/5 font-serif leading-none select-none">"</span>
            "आज अनेक लोकांना ऑनलाइन कमाई सुरू करायची आहे, पण नेमकं कुठून सुरुवात करावी, ग्राहक कसे मिळवावेत आणि तांत्रिक गोष्टी कशा हाताळाव्यात हे माहीत नसल्यामुळे अनेक जण मागे राहतात."
          </p>
          <p>
            "Grow with Daya चा जन्म याच विचारातून झाला आहे – जिथे तुम्हाला केवळ माहिती दिली जात नाही, तर एक संपूर्ण **सिस्टम आणि स्पष्ट रोडमॅप** दिला जातो. नवीन डिजिटल उद्योजकांची पुढची पिढी तयार करणे हेच आमचे ध्येय आहे."
          </p>
          <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
             <div className="h-px w-12 bg-blue-500"></div>
             <p className="text-white font-black not-italic text-lg md:text-xl font-serif tracking-tight">
               चला, तुमच्या ऑनलाइन व्यवसायाचा प्रवास आजच सुरू करूया!
             </p>
          </div>
        </div>

        {/* TRUST INDICATORS: Discrete standard stats */}
        <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-10 border-t border-white/5 pt-10">
           <div className="group">
              <p className="text-2xl md:text-4xl font-black text-white font-serif tracking-tighter group-hover:text-blue-500 transition-colors">5,170+</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono mt-1">Students Mentored</p>
           </div>
           <div className="h-12 w-px bg-white/5 hidden md:block"></div>
           <div className="group">
              <p className="text-2xl md:text-4xl font-black text-blue-500 font-serif tracking-tighter group-hover:text-white transition-colors">100%</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono mt-1">Practical System</p>
           </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* 8. PROGRAM SUITABILITY - Premium Balanced Grid */}
<section className="py-24 px-4 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200">
  {/* ARCHITECTURAL GRID: Standard professional grid pattern */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none" 
    style={{ 
      backgroundImage: `linear-gradient(#cbd5e1 1.2px, transparent 1.2px), linear-gradient(90deg, #cbd5e1 1.2px, transparent 1.2px)`, 
      backgroundSize: '40px 40px' 
    }}
  ></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* BALANCED HEADLINE: Reduced from 8xl to 5xl for a standard feel */}
    <h2 className="text-3xl md:text-5xl font-black mb-16 italic font-serif tracking-tight text-slate-950 leading-tight">
      हा प्रोग्राम <span className="text-blue-600 underline underline-offset-8 decoration-4 decoration-blue-100">कोणासाठी योग्य</span> आहे?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        { t: "विद्यार्थी जे उत्पन्न कौशल्य शिकू इच्छितात", i: <Target /> },
        { t: "नोकरी करणारे जे अतिरीक्त कमाई करू इच्छितात", i: <TrendingUp /> },
        { t: "गृहिणी जे घरातून काम करू इच्छितात", i: <Heart /> },
        { t: "छोटे व्यावसायिक जे डिजिटल होऊ इच्छितात", i: <Layout /> },
        { t: "टेक्निकल ज्ञान नसलेले नवशिके", i: <Zap /> },
        { t: "खऱ्या ऑनलाइन व्यवसायासाठी गंभीर लोक", i: <Award /> }
      ].map((item, i) => (
        <div 
          key={i} 
          className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-slate-900 hover:-translate-y-2 flex flex-col items-start text-left"
        >
          {/* ICON CONTAINER: Refined size and scale */}
          <div className="mb-6 p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
            {item.i}
          </div>
          
          <h3 className="text-lg md:text-xl font-black text-slate-800 leading-[1.4] font-sans tracking-tight group-hover:text-white transition-colors duration-500">
            {item.t}
          </h3>
          
          {/* ACCENT LINE: Premium visual detail */}
          <div className="mt-4 w-8 h-1 bg-blue-600/20 group-hover:w-full group-hover:bg-blue-500 transition-all duration-700 rounded-full"></div>
        </div>
      ))}
    </div>

    <p className="mt-16 text-lg font-bold italic text-blue-700 bg-blue-50/50 inline-block px-8 py-3 rounded-full border border-blue-100">
       जर तुम्ही serious असाल – हे तुमच्यासाठीच आहे.
    </p>
  </div>
</section>

{/* 9. WHO IS THIS NOT FOR - Premium Red-Flag Section */}
<section className="py-24 px-4 bg-[#FFFBFB] relative overflow-hidden font-sans border-t border-rose-100">
  {/* UNIQUE DIAGONAL PATTERN: A subtle "Caution" texture for visual standard */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
    style={{ 
      backgroundImage: `repeating-linear-gradient(45deg, #e11d48 0, #e11d48 1px, transparent 0, transparent 50%)`, 
      backgroundSize: '20px 20px' 
    }}
  ></div>

  <div className="max-w-5xl mx-auto text-center relative z-10">
    {/* OVERLAY DECORATION TEXT: Reduced size to prevent visual clutter */}
    <span className="text-4xl md:text-6xl font-black text-rose-600/5 absolute -top-4 left-1/2 -translate-x-1/2 tracking-[0.5em] select-none uppercase">
      Filtered
    </span>

    {/* BALANCED HEADLINE: Standard premium size */}
    <h2 className="text-2xl md:text-4xl font-black mb-16 text-rose-700 italic font-serif tracking-tight leading-tight">
      Grow with Daya <span className="text-slate-900 not-italic">कोणासाठी नाही?</span>
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { text: "जे फक्त स्कीम शोधत आहेत", icon: <ZapOff size={24} /> },
        { text: "काहीही न करता कमाई हवी म्हणतात", icon: <XCircle size={24} /> },
        { text: "जे शिकायला तयार नाहीत" }
      ].map((item, i) => (
        <div 
          key={i} 
          className="p-8 bg-white rounded-[2.5rem] border border-rose-100 shadow-sm flex flex-col items-center group hover:bg-rose-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          {/* ICON: Focused size for professional UI */}
          <div className="text-rose-500 mb-5 p-3 bg-rose-50 rounded-xl group-hover:bg-white group-hover:scale-110 transition-all duration-500">
            {item.icon || <XCircle size={24} />}
          </div>
          <p className="font-bold text-rose-900 text-base md:text-lg leading-snug italic tracking-tight uppercase group-hover:text-white transition-colors duration-500">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* POSITIVE CALLOUT: Balanced color shift from Rose to Emerald */}
    <div className="mt-16 p-10 bg-slate-900 rounded-[3.5rem] shadow-2xl relative group overflow-hidden border border-slate-800">
       <div className="absolute inset-0 bg-emerald-600 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out opacity-90"></div>
       
       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400 group-hover:text-white transition-colors">
             <ShieldCheck size={32} />
          </div>
          <p className="text-white text-xl md:text-2xl font-black font-sans tracking-tight italic leading-snug">
             पण ज्यांनी <span className="text-emerald-400 group-hover:text-emerald-200 underline decoration-2 underline-offset-4 transition-colors">खरंच काहीतरी</span> स्वतःचं उभं करायचं ठरवलं आहे, <br className="hidden md:block" /> त्यांच्यासाठी हे परफेक्ट आहे!
          </p>
       </div>
    </div>
  </div>
</section>
{/* 10. FINAL ACTION FOOTER - Standard Epic Brand Style */}
<footer className="bg-white py-32 px-4 text-center border-t border-slate-100 relative overflow-hidden">
  {/* UNIQUE GRID BACKGROUND: Refined grid for a technical 'Blueprint' look */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none" 
    style={{ 
      backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`, 
      backgroundSize: '50px 50px' 
    }}
  ></div>

  <div className="max-w-6xl mx-auto relative z-10 font-sans">
    {/* SUB-HEADER: Reduced size for standard elegance */}
    <p className="text-blue-600 font-black text-xs md:text-sm mb-8 tracking-[0.4em] uppercase italic font-mono animate-pulse">
      आमचं एकच उद्दिष्ट: तुम्हाला कमाईपर्यंत पोहोचवणं
    </p>

    {/* BALANCED MAIN HEADLINE: Reduced from 14rem to a standard responsive 5xl-9xl */}
    <h2 className="text-5xl md:text-[6.5rem] font-black mb-12 tracking-tighter leading-none text-slate-950 font-serif">
       Grow with <br className="md:hidden" /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 italic font-medium">Daya</span>
    </h2>
    
    {/* CALL TO ACTION BUTTON: Standard button size with premium hover effects */}
    <div className="relative inline-block group mb-16">
      <div className="absolute -inset-4 bg-blue-600/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <button onClick={() => navigate('/register')}
      className="relative bg-slate-950 text-white text-xl md:text-3xl font-black py-8 px-16 rounded-[2.5rem] shadow-2xl transition-all hover:bg-blue-600 active:scale-95 flex items-center gap-6 mx-auto group">
         नोंदणी करा - मोफत
         <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform duration-500 text-blue-400 group-hover:text-white" />
      </button>
    </div>

    {/* MISSION & CLOSING CONTENT */}
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="h-px w-24 bg-slate-200 mx-auto"></div>
      
      <p className="text-slate-500 text-lg md:text-xl font-bold italic leading-relaxed font-serif">
        Grow with Daya चे ध्येय: <br className="md:hidden" />
        <span className="text-slate-900 not-italic">नवीन डिजिटल उद्योजकांची पुढची पिढी तयार करणे.</span>
      </p>

      <p className="text-slate-400 font-black text-xs md:text-sm italic uppercase tracking-[0.2em] leading-loose max-w-2xl mx-auto">
        Grow with Daya – कारण स्वप्न पाहणारे खूप असतात, <br className="hidden md:block" />
        पण दिशा मिळाल्यावरच यश मिळतं. 🚀
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;