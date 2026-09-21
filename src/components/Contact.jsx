import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual EmailJS service ID, template ID, and public key later
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have an exciting project idea, collaboration, or opportunity? Send a message directly to my inbox!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
            <textarea 
              rows="4" 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition resize-none"
              placeholder="Let's talk about..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? <><CheckCircle size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
          </button>
          
          {status === 'error' && (
            <p className="text-red-400 text-xs text-center">Failed to send message. Please try emailing directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}