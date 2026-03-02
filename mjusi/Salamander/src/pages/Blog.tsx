import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import FloatingParticlesBackground from '../components/FloatingParticlesBackground';
import ThemeCard from '../components/ThemeCard';
import ThemeButton from '../components/ThemeButton';

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  role: string;
  date: string;
  avatar: string;
}

const CATEGORIES = ['All Posts', 'Engineering', 'Culture', 'Design'];
const POPULAR_TAGS = ['EMPOWERMENT', 'BLOCKCHAIN', 'OPEN SOURCE', 'CONTRIBUTIONS', 'PRODUCTIVITY', 'SECURITY'];

const POSTS: BlogPost[] = [
  {
    category: 'Engineering',
    title: 'Optimizing Rust for Production: A Journey into Zero-Cost Abstractions',
    excerpt: 'Deep dive into memory management, safety guarantees, and how we leveraged Rust to speed up our core APIs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBw9xX2V9dWt16oruSG0diDMDTL3j5Q7oTJ7lynzWcekejMNVBtQiT2t3mJgKvFaF4Wvyd_UOdD1-D6WyoilEqmlPTo013E3xMKFYzV1x0o77SdbmSJfonfSTVV-2trufIJ3Fyld3dcVvq2W_KmkvBbMZnRmPmD08Y6aUm1lZJnh6g2HEGYiwp5LDQ0ws7otl-i2niHUax15SRXoi7Kl6SDXxg4AxT-AdLaZIsFARkLqQCBbS3yhZeKS8tLyhw6wVZUIhcZzC_8YHV',
    imageAlt: 'Code snippets on a dark screen with yellow highlights',
    author: 'Alex Chen',
    role: 'Senior Staff Engineer',
    date: 'Oct 24',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbGhRJ7jSG9oEVGemULyYQWpS4Px3doC7YETRDUONd5vUMUokbglrbnrlp3xwMg2ykFyeTxvM8JZOKh-1h2f6K765hQjXcjkeIQlkPEsXPqpPItWHGSm49bmWXtryUcPNMGMm0Qf4WJK9xLzJnj1EJNabiaL5Ypag9ofpVZ6gcBJmRM69rB4yZ9XlChBeuXPRQaggq-LJ_EMjwPmEiOWoyWkm4IFXV-WXK5rjssEUNTsQDV64VeauzHW7TZu1vwHaZEQjksKsj-sjO',
  },
  {
    category: 'Culture',
    title: 'The Future of Remote Engineering in Distributed Teams',
    excerpt: 'Building a cohesive team culture in a world that\'s increasingly asynchronous and remote-first.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHeE-SyUy5MCj52JBPOh_oUjvfYxIl8foqKznrtodBLlMgjfrrelfNZ994ScssLFE6nfCCqLmrCmfIBfVhYRU_76b-_VWSCY6ADPqkJ8Y5rwHdKgIo-LG-f3Y_sGvBkKYc9LwBJa1n-tRjgdB3zM55mbcfewxz1gUt0RrztgPStgaI5NEjaD342a7rcv0QSYTKK-SVjX2Z2nnw0egswYUcO7eWFcsLGgRTxxiEWQfHiKgW0cBW4k9uREnz9vCIHaQn7uQVemD1741D',
    imageAlt: 'Modern workspace with dark desk and yellow accents',
    author: 'Sarah Miller',
    role: 'VP of Engineering',
    date: 'Oct 20',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTQTPYUjSwCNg7LZoOFO9BWSt0dbzaTQ-JcECEMbhmCg0IMHlyAGKNpLDZdU1XijUiFJojvP83wQ428uzdemXqSUnyfRwsymzYoAdMdLUBWT35erjhNA2iE_WnPVROZYCW1LNPF5WgzsKGrkkmaK4LqjW29OEuVje0Ic7F80cFepwTFRITOy5IF_K0nKvQt0jtXdKVmBoe5mDgCJSD0x9l0Hpdrew_ofySUgwamSX7nD8fdkpanh22xzAqe217nhrHVY46SDEW20GL',
  },
  {
    category: 'Product Design',
    title: 'Designing for Dark Mode: Aesthetics of Obsidian',
    excerpt: 'Exploring high-contrast UI patterns and why dark interfaces are becoming the gold standard for developers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAEB8bSrwmZvLeZ5LU2tPviCwmFgrjqFTc4rmRJyivpQ9NSJhZQ7XUi2GhIstKlyjleK9Eni0HIq61Tmvhq0Fm_maJAla-F1nbkH7PGW5X8zKbQrnl4QpJmCD7SLvK4n7_D6E2BcNf7IUAJYOJYUkS218sECgnwX3cTHJHPqJIlvhd33dWAxsnHwHOvnFSX9TdjESuIIw4qEgfoT_7AiZGtXeMttRpHs7KWmz43cAGJb3iDVevYxtSGnMBHjpWXNcaQ8f75L5b1-K7',
    imageAlt: 'Minimalist dark UI design patterns',
    author: 'James Wilson',
    role: 'Design Lead',
    date: 'Oct 15',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-lX6JYZuDbQoAW0NKiiGIeCmgPCaO2qRAmL4HdlpIw4gApJtY9XLJoZhVfUYAC38pJaMSlbhH6BWibXit0uIAn2TkAij7cwb_tlGKQcXZk6a5tSOVoG7QIxh45WagJnogymegiuDxSOFHcYTYZr_30bx0JNc2x3FHYHA_EcyI9zeTYvrGuZOCJdgDizIYUGC95aKUwl-0Bd08_Wv9uocqMUzhpX-Aip61qXR_ZW6MI6wzzRfaCkSFTcUq1IPBEwwHpPg1mdh_CUyB',
  },
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setEmail('');
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-background-dark font-sans text-slate-200 overflow-x-hidden">
      {/* Floating particles background – theme-blended */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingParticlesBackground
          backgroundColor="#020617"
          particleColor="#FDE047"
          particleCount={55}
          particleOpacity={0.45}
          glowIntensity={14}
          movementSpeed={0.35}
          mouseInfluence={140}
          mouseGravity="attract"
          gravityStrength={45}
          glowAnimation="ease"
        />
      </div>

      <NavBar />

      <main className="relative z-10 flex-grow pt-20">
        {/* Hero Featured Article */}
        <section className="relative bg-background-dark py-12 lg:py-20 border-b border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Featured Post
                </div>
                <h1 className="text-white text-4xl lg:text-6xl font-black leading-none tracking-tight">
                  Growing Our <span className="text-primary text-glow">Stack</span> with the Community
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Reworking our open-source stack through community contributions—clearer architecture, better developer experience, and 40% faster performance.
                </p>
                <div className="flex items-center gap-4 pt-4 flex-wrap">
                  <ThemeButton type="button" variant="primary" className="flex items-center gap-2">
                    Read Full Story <span>→</span>
                  </ThemeButton>
                  <span className="text-slate-500 text-sm font-medium italic">12 min read • Oct 28, 2023</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnbUuYV57YM7RW10aIDvwkZabhL9dQy0tdNLPHSOru7cqft7ONFrrWdBhSgC5IVpEptdNIp5t-fyKD9eD21cFf6gORGPPj02tDENzdSXoCwE2UBxstfGliJ5XQHV3IZplG2RbHq-DMlBbCdt7ZPV7RPBCizrmqQgTm0l_E64OkgdMlmypW4rFK0IadX1uQd0PhZGdH1GX6bTk2E-6YvRRVFPu1jxLH8BcsPSLASLdoE3dyc_N8xEWwwyGNS5vvN5fQCnj6jothvjYg"
                    alt="Abstract server room with glowing yellow lights"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16 bg-accent-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content: Blog Feed */}
              <div className="w-full lg:w-2/3">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 flex-wrap gap-4">
                  <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Latest Insights</h3>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-bold whitespace-nowrap transition-colors ${
                          activeCategory === cat ? 'text-primary' : 'text-slate-500 hover:text-primary'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-8">
                  {POSTS.map((post, index) => (
                    <ThemeCard key={index} className="flex flex-col md:flex-row">
                      <article className="group flex flex-col md:flex-row w-full">
                        <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src={post.image}
                            alt={post.imageAlt}
                          />
                        </div>
                        <div className="md:w-2/3 p-6 flex flex-col justify-between bg-background-dark/50">
                          <div>
                            <span className="text-primary text-[10px] font-black tracking-widest uppercase">
                              {post.category}
                            </span>
                            <h4 className="text-white text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-slate-400 text-sm mt-3 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                          </div>
                          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800">
                            <div className="size-8 rounded-full bg-slate-800 overflow-hidden flex-shrink-0">
                              <img className="w-full h-full object-cover" src={post.avatar} alt={post.author} />
                            </div>
                            <div className="text-[11px] min-w-0">
                              <p className="text-white font-bold uppercase tracking-tight">{post.author}</p>
                              <p className="text-slate-500 font-medium italic">
                                {post.role} • {post.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </ThemeCard>
                  ))}
                </div>
                <div className="mt-12 flex justify-center">
                  <ThemeButton type="button" variant="secondary">
                    Load More Articles
                  </ThemeButton>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-full lg:w-1/3 space-y-12">
                {/* Newsletter */}
                <ThemeCard className="bg-accent-dark border border-slate-800 p-8 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 size-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                  <h4 className="text-white text-xl font-black uppercase tracking-tighter mb-4 relative z-10">
                    Stay Updated
                  </h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                    Get the latest technical deep-dives and engineering updates delivered straight to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-4 relative z-10">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full bg-background-dark border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500"
                    />
                    <ThemeButton type="submit" variant="primary" className="w-full">
                      Subscribe
                    </ThemeButton>
                  </form>
                  <p className="text-slate-600 text-[10px] mt-4 italic relative z-10">
                    No spam. Just high-quality technical content.
                  </p>
                </ThemeCard>

                {/* Popular Categories */}
                <div className="space-y-6">
                  <h4 className="text-white text-lg font-black uppercase tracking-tighter border-b border-slate-800 pb-2">
                    Popular Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_TAGS.map((tag) => (
                      <a
                        key={tag}
                        href="#"
                        className="px-4 py-2 bg-background-dark border border-slate-700 rounded-lg text-xs font-bold hover:border-primary transition-colors text-slate-300"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>

                {/* GitHub Widget */}
                <ThemeCard>
                <a
                  href="https://github.com/Salamander-Tech-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-primary/5 border-0 p-6 flex items-center justify-between group cursor-pointer transition-colors"
                >
                  <div>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">
                      Open Source
                    </p>
                    <p className="text-white font-bold">Check our GitHub</p>
                  </div>
                  <span className="text-3xl group-hover:scale-110 transition-transform">→</span>
                </a>
                </ThemeCard>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - matches About page */}
      <footer className="relative z-10 bg-background-dark/95 backdrop-blur-sm border-t border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
            
              <span className="text-lg font-bold text-white">Salamander</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-primary transition-colors">Security</Link>
              <Link to="#" className="hover:text-primary transition-colors">Status</Link>
            </div>
            <p className="text-sm text-slate-600">© 2026 Salamander Tech Hub. Built with code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
