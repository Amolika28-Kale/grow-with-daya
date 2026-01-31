import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, Rocket, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 overflow-x-hidden">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.3]" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full mb-6 shadow-lg">
            <MessageCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic font-serif tracking-tight leading-tight">
            आम्हाला <span className="text-blue-600">संपर्क</span> करा
          </h1>
          <p className="mt-4 text-slate-500 font-medium text-lg italic">तुमच्या डिजिटल प्रवासात आम्ही तुम्हाला मदत करण्यास तयार आहोत.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFO CARDS */}
          <div className="space-y-6">
            {[
              { t: "WhatsApp Support", d: "थेट संवाद साधा आणि तुमच्या शंकांचे निरसन करा.", i: <MessageCircle className="text-emerald-500" />, c: "+91 98XXX XXXXX" },
              { t: "Email Us", d: "अधिकृत माहितीसाठी आम्हाला ईमेल करा.", i: <Mail className="text-blue-600" />, c: "support@growwithdaya.com" },
              { t: "Office Location", d: "पुणे, महाराष्ट्र, भारत.", i: <MapPin className="text-rose-500" />, c: "Digital Hub, Pune" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex items-start gap-6">
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                  {item.i}
                </div>
                <div>
                  <h3 className="text-xl font-black font-serif italic text-slate-950 mb-1">{item.t}</h3>
                  <p className="text-slate-500 text-sm mb-3 font-medium">{item.d}</p>
                  <p className="text-blue-600 font-black font-mono tracking-tight">{item.c}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT FORM */}
          <div className="bg-slate-950 p-10 md:p-12 rounded-[4rem] shadow-2xl relative overflow-hidden text-white border border-white/5">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none"><Rocket size={120} /></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input type="text" placeholder="तुमचे नाव" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">WhatsApp No</label>
                  <input type="tel" placeholder="तुमचा नंबर" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-600" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea rows="4" placeholder="तुमचा प्रश्न इथे लिहा..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-600"></textarea>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-4 group uppercase tracking-widest text-sm">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;