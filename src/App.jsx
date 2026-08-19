import { Routes, Route, Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Mail, ArrowLeft } from 'lucide-react';
import Layout from './components/Layout';
import { Reveal, PageHero } from './components/Section';
import ProjectCard from './components/ProjectCard';
import SocialButtons from './components/SocialButtons';
import { projects } from './data/projects';
import { services, skillGroups } from './data/content';

const Btn = ({ to, children, primary = false, external = false }) =>
  external
    ? <a className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`} href={to} target="_blank" rel="noreferrer">{children}</a>
    : <Link className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`} to={to}>{children}</Link>;


/* =========================================================
   HOME
========================================================= */

function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <Reveal>
          <div className="eyebrow">AI DEVELOPER · AUTOMATION · VIBE CODING</div>
          <div className="hero-name">SYED ABDUL ALEEM AHMAD SHAH</div>

          <h1>
            BUILD IDEAS.<br />
            <span>MAKE THEM REAL.</span>
          </h1>

          <p className="lead">
            I build practical digital experiences with AI, automation and modern
            web technology — turning ideas into products, workflows and business
            solutions that are meant to ship.
          </p>

          <div className="hero-actions">
            <Btn to="/contact" primary>
              HIRE ME <ArrowUpRight />
            </Btn>

            <Btn to="/work">
              EXPLORE WORK <ArrowDown />
            </Btn>
          </div>

          <div className="status">
            <i /> CURRENTLY AVAILABLE FOR FREELANCE WORK · PAKISTAN
          </div>

          <SocialButtons className="hero-socials" />
        </Reveal>

        <Reveal className="hero-visual">
          <div className="orbit" />
          <div className="hero-halo" />

          <div className="core">
            <div className="profile-frame">
              <img src="/profile.jpg" alt="Syed Abdul Aleem Ahmad Shah" />
            </div>

            <span className="profile-badge">
              AVAILABLE · 2026
            </span>
          </div>

          <span className="floating-tag tag-a">AI / BUILD</span>
          <span className="floating-tag tag-b">SHIP IT ↗</span>
        </Reveal>
      </div>
    </section>

    <div className="marquee">
      <div>
        AI DEVELOPMENT · AUTOMATION · VIBE CODING · WEB DEVELOPMENT ·
        E-COMMERCE · AI INTEGRATION · n8n · PRODUCT BUILDING ·
        AI DEVELOPMENT · AUTOMATION · VIBE CODING ·
      </div>
    </div>

    <section className="section section-tight">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">01 / FEATURED WORK</div>
            <h2>ZORVA IS LIVE.</h2>
          </div>

          <p className="section-intro">
            A real project should do more than sit in a portfolio. Open it,
            explore it and see the work in motion.
          </p>
        </div>

        <ProjectCard project={projects[0]} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">02 / WHY ME</div>
            <h2>MORE THAN A DEVELOPER.</h2>
          </div>

          <p className="section-intro">
            A mix of technology, automation, research and real-world business thinking.
          </p>
        </div>

        <div className="grid grid-3">
          {[
            [
              '01',
              'AI-FIRST THINKING',
              'Using modern AI tools and workflows to accelerate ideas, research, products and problem solving.'
            ],
            [
              '02',
              'AUTOMATION MINDSET',
              'Finding repetitive work and turning it into smarter, connected workflows that save time.'
            ],
            [
              '03',
              'BUSINESS AWARENESS',
              'Building with users, operations, reliability and real business outcomes in mind — not just appearance.'
            ]
          ].map(([n, t, d]) => (
            <Reveal className="card feature-card" key={n}>
              <span className="card-num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <div className="container">
      <Reveal className="cta">
        <div className="kicker">LET'S BUILD</div>

        <h2>
          HAVE AN IDEA?<br />
          <span>LET'S MAKE IT REAL.</span>
        </h2>

        <p>
          Website, AI feature, automation or digital product — tell me what
          you want to build and let's turn it into something useful.
        </p>

        <div className="hero-actions">
          <Btn to="/contact" primary>
            HIRE ME <ArrowUpRight />
          </Btn>

          <a
            className="btn btn-ghost"
            href="mailto:syedabdulaleem.ai@gmail.com"
          >
            <Mail size={16} /> EMAIL ME
          </a>
        </div>
      </Reveal>
    </div>
  </>;
}


/* =========================================================
   ABOUT
========================================================= */

function About() {
  return <>
    <PageHero
      kicker="ABOUT / 01"
      title="DEVELOPER BY CRAFT."
      muted="BUILDER BY MINDSET."
    >
      I am Syed Abdul Aleem Ahmad Shah, an independent developer from Pakistan
      focused on AI-powered development, automation, vibe coding and practical
      digital products.
    </PageHero>

    <section className="section section-tight">
      <div className="container grid grid-2">
        <Reveal className="card profile-card">
          <div className="profile-large">
            <img src="/profile.jpg" alt="Syed Abdul Aleem Ahmad Shah" />
          </div>

          <div className="profile-caption">
            <span>AI DEVELOPER</span>
            <span>PAKISTAN</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="kicker">THE SHORT VERSION</div>

          <h2>
            BUILDING USEFUL THINGS, NOT JUST PRETTY SCREENS.
          </h2>

          <p className="muted big">
            My work sits where AI, automation, web development and real-world
            problem solving meet. I like taking an unclear idea, finding the
            simplest useful path forward, and turning it into something people
            can actually use.
          </p>

          <p className="muted">
            I work independently and also own Zewarly, an e-commerce business.
            That experience keeps my development grounded in real decisions:
            customer experience, operations, content, reliability, digital
            workflows and what genuinely saves time.
          </p>

          <p className="muted">
            My approach is straightforward: understand the problem, choose the
            right tools, build quickly, test carefully, ship confidently and
            improve from there.
          </p>

          <div className="hero-actions">
            <Btn to="/work" primary>
              SEE MY WORK <ArrowUpRight />
            </Btn>

            <Btn to="/contact">
              HIRE ME
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">RECOGNITION</div>
            <h2>CERTIFICATIONS.</h2>
          </div>
        </div>

        <div className="grid grid-2">
          <Reveal className="card cert">
            <div className="card-num">2026 · AI</div>
            <h3>ACT AI — NATIONAL AI TRAINING PROGRAM</h3>
            <p>
              Eight-week training covering AI foundations, generative AI,
              agentic AI, AI tools & productivity, and freelancing with AI.
            </p>
            <img
              src="/certificates/act-ai-certificate.jpg"
              alt="ACT AI certificate of completion"
            />
          </Reveal>

          <Reveal className="card cert">
            <div className="card-num">WEB DEVELOPMENT</div>
            <h3>WEB DEVELOPMENT COURSE</h3>
            <p>
              CodeLab Computer Science Skill Development Academy — HTML5,
              CSS3 animations, JavaScript and web development.
            </p>
            <img
              src="/certificates/web-development-certificate.jpg"
              alt="Web development certificate of completion"
            />
          </Reveal>
        </div>
      </div>
    </section>
  </>;
}


/* =========================================================
   WORK
========================================================= */

function Work() {
  return <>
    <PageHero
      kicker="WORK / 01"
      title="SELECTED WORK."
      muted="BUILT TO SHIP."
    >
      Real projects, practical systems and experiments built around useful
      digital outcomes.
    </PageHero>

    <section className="section section-tight">
      <div className="container">

        {/* EXISTING ZORVA PROJECT */}
        <ProjectCard project={projects[0]} />

        {/* NEW N8N PROJECT */}
<ProjectCard project={projects[1]} />
        <Reveal className="empty">
          <div className="kicker">FUTURE PROJECTS</div>
          <h2>MORE BUILDS ARE COMING.</h2>
          <p>
            New projects and case studies will be added as they are shipped.
          </p>
        </Reveal>

      </div>
    </section>
  </>;
}


/* =========================================================
   ZEWARLY N8N CASE STUDY
========================================================= */

function ZewarlyAutomationCaseStudy() {
  return <>
    <PageHero
      kicker="CASE STUDY / 02"
      title="ZEWARLY SOCIAL"
      muted="MEDIA AUTOMATION."
    >
      A working n8n automation that connects WooCommerce, AI and Meta
      publishing APIs to turn real Zewarly products into ready-to-publish
      social-media content.
    </PageHero>

    <section className="section section-tight">
      <div className="container">

        <Link className="btn btn-ghost back-link" to="/work">
          <ArrowLeft size={16} /> BACK TO WORK
        </Link>

        {/* PROJECT INTRO */}
        <Reveal className="card case-block">
          <div className="kicker">PROJECT OVERVIEW</div>

          <h2>FROM PRODUCT CATALOG TO SOCIAL MEDIA.</h2>

          <p className="muted big">
            Zewarly Social Media Automation is an n8n-based workflow created
            for Zewarly, a Pakistani artificial-jewelry e-commerce business.
            The system connects the store's WooCommerce catalog with AI
            content generation and Meta's publishing APIs.
          </p>

          <p className="muted">
            Instead of manually selecting a product, collecting its information,
            finding its image, writing a caption and preparing posts for
            multiple platforms, the workflow brings these stages together into
            one repeatable automation.
          </p>
        </Reveal>


        {/* WORKFLOW IMAGE */}
        <Reveal className="card case-block case-block-lg">
          <div className="kicker">WORKFLOW ARCHITECTURE</div>

          <h2>THE AUTOMATION IN ACTION.</h2>

          <p className="muted">
            The complete n8n workflow connects the product source, data
            processing, AI generation, image handling and social-media
            publishing stages.
          </p>

          <div className="case-image">
            <img
              src="/n8n-workflow.jpg"
              alt="Zewarly Social Media Automation n8n workflow"
            />
          </div>
        </Reveal>


        {/* PROBLEM */}
        <section className="section section-tight">
          <Reveal>
            <div className="kicker">01 / THE PROBLEM</div>

            <h2>CONTENT CREATION WAS REPETITIVE.</h2>

            <p className="muted big">
              Product-based social-media content required several manual
              steps every time a product needed to be promoted.
            </p>

            <div className="grid grid-2">
              {[
                ['01', 'SELECT A PRODUCT', 'Choose a product from the WooCommerce catalog.'],
                ['02', 'COLLECT INFORMATION', 'Gather the product name, description, URL and image.'],
                ['03', 'WRITE THE COPY', 'Create promotional social-media content manually.'],
                ['04', 'PUBLISH', 'Prepare and publish the content across social platforms.']
              ].map(([n, t, d]) => (
                <div className="card" key={n}>
                  <span className="card-num">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>


        {/* SOLUTION */}
        <section className="section section-tight">
          <Reveal>
            <div className="kicker">02 / THE SOLUTION</div>

            <h2>ONE CONNECTED WORKFLOW.</h2>

            <p className="muted big">
              The automation turns the manual process into a connected
              sequence of services inside n8n.
            </p>

            <div className="card">
              <p className="muted big">
                WooCommerce → Google Sheets → JavaScript → Limit →
                Product Image → Gemini AI → Facebook → Instagram
              </p>
            </div>
          </Reveal>
        </section>


        {/* HOW IT WORKS */}
        <section className="section section-tight">
          <Reveal>
            <div className="kicker">03 / HOW IT WORKS</div>

            <h2>THE AUTOMATION FLOW.</h2>
          </Reveal>

          <div className="grid grid-2">

            <Reveal className="card">
              <span className="card-num">01</span>
              <h3>WOOCOMMERCE PRODUCT SOURCE</h3>
              <p>
                The workflow retrieves products from the Zewarly WooCommerce
                catalog using the WooCommerce integration.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">02</span>
              <h3>GOOGLE SHEETS TRACKING</h3>
              <p>
                Google Sheets is used as part of the workflow's product and
                generated-content tracking process.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">03</span>
              <h3>JAVASCRIPT PROCESSING</h3>
              <p>
                A JavaScript Code node processes the product data and selects
                the next product that has not already been recorded in the
                sheet.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">04</span>
              <h3>CONTROLLED PROCESSING</h3>
              <p>
                The Limit node controls how many items continue through the
                downstream content-generation and publishing stages.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">05</span>
              <h3>PRODUCT IMAGE</h3>
              <p>
                The workflow retrieves the selected product's image URL so the
                actual product image can be used in the publishing process.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">06</span>
              <h3>AI CONTENT GENERATION</h3>
              <p>
                Gemini receives the product information and generates a
                product-specific social-media post following defined content
                rules.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">07</span>
              <h3>FACEBOOK</h3>
              <p>
                The generated caption and product image are sent through the
                Meta/Facebook publishing integration.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="card-num">08</span>
              <h3>INSTAGRAM</h3>
              <p>
                Instagram media is created using the product image, generated
                caption and Instagram Graph API authentication, followed by
                the media publishing request.
              </p>
            </Reveal>

          </div>
        </section>


        {/* AI */}
        <section className="section section-tight">
          <Reveal className="card">
            <div className="kicker">04 / AI COMPONENT</div>

            <h2>AI THAT WRITES FOR THE PRODUCT.</h2>

            <p className="muted big">
              The AI is not used to invent product information. It receives
              the actual product name, description and URL and turns that
              information into social-media-ready promotional copy.
            </p>

            <div className="grid grid-2">
              <div>
                <h3>INPUT</h3>
                <p className="muted">
                  Product name<br />
                  Product description<br />
                  Product URL
                </p>
              </div>

              <div>
                <h3>OUTPUT</h3>
                <p className="muted">
                  Promotional hook<br />
                  Product-focused copy<br />
                  Call to action<br />
                  Product URL<br />
                  Relevant hashtags
                </p>
              </div>
            </div>
          </Reveal>
        </section>


        {/* TECH STACK */}
        <section className="section section-tight">
          <Reveal>
            <div className="kicker">05 / TECH STACK</div>

            <h2>THE SYSTEM BEHIND IT.</h2>
          </Reveal>

          <div className="grid grid-3">

            {[
              ['n8n', 'Main workflow automation engine running locally.'],
              ['WooCommerce', 'Real Zewarly product catalog and product data source.'],
              ['Google Sheets', 'Workflow tracking and generated-content records.'],
              ['JavaScript', 'Product selection and data transformation.'],
              ['Gemini AI', 'Product-specific social-media copy generation.'],
              ['Meta APIs', 'Facebook and Instagram publishing infrastructure.']
            ].map(([title, description]) => (
              <Reveal className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}

          </div>
        </section>


        {/* BUSINESS VALUE */}
        <section className="section section-tight">
          <Reveal className="card">
            <div className="kicker">06 / BUSINESS VALUE</div>

            <h2>LESS REPETITIVE WORK. MORE CONSISTENT CONTENT.</h2>

            <p className="muted big">
              The workflow creates a repeatable process for turning products
              already available in the store into social-media content.
            </p>

            <div className="grid grid-2">
              <div>
                <h3>TIME SAVING</h3>
                <p className="muted">
                  Reduces repeated manual work involved in preparing
                  product-based social content.
                </p>
              </div>

              <div>
                <h3>CONSISTENCY</h3>
                <p className="muted">
                  Keeps product information, URLs and social-media formatting
                  within a defined content-generation process.
                </p>
              </div>

              <div>
                <h3>SCALABILITY</h3>
                <p className="muted">
                  The workflow can work with a larger WooCommerce catalog while
                  using the Limit node to control processing.
                </p>
              </div>

              <div>
                <h3>REAL-WORLD USE</h3>
                <p className="muted">
                  The system was built around real Zewarly products rather
                  than a fictional demo catalog.
                </p>
              </div>
            </div>
          </Reveal>
        </section>


        {/* CHALLENGES */}
        <section className="section section-tight">
          <Reveal>
            <div className="kicker">07 / CHALLENGES</div>

            <h2>BUILDING IT WAS PART OF THE PROJECT.</h2>

            <p className="muted big">
              The Meta integrations required troubleshooting during
              development, including permissions, developer-role configuration
              and expired access tokens.
            </p>
          </Reveal>

          <div className="grid grid-3">
            {[
              ['META PERMISSIONS', 'Resolved Meta application permission issues during API configuration.'],
              ['AUTHENTICATION', 'Configured and tested the access-token based publishing flow.'],
              ['TOKEN EXPIRATION', 'Diagnosed and corrected expired Meta access-token problems during testing.']
            ].map(([title, description]) => (
              <Reveal className="card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </section>


        {/* LIMITATIONS */}
        <section className="section section-tight">
          <Reveal className="card">
            <div className="kicker">08 / CURRENT LIMITATIONS</div>

            <h2>WHAT THIS VERSION DOES — AND DOESN'T.</h2>

            <p className="muted">
              This project is a functional local automation prototype rather
              than a fully hosted enterprise social-media platform.
            </p>

            <div className="grid grid-2">
              <div>
                <h3>CURRENT</h3>
                <p className="muted">
                  Local n8n workflow<br />
                  WooCommerce product retrieval<br />
                  AI content generation<br />
                  Product image handling<br />
                  Facebook publishing<br />
                  Instagram publishing
                </p>
              </div>

              <div>
                <h3>FUTURE IMPROVEMENTS</h3>
                <p className="muted">
                  Cloud/24×7 hosting<br />
                  Automatic scheduling<br />
                  Automated error notifications<br />
                  Automatic token management<br />
                  Advanced analytics
                </p>
              </div>
            </div>
          </Reveal>
        </section>


        {/* FINAL */}
        <section className="section">
          <Reveal className="cta">
            <div className="kicker">FINAL RESULT</div>

            <h2>
              A REAL BUSINESS<br />
              <span>AUTOMATION.</span>
            </h2>

            <p>
              A working n8n automation that connects a real WooCommerce
              catalog, AI content generation and Meta publishing APIs into
              one repeatable social-media workflow.
            </p>

            <div className="hero-actions">
              <Btn to="/work" primary>
                BACK TO WORK <ArrowLeft />
              </Btn>

              <Btn to="/contact">
                HIRE ME <ArrowUpRight />
              </Btn>
            </div>
          </Reveal>
        </section>

      </div>
    </section>
  </>;
}


/* =========================================================
   SERVICES
========================================================= */

function Services() {
  return <>
    <PageHero
      kicker="SERVICES / 01"
      title="PROBLEMS FIRST."
      muted="TECHNOLOGY SECOND."
    >
      I build practical digital solutions around the outcome, not around a buzzword list.
    </PageHero>

    <section className="section section-tight">
      <div className="container grid grid-3">
        {services.map((s, i) => (
          <Reveal className="card service" key={s}>
            <span className="card-num">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3>{s}</h3>

            <p>
              Designed around a real problem, a clear workflow and a useful outcome.
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  </>;
}


/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  return <>
    <PageHero
      kicker="SKILLS / 01"
      title="TOOLS ARE USEFUL"
      muted="WHEN THEY SHIP."
    >
      A practical toolkit spanning AI, automation, web development, creative
      technology and research.
    </PageHero>

    <section className="section section-tight">
      <div className="container skill-list">
        {skillGroups.map(([title, items], i) => (
          <Reveal className="skill-group" key={title}>
            <div className="skill-title">
              <span>0{i + 1}</span>
              <h2>{title}</h2>
            </div>

            <div className="chips">
              {items.map(x => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>;
}


/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  const steps = [
    ['01', 'UNDERSTAND', 'Clarify the problem, audience and desired outcome.'],
    ['02', 'PLAN', 'Choose the right tools, architecture and AI approach.'],
    ['03', 'BUILD', 'Turn the idea into a working product or workflow.'],
    ['04', 'TEST', 'Refine functionality, UX and reliability.'],
    ['05', 'DEPLOY', 'Ship the solution to a real production environment.'],
    ['06', 'IMPROVE', 'Keep learning from usage and make the solution better.']
  ];

  return <>
    <PageHero
      kicker="EXPERIENCE / 01"
      title="FROM IDEA"
      muted="TO LAUNCH."
    >
      An independent developer path built around learning fast, shipping real
      work and understanding digital products from both sides of the screen.
    </PageHero>

    <section className="section section-tight">
      <div className="container grid grid-2">
        <Reveal>
          <div className="kicker">EXPERIENCE</div>

          <div className="timeline">
            <div className="timeline-item">
              <span>CURRENT</span>
              <h3>FREELANCE / INDEPENDENT DEVELOPER</h3>
              <p>
                Building websites, AI-powered solutions, automations and
                digital experiences for practical use.
              </p>
            </div>

            <div className="timeline-item">
              <span>OWNER</span>
              <h3>ZEWARLY — E-COMMERCE</h3>
              <p>
                Owner of an online e-commerce business, connecting development
                with real business operations.
              </p>

              <a
                href="https://www.zewarly.pk/"
                target="_blank"
                rel="noreferrer"
              >
                EXPLORE ZEWARLY <ArrowUpRight />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="card">
          <div className="kicker">REAL-WORLD LENS</div>

          <h2>CODE MEETS BUSINESS.</h2>

          <p className="muted">
            Owning an e-commerce business means thinking about more than how
            something looks. It means thinking about customers, operations,
            conversions, content, reliability and what actually saves time.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="kicker">PROCESS</div>
            <h2>HOW I WORK.</h2>
          </div>
        </div>

        <div className="grid grid-3">
          {steps.map(([n, t, d]) => (
            <Reveal className="card" key={n}>
              <span className="card-num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>;
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return <>
    <PageHero
      kicker="CONTACT / 01"
      title="LET'S BUILD"
      muted="SOMETHING USEFUL."
    >
      Have an idea, workflow or business problem that could be improved with
      modern web development, AI or automation?
    </PageHero>

    <section className="section section-tight">
      <div className="container contact-grid">

        <Reveal className="card">
          <div className="kicker">HIRE ME</div>

          <a
            className="contact-email"
            href="mailto:syedabdulaleem.ai@gmail.com"
          >
            syedabdulaleem.ai@gmail.com
          </a>

          <p className="muted">
            Currently available for freelance work. Choose a platform below
            or email me directly.
          </p>

          <SocialButtons className="wrap contact-socials" />
        </Reveal>

        <Reveal className="card">
          <div className="kicker">START A CONVERSATION</div>

          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();

              const f = new FormData(e.currentTarget);

              location.href =
                `mailto:syedabdulaleem.ai@gmail.com?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(f.get('message'))}`;
            }}
          >
            <input
              name="subject"
              placeholder="PROJECT / SUBJECT"
              required
            />

            <textarea
              name="message"
              placeholder="TELL ME WHAT YOU WANT TO BUILD..."
              required
            />

            <button
              className="btn btn-primary"
              type="submit"
            >
              HIRE ME <ArrowUpRight />
            </button>
          </form>

          <div className="notice">
            THIS FORM OPENS YOUR EMAIL CLIENT — NO BACKEND IS REQUIRED.
          </div>
        </Reveal>

      </div>
    </section>
  </>;
}


/* =========================================================
   APP
========================================================= */

export default function App({ theme, setTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/work" element={<Work />} />

        {/* NEW N8N CASE STUDY */}
        <Route
          path="/work/zewarly-social-media-automation"
          element={<ZewarlyAutomationCaseStudy />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Layout>
  );
}