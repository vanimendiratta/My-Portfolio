import { Code2, BarChart3, Palette, Megaphone, Github, Linkedin, Mail } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import Profile from './components/me.jpeg'

function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Vani Mendiratta
            </h1>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences through
              <span className="text-primary"> Frontend Development</span>,
              <span className="text-secondary"> Digital Marketing</span>,
              <span className="text-accent"> Data Analytics</span>, and
              <span className="text-primary"> UI/UX Design</span>
            </p>
            <div className="flex gap-6 justify-center lg:justify-start">
              {/* <a href="#" className="bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-neon hover:shadow-neon-hover">
                View Projects <ArrowRight className="w-5 h-5" />
              </a> */}
              <div className="flex gap-4 items-center">
                <a href="https://github.com/vanimendiratta" className="text-gray-300 hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/vani-mendiratta-342402228" className="text-gray-300 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://vanimendiratta5@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-float">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-neon">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<Code2 className="w-8 h-8" />}
            title="Frontend Development"
            description="Building responsive and performant web applications using modern frameworks and best practices"
            color="primary"
          />
          <SkillCard
            icon={<Megaphone className="w-8 h-8" />}
            title="Digital Marketing"
            description="Creating and executing comprehensive digital marketing strategies to drive growth"
            color="secondary"
          />
          <SkillCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Data Analytics"
            description="Transforming raw data into actionable insights through advanced analytics"
            color="accent"
          />
          <SkillCard
            icon={<Palette className="w-8 h-8" />}
            title="UI/UX Design"
            description="Crafting intuitive and beautiful user experiences that delight users"
            color="primary"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500"
            title="E-Commerce Dashboard"
            category="Frontend Development"
            description="A comprehensive dashboard for managing online store operations"
            color="primary"
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"
            title="Marketing Campaign Analysis"
            category="Digital Marketing"
            description="Data-driven marketing campaign optimization for a major retail brand"
            color="secondary"
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=800&h=500"
            title="UX Case Study"
            category="UI/UX Design"
            description="Redesigning the user experience for a fintech application"
            color="accent"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-neon">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-neon hover:shadow-neon-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 backdrop-blur-lg bg-dark/50">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Vani Mendiratta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;