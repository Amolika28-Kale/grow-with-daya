import React from 'react';
import { CheckCircle, ShieldCheck, Zap, ArrowRight, Rocket, Users, Clock } from 'lucide-react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* HERO SECTION / HEADER */}
      <section className="bg-slate-950 py-20 px-6 relative overflow-hidden rounded-b-[5rem]">
        {/* HEXAGON GRID */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='28' viewBox='0 0 16 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 5.25l7.5 4.33v8.66L8 22.58l-7.5-4.33V9.58L8 5.25z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '32px 56px'
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-black italic font-serif mb-6 leading-tight">
            मोफत वेबिनारसाठी <span className="text-blue-500">नोंदणी</span> करा
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium italic">फक्त ३० मिनिटात तुमचा स्वतःचा ऑनलाइन व्यवसाय सुरू करा!</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* LEFT: BENEFITS CARD */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white p-10 md:p-12 rounded-[4rem] border border-slate-200 shadow-xl">
              <h2 className="text-2xl font-black font-serif italic mb-8 border-b border-slate-100 pb-4">या वेबिनारमध्ये तुम्ही काय शिकाल?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "ऑनलाइन व्यवसायाची योग्य सुरुवात",
                  "ग्राहक (लीड्स) कसे मिळवायचे",
                  "व्यवसाय सुरू होण्यापूर्वी विक्री",
                  "कमाई हळूहळू कशी वाढवायची",
                  "सोपा व्यवसाय मॉडेल",
                  "नवशिक्यांसाठी मार्गदर्शन"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start group">
                    <CheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm font-bold text-slate-700 leading-snug group-hover:text-blue-600 transition-colors">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-blue-50 rounded-3xl flex items-center gap-4">
                 <ShieldCheck className="text-blue-600" size={32} />
                 <p className="text-xs md:text-sm font-black text-blue-900 uppercase tracking-wide">हे प्रशिक्षण पूर्णपणे नवशिक्यांसाठी डिझाइन केलेले आहे.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
  
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 text-center group hover:bg-slate-900 transition-all">
                <Clock size={32} className="text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">Webinar Duration</p>
                <p className="text-lg font-black italic font-serif text-slate-950 group-hover:text-white">30 Minutes Roadmap</p>
              </div>
            </div>
          </div>

          {/* RIGHT: REGISTRATION FORM */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-white p-10 rounded-[4rem] border-4 border-blue-600 shadow-2xl">
              <div className="mb-10 text-center">
                <Zap size={40} className="text-amber-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-black font-serif italic text-slate-950">Book My Spot</h3>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Registration is Free!</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                  <input type="text" placeholder="तुमचे नाव" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">WhatsApp No</label>
                  <input type="tel" placeholder="98XXXXXXXX" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Experience</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-500">
                    <option>Select Option</option>
                    <option>Student</option>
                    <option>Working Professional</option>
                    <option>Business Owner</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 hover:bg-slate-950 text-white font-black py-6 rounded-3xl shadow-xl transition-all transform active:scale-95 text-lg md:text-xl flex items-center justify-center gap-4 group uppercase tracking-tighter">
                  Register Now
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck size={16} />
                <p className="text-[10px] font-black uppercase tracking-widest italic">100% Secure & Privacy Protected</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;