import React, { useState } from 'react';
import { Send, Youtube, Bot, CheckCircle, Copy, Check } from 'lucide-react';
import { SectionHeader, Card, CyberButton } from '../components/Shared';
import { LINKS, DONATION_INFO } from '../constants';

// --- COMMUNITY PAGE ---
export const Community: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <SectionHeader title="Join The Network" subtitle="Connect with thousands of other tech enthusiasts." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Telegram Card */}
        <div className="bg-[#2AABEE]/10 border border-[#2AABEE]/30 p-8 rounded-lg text-center hover:bg-[#2AABEE]/20 transition-all">
          <Send className="w-16 h-16 text-[#2AABEE] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Telegram Channel</h3>
          <p className="text-gray-300 mb-6">Get instant updates, free resources, and participate in discussions.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={LINKS.telegram} target="_blank" rel="noreferrer">
              <button className="px-6 py-2 bg-[#2AABEE] text-white font-bold rounded hover:bg-[#229ED9] transition-colors">
                Join Channel
              </button>
            </a>
            <a href={LINKS.telegramBot} target="_blank" rel="noreferrer">
              <button className="px-6 py-2 bg-transparent border border-[#2AABEE] text-[#2AABEE] font-bold rounded hover:bg-[#2AABEE]/10 transition-colors flex items-center">
                <Bot className="w-4 h-4 mr-2" /> Use Help Bot
              </button>
            </a>
          </div>
        </div>

        {/* YouTube Card */}
        <div className="bg-[#FF0000]/10 border border-[#FF0000]/30 p-8 rounded-lg text-center hover:bg-[#FF0000]/20 transition-all">
          <Youtube className="w-16 h-16 text-[#FF0000] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">YouTube Channel</h3>
          <p className="text-gray-300 mb-6">Watch in-depth tutorials, live streams, and tech reviews.</p>
          <a href={LINKS.youtube} target="_blank" rel="noreferrer">
            <button className="px-6 py-2 bg-[#FF0000] text-white font-bold rounded hover:bg-[#CC0000] transition-colors">
              Subscribe Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- DONATION PAGE ---
const CryptoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black/50 border border-gray-800 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4 group hover:border-cyber-green/50 transition-colors">
      <div className="text-center sm:text-left overflow-hidden w-full">
        <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">{label}</div>
        <div className="font-mono text-white text-sm sm:text-base break-all select-all">{value}</div>
      </div>
      <button 
        onClick={handleCopy}
        className="flex-shrink-0 p-2 rounded hover:bg-cyber-green/10 text-gray-400 hover:text-cyber-green transition-colors"
        title="Copy to clipboard"
      >
        {copied ? <Check className="w-5 h-5 text-cyber-green" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
};

export const Donation: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <SectionHeader title="Donate" subtitle="Support the content creation." />
      
      <div className="bg-cyber-gray border border-gray-800 p-6 md:p-8 rounded-2xl space-y-4">
        <CryptoRow label="Bybit UID" value={DONATION_INFO.bybit} />
        <CryptoRow label="Bitget UID" value={DONATION_INFO.bitget} />
        <CryptoRow label="Binance UID" value={DONATION_INFO.binance} />
        <CryptoRow label="BNB Address (BEP20)" value={DONATION_INFO.bnb} />

        <div className="mt-8 text-center pt-6 border-t border-gray-800">
           <p className="text-sm text-gray-500 font-mono">
             Thanks for your support!
           </p>
        </div>
      </div>
    </div>
  );
};

// --- CONTACT PAGE ---
// Kept simple or can be removed if strictly following "don't need so many options", 
// but usually Contact is separate from Community/Donate. I will leave it accessible via URL but not in main menu if desired, 
// or simpler version.
export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center">
      <SectionHeader title="Contact" />
      <p className="text-gray-400 mb-8">For business inquiries, email us directly.</p>
      <a href="mailto:contact@jubairsensei.site" className="inline-block">
        <CyberButton variant="primary">Send Email</CyberButton>
      </a>
    </div>
  );
};