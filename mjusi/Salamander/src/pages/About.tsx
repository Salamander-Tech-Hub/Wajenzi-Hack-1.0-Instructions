import React from 'react';
import NavBar from '../components/Navbar';
import { SocialIcon } from 'react-social-icons';
import ThemeCard from '../components/ThemeCard';

// Types
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: { url: string; label: string }[];
}

// Component
const AboutPage: React.FC = () => {
  const founders = [
    {
      name: "Andrew Kim",
      role: "Co-Founder & CTO",
      bio: "Former lead engineer at global tech giants, Marcus envisioned Salamander as the bridge between corporate excellence and open-source freedom.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzkySrK5sNPxNyBrJTZv3MrMsoqRNgwgmKESDKu1BYMCIF4wRYVvwO5ILz1YigxwYKHGjHXDHVTwMrY4QRUYfPuqJ8DSSLlXYuvi76sbPKuQu5jtrrgMNP-cPmOVf4yI8kzJN3HrLV2L2IcpfqOkIKv5-yw99I6ZuNOoUrOrn0JMumXSLT9A7Tcs5i2ovEHkK7Hmez3nfhQtysbTQ9ghN2rSKZVLyCM-XfIALYA_K-hS3IWIPIBad25bVYBQ68oZ3-T71EexgBp2M",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://github.com", label: "GitHub" },
        { url: "https://twitter.com", label: "Twitter" }
      ]
    },
    {
      name: "Martha Sharon",
      role: "Co-Founder & CEO",
      bio: "With a background in community building and venture capital, Martha drives the strategic growth and cultural integrity of the Salamander hub.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJZQT8FLpt_BU5ScoBAqaRrSTaNXPxyFBlrlyjOlykWcPhegQwx-WlxeaV5Fs4hpON1-doqlWHyS7ucEyAHAOAuBFp4u98w9y9mRLXGnlXfUZJCMorReAuvsD31MryLzeG93yz_ChzzMGuHZEIIdajgQf5w6zCRPmLQc4_cqQaB-1HyRvXmka8RDknnKGx9U9X2YyG9cGrWbTdzsChwKDeDsC24lhD0r6BJcbqfAgl4Z46uiTzNYVhnfhBIbZTewy6vcT5QgibBBw",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://twitter.com", label: "Twitter" }
      ]
    }
  ];

  const coreTeam: TeamMember[] = [
    {
      name: "David Chen",
      role: "Head of Infrastructure",
      bio: "Scaling our hub to support millions of concurrent developers and repositories.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAfdN2mnjfPy_eR7JrbiM3lz0yRF_jV5eDHgi0OUFGbCoP98N88KplG95_rGx4mNeL22m--KRcZBmEnD7_DoErPsWYUeEWJ-t7RMNdwDUOJhSN_16mNy9gJ3By2jW0G8Ym385hoW1Z8GA2yxIQjcnztdmbnzVbI60lpjQAo5peaGd5kiRk-IAvSdUaNbCa4QoCFeMc0bZseJBQjJhxYNidUcLui_ai3f2EgAlxJwrcazFn-UKT8HrQ5h3Xp7j66h35In_B-WEQpFI",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://github.com", label: "GitHub" }
      ]
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Community",
      bio: "Fostering an inclusive environment where every developer feels at home.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ-JW448YDvxQfv7SFsmAZLZniSytkFkCFXqw0Hd76UILMv7bts_oo2X37CvpJX8xxeDzyvY24tXZp1crv1KzHTCsSAsl7MA3dFIda6um2x6ejcUwPwHKwMS1ro-CCIcgvhEpR8lzpJjrbmK7xpvrtqpqr3MWn-Iar26NPzjKVJQHnc0kkXQDkvr6VRVsnwc3X11E77DhLDuZfNmVDYSALPQ8Kl2yoo2gRsGUZg6XQvGzj_vjWnfR0AiXyF38125xjVjlhk3lxXQ",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://twitter.com", label: "Twitter" }
      ]
    },
    {
      name: "Alex Rivera",
      role: "Lead Designer",
      bio: "Crafting the visual language that makes open source beautiful and functional.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbiRDNqz8hPB408sz2ezaC6mTc9gPgh7O3xNZPO3cU4h_M0TUhEljLEd84c-fBnSwn_I4P8vEoyDJee6Gl3PAzEBl99h9vr9LkUTJ-A1QahpSboWdj_jxsoJCLyvM-Ao5c-Pz_nMR1Unv0FPFbgvoLfSHNJ5TtKqmJsbj78BavhtMlE5VDltqFAZrvKwG4qX7zaZHYYWZtKSQOG3bdv23MB0B_-t7SOWawKFLhGbBrED4IHHNpD-JtGBuw-9KeWVAYLNN5Q0fdo2c",
      socials: [
        { url: "https://dribbble.com", label: "Dribbble" },
        { url: "https://behance.net", label: "Behance" }
      ]
    },
    {
      name: "Maya Patel",
      role: "DevOps Architect",
      bio: "Automating the path from code to production for thousands of projects.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB92ePUgyUj4fOKFkzyQLBA5wB-7zdMljfEcemlDGReU9rbxm8nAykBHhYF72WgaxRPlj1lCWZc7Ub-wr9iy_Y7C5E9YSxKUYSkkYWPWX9SiRWbRmMgAY_7Zm3OLiPIsRNisJ1fwClTiLR2qY5hSFYRLSrfEtVxcFKGi-tnqZaShe9DDywC-fiA37YrT3XYWz57iCz4O0xmzqVdyTgIVFKg1T-WatdcbRUhCyrkqoylIRS2EPosB7hZmxyT0j2_RZ2zHf_E4ODgBIw",
      socials: [
        { url: "https://github.com", label: "GitHub" },
        { url: "https://linkedin.com", label: "LinkedIn" }
      ]
    },
    {
      name: "James Wilson",
      role: "Security Lead",
      bio: "Ensuring the integrity and safety of our decentralized network protocol.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1oUd1Uc8jhioWOcpmcdGS2ThhqMLaW0imRjzfrr1aV3Z8_sIaNKErzhRlyk7AGRFVZKt8J6jpefBsF_9nUJtKdDCmNtaBMkHdo7fGmSki3-2KjXsbDx0rEnSNCKlLMSlH0jfUO0r1z1AXCxYXqn_I5QmMX7oGSzN1iR9PbA-29V9Nn8CR9dEdqEx3mOmOGMgwa0Rxdzg4ldQwcy97iHsxmgk1JtRupmI7rq0cV_oqkAuYnfAM-DmlngeTjU4AtH8Dzo22dBKjmE",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://twitter.com", label: "Twitter" }
      ]
    },
    {
      name: "Sophie Dubois",
      role: "Open Source Advocate",
      bio: "Bridging the gap between corporate partners and independent contributors.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1oUd1Uc8jhioWOcpmcdGS2ThhqMLaW0imRjzfrr1aV3Z8_sIaNKErzhRlyk7AGRFVZKt8J6jpefBsF_9nUJtKdDCmNtaBMkHdo7fGmSki3-2KjXsbDx0rEnSNCKlLMSlH0jfUO0r1z1AXCxYXqn_I5QmMX7oGSzN1iR9PbA-29V9Nn8CR9dEdqEx3mOmOGMgwa0Rxdzg4ldQwcy97iHsxmgk1JtRupmI7rq0cV_oqkAuYnfAM-DmlngeTjU4AtH8Dzo22dBKjmE",
      socials: [
        { url: "https://linkedin.com", label: "LinkedIn" },
        { url: "https://twitter.com", label: "Twitter" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-sans text-slate-200">
      <NavBar />

      <main className="flex-grow">
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              About <span className="text-primary text-glow italic">Salamander</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A community dedicated to educating and empowering people to contribute to <span className="text-primary font-bold">open source software</span>.
            </p>
          </div>
        </section>

        <section className="py-20 bg-accent-dark/40 border-y border-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  At Salamander, we believe that open source is for everyone. Our mission is to demystify open source contribution and create a welcoming space for learners at all levels. We forge the tools that power the future, one pull request at a time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-bold text-white">Open by Design</h4>
                      <p className="text-slate-400">Everything we build is accessible, transparent, and collaborative.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-bold text-white">Community Driven</h4>
                      <p className="text-slate-400">Decisions are made by the people who write the code.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-dark p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                  <span className="text-5xl font-black text-primary mb-2">500+</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Active Members</span>
                </div>
                <div className="bg-background-dark p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                  <span className="text-5xl font-black text-primary mb-2">1k+</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Contributions</span>
                </div>
                <div className="bg-background-dark p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center col-span-2">
                  <span className="text-5xl font-black text-primary mb-2">100%</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">The Visionaries</span>
              <h2 className="text-5xl font-bold text-white mt-2">Founding Partners</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl bg-accent-dark border border-slate-800">
                  <div className="aspect-[4/5] relative">
                    <img
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      src={founder.avatar}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                      <h3 className="text-4xl font-bold text-white mb-2">{founder.name}</h3>
                      <p className="text-primary font-mono text-sm uppercase tracking-widest mb-6">{founder.role}</p>
                      <p className="text-slate-300 text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {founder.bio}
                      </p>
                      <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        {founder.socials.map((social, idx) => (
                          <SocialIcon
                            key={idx}
                            url={social.url}
                            fgColor="#0f172a"
                            bgColor="#FDE047"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">Core Leadership</h2>
              <p className="text-slate-400 max-w-2xl mx-auto italic">The experts driving our key initiatives and community growth.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <ThemeCard key={index}>
                  <div className="p-8 bg-background-dark/50 group relative h-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all">
                      <img alt={member.name} className="w-full h-full object-cover" src={member.avatar} />
                    </div>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-primary font-mono text-xs uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex gap-3 justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                      {member.socials.map((social, idx) => (
                        <SocialIcon
                          key={idx}
                          url={social.url}
                          fgColor="#fff"
                          bgColor="transparent"
                          style={{ height: 30, width: 30, border: '1px solid #334155', borderRadius: '50%' }}
                          className="hover:border-primary transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </ThemeCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background-dark border-t border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-900 text-sm">all_inclusive</span>
              </div>
              <span className="text-lg font-bold text-white">Salamander</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Security</a>
              <a className="hover:text-primary transition-colors" href="#">Status</a>
            </div>
            <p className="text-sm text-slate-600">© 2025 Salamander Tech Hub. Built with code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;