import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Send, Zap, Shield, Code } from 'lucide-react';
import { CyberButton, SectionHeader, Card } from '../components/Shared';
import { LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center cyber-grid">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1 border border-cyber-green/30 rounded-full bg-cyber-green/5">
            <span className="text-cyber-green font-mono text-sm animate-pulse">● System Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Learn Technology <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-600">
              The Smart & Easy Way
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Hack, Learn & Dominate the Digital World with Knowledge. 
            Join thousands of students mastering programming, servers, and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
              <CyberButton variant="primary">
                <Youtube className="w-5 h-5 inline mr-2" />
                Subscribe Now
              </CyberButton>
            </a>
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
              <CyberButton variant="secondary">
                <Send className="w-5 h-5 inline mr-2" />
                Join Community
              </CyberButton>
            </a>
          </div>
        </div>
      </section>

      {/* Trust/Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Why Join Us?" subtitle="Our content is strictly educational and designed to build real-world skills." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-cyber-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical Coding</h3>
              <p className="text-gray-400 text-sm">
                No fluff. Just real code, automation scripts, and projects you can add to your portfolio.
              </p>
            </Card>

            <Card className="text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyber-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ethical Security</h3>
              <p className="text-gray-400 text-sm">
                Learn how systems work to better secure them. We focus on defense, VPS hardening, and safety.
              </p>
            </Card>

            <Card className="text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyber-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI & Automation</h3>
              <p className="text-gray-400 text-sm">
                Leverage the latest AI tools to 10x your productivity. Work smarter, not harder.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 mb-10">Access hundreds of free tutorials and join a community of like-minded tech enthusiasts.</p>
          <Link to="/resources">
            <CyberButton variant="primary">Explore Resources</CyberButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;