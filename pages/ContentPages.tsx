import React from 'react';
import { SectionHeader, Card, CyberButton } from '../components/Shared';
import { FEATURED_RESOURCES, PROJECTS, PROFILE_IMAGE, BRAND_NAME, LINKS } from '../constants';
import { ExternalLink, Clock, FolderGit2, Terminal, Cpu } from 'lucide-react';

// --- ABOUT PAGE ---
export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <SectionHeader title="About The Sensei" subtitle="The mission behind the code." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden border border-cyber-green/30 relative group">
             {/* Profile Image - change URL in constants.ts */}
             <img src={PROFILE_IMAGE} alt="Jubair Sensei" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             <div className="absolute inset-0 bg-cyber-green/10 mix-blend-overlay"></div>
          </div>
        </div>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg text-white font-mono border-l-2 border-cyber-green pl-4">
            "Empowering people with ethical tech knowledge."
          </p>
          <p>
            Hi, I'm <strong>{BRAND_NAME}</strong>. I'm a tech educator and community builder.
            My goal is to demystify complex technology topics and make them accessible to everyone.
          </p>
          <p>
            Whether it's setting up a Linux server, automating boring tasks with Python, or understanding
            the latest AI tools, I create content that helps you <strong>hack your learning curve</strong>.
          </p>
          
          <div className="mt-8">
            <h3 className="text-white font-bold mb-4 font-mono">Focus Areas:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Python & JS', 'Linux & VPS', 'Basic Tech Master', 'Automation'].map((skill) => (
                <li key={skill} className="flex items-center text-sm">
                  <Terminal className="w-4 h-4 text-cyber-green mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- RESOURCES PAGE ---
export const Resources: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <SectionHeader title="Knowledge Base" subtitle="Curated tutorials, guides, and tools." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_RESOURCES.map((resource) => (
          <Card key={resource.id} className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-gray-800 text-xs text-cyber-green font-mono rounded border border-gray-700">
                {resource.category}
              </span>
              {resource.isExternal && <ExternalLink className="w-4 h-4 text-gray-500" />}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">{resource.description}</p>
            <a href={resource.link} target={resource.isExternal ? "_blank" : "_self"} rel="noreferrer">
              <CyberButton variant="outline" fullWidth className="text-sm py-2">
                Access Resource
              </CyberButton>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

// --- PROJECTS PAGE ---
export const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <SectionHeader title="Projects" subtitle="Software and tools built for the community." />
      
      {PROJECTS.length === 0 ? (
        <div className="bg-cyber-gray border border-gray-800 p-12 rounded-lg text-center">
          <FolderGit2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Projects Loading...</h3>
          <p className="text-gray-400 mb-6">Active projects will be listed here soon. Check GitHub for the latest code.</p>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            <CyberButton variant="secondary">
              <GithubIcon className="w-4 h-4 inline mr-2" />
              Visit GitHub
            </CyberButton>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-cyber-black border border-gray-800 p-1">
               <div className="absolute inset-0 bg-cyber-green/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
               <div className="relative p-6">
                  <div className="flex justify-between items-center mb-4">
                    <FolderGit2 className="w-8 h-8 text-cyber-green" />
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      project.status === 'Free' ? 'bg-green-900/30 text-green-400' : 
                      project.status === 'Experimental' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button className="text-cyber-green font-mono text-sm hover:underline flex items-center">
                        View Project <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </a>
                  )}
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Internal icon component for cleaner code in this file
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 4 2c-3 .5-3.5 3-3.5 6 0 1 0 2 1.5 2.5 1 1.5 2.5 2.5 2.5 3.5 0 2.5 1.5 4 4 4 2.5 0 3.5 1.5 3.5 2.5V22"/>
  </svg>
);

// --- BLOG PAGE ---
export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <SectionHeader title="Transmission Log" />
      <div className="text-center text-gray-500">
        <p>No new transmissions.</p>
      </div>
    </div>
  );
};