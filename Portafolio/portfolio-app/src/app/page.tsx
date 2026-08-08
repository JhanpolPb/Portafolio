import { portfolioData } from "@/data/portfolio";
import { getGitHubUser, getGitHubRepos } from "@/lib/github";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage() {
  const { github, personal, social, ...rest } = portfolioData;

  // Fetch GitHub data on the server (cached, no client bundle overhead)
  const [gitHubUser, gitHubRepos] = await Promise.all([
    getGitHubUser(github.username),
    getGitHubRepos(github.username, 6),
  ]);

  return (
    <div className="min-h-screen bg-[#080810]">
      <Navbar name={personal.name} />

      <main>
        <Hero data={personal} social={social} />
        <About data={personal} />
        <Stats stats={rest.stats} />
        <Technologies technologies={rest.technologies} />
        <Experience experience={rest.experience} />
        <Education education={rest.education} />
        <Certifications certifications={rest.certifications} />
        <Projects projects={rest.projects} />
        <GitHubSection
          user={gitHubUser}
          repos={gitHubRepos}
          username={github.username}
        />
        <Services services={rest.services} />
        <Contact personal={personal} social={social} />
      </main>

      <Footer name={personal.name} social={social} />
    </div>
  );
}
