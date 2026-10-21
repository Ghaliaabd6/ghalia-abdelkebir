import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Download,
  Eye,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Play,
  Sparkles,
  Target,
  X
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { profile } from "./config";
import { projects } from "./projects";
import { translations } from "./translations";


const toolkit = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    tools: "Power BI · DAX · KPI Design · Reporting"
  },
  {
    icon: Database,
    title: "Data Analytics",
    tools: "SQL · PostgreSQL · Pandas · Excel"
  },
  {
    icon: Target,
    title: "Decision Support",
    tools: "Segmentation · Analysis · Business Insights"
  },
  {
    icon: BrainCircuit,
    title: "Applied AI",
    tools: "Machine Learning · XAI · RAG · Prediction"
  }
];


const experiences = [
  {
    period: "Jul 2026 — Aug 2026",
    company: "Talan",
    role: "Data Analytics & Generative AI Intern",
    subtitle: "Health analytics · Fraud detection · Decision support",

    description:
      "Contributed to SANTAID, a health-insurance intelligence platform combining analytical indicators, fraud detection, anomaly analysis and AI-assisted investigation.",

    bullets: [
      "Transformed reimbursement and claims data into risk indicators and actionable analytical insights.",
      "Worked on explainable fraud detection combining supervised models, anomaly detection and business rules.",
      "Integrated FastAPI, RAG, FAISS and Mistral services to enrich analytical and investigation workflows."
    ],

    tags: [
      "Data Analytics",
      "Fraud Analytics",
      "Machine Learning",
      "FastAPI",
      "RAG",
      "FAISS"
    ],

    badge: "3rd Place"
  },

  {
    period: "Jun 2025 — Jul 2025",
    company: "BeeCoders",
    role: "Data Science & AI Intern",
    subtitle: "ETL · Data preparation · NLP · Recommendation",

    description:
      "Worked on data preparation, ETL workflows and intelligent recommendation components while contributing to a conversational assistant.",

    bullets: [
      "Prepared and cleaned data for analytical and AI use cases.",
      "Used Talend ETL workflows to structure and transform data.",
      "Contributed to NLP chatbot and recommendation-system components."
    ],

    tags: [
      "Talend",
      "ETL",
      "Data Preparation",
      "NLP",
      "Recommendation"
    ]
  },

  {
    period: "Jun 2023 — Jul 2023",
    company: "SIMOP",
    role: "Software Development & IT Support Intern",
    subtitle: "Operations · Technical support",

    description:
      "Supported day-to-day technical operations and participated in troubleshooting and maintenance activities.",

    bullets: [
      "Handled technical support and equipment troubleshooting.",
      "Performed maintenance and diagnosis of computer equipment.",
      "Developed practical understanding of operational IT environments."
    ],

    tags: [
      "IT Support",
      "Troubleshooting",
      "Maintenance"
    ]
  }
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    return savedLanguage === "en" ? "en" : "fr";
  });

  const [activeProject, setActiveProject] =
    useState(null);

  const [demoProjectId, setDemoProjectId] =
    useState(null);

  const [photoError, setPhotoError] =
    useState(false);


  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setMenuOpen(false);
  };
  const t = translations[language];
  const localizedProjects = projects.map((project) => ({
    ...project,
    ...(t.projectContent[project.id] || {})
  }));
  const demoProject = localizedProjects.find(
    (project) => project.id === demoProjectId
  );

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);


  return (
    <div className="site-shell">

      {/* NAVBAR */}

      <header className="nav">

        <button
          type="button"
          className="brand"
          onClick={() => scrollTo("home")}
        >

          <span className="brand-logo">
            GA
          </span>


          <span className="brand-copy">

            <strong>
              Ghalia Abdelkebir
            </strong>

            <small>
              BI · Data Analytics · Applied AI
            </small>

          </span>

        </button>


        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          <button type="button" onClick={() => scrollTo("home")}>
            {t.nav.home}
          </button>

          <button type="button" onClick={() => scrollTo("projects")}>
            {t.nav.projects}
          </button>

          <button type="button" onClick={() => scrollTo("about")}>
            {t.nav.profile}
          </button>

          <button type="button" onClick={() => scrollTo("education")}>
            {t.nav.education}
          </button>

          <button type="button" onClick={() => scrollTo("experience")}>
            {t.nav.experience}
          </button>

          <button type="button" onClick={() => scrollTo("contact")}>
            {t.nav.contact}
          </button>

        </nav>

        <div
          className="language-switcher"
          role="group"
          aria-label="Language selector"
        >
          <button
            type="button"
            className={language === "fr" ? "active" : ""}
            aria-pressed={language === "fr"}
            onClick={() => setLanguage("fr")}
          >
            FR
          </button>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="menu-btn"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
        >

          {menuOpen
            ? <X size={22} />
            : <Menu size={22} />
          }

        </button>

      </header>


      <main>

        {/* HERO */}

        <section
          id="home"
          className="section hero"
        >

          <div className="hero-copy">

            <div className="hero-badge">
              <span />

              {t.hero.badge}
            </div>


            <h1>
              Ghalia Abdelkebir
            </h1>


            <h2 className="hero-role">
              {t.hero.role}
            </h2>


            <p className="hero-tagline">

              <strong>
                {t.hero.tagline}
              </strong>

            </p>


            <p className="hero-description">
              {t.hero.description}
            </p>


            <div className="hero-buttons">

              <button
                type="button"
                className="primary-btn"
                onClick={() =>
                  scrollTo("projects")
                }
              >

                {t.hero.viewProjects}

                <ArrowRight size={16} />

              </button>


              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >

                <Download size={16} />

                {t.hero.downloadCV}

              </a>

            </div>


            <div className="hero-stack">

              <span>Power BI</span>
              <span>DAX</span>
              <span>SQL</span>
              <span>PostgreSQL</span>
              <span>Python</span>
              <span>Applied AI</span>

            </div>

          </div>


          <div className="hero-side">

            <div className="hero-photo-card">

              <div className="photo-ring">

                {!photoError ? (

                  <img
                    src="/images/ghalia.jpg"
                    alt="Ghalia Abdelkebir"
                    className="profile-photo"
                    onError={() =>
                      setPhotoError(true)
                    }
                  />

                ) : (

                  <div className="photo-fallback">
                    GA
                  </div>

                )}

              </div>


              <div className="hero-availability">

                <span className="availability-dot" />


                <div>

                  <small>
                    {t.hero.lookingFor}
                  </small>

                  <strong>
                    {t.hero.internship}
                  </strong>

                  <p>
                    {t.hero.internshipDetails}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* TOOLKIT */}

        <section className="section toolkit-section">

          <div className="section-header compact">

            <div>

              <span className="section-kicker">
                {t.toolkit.kicker}
              </span>


              <h2>
                {t.toolkit.title}
                <span className="gradient-word">
                  {" "}{t.toolkit.titleAccent}
                </span>
              </h2>

            </div>

          </div>


          <div className="toolkit-grid">

            {toolkit.map(
              (item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    className={`toolkit-card toolkit-card-${index + 1}`}
                    key={item.title}
                  >

                    <div className="toolkit-icon">

                      <Icon size={20} />

                    </div>


                    <div>

                      <strong>
                        {t.toolkit.items[index][0]}
                      </strong>

                      <span>
                        {t.toolkit.items[index][1]}
                      </span>

                    </div>

                  </div>

                );

              }
            )}

          </div>

        </section>


        {/* PROJECTS */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-header">

            <div>

              <span className="section-kicker">
                {t.projects.kicker}
              </span>


              <h2>
                {t.projects.title}
                <span className="gradient-word">
                  {" "}{t.projects.titleAccent}
                </span>
              </h2>

            </div>


            <p>
              {t.projects.intro}
            </p>

          </div>


          <div className="projects-grid">

            {localizedProjects.map(
              (project, index) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  activeProject={activeProject}
                  setActiveProject={setActiveProject}
                  openDemo={(project) => setDemoProjectId(project.id)}
                  labels={t.projects}
                />

              )
            )}

          </div>


          {activeProject && (

            <ProjectDetails
              project={
                localizedProjects.find(
                  (project) =>
                    project.id === activeProject
                )
              }
              openDemo={(project) => setDemoProjectId(project.id)}
              labels={t.projects}
            />

          )}

        </section>


        {/* PROFILE */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-header">

            <div>

              <span className="section-kicker">
                {t.profile.kicker}
              </span>


              <h2>
                {t.profile.title}
                <span className="gradient-word">
                  {" "}{t.profile.titleAccent}
                </span>
              </h2>

            </div>


            <p>
              {t.profile.intro}
            </p>

          </div>


          <div className="about-grid">

            <div className="about-card">

              <div className="about-card-top">

                <BriefcaseBusiness size={18} />

                <strong>
                  {t.profile.bring}
                </strong>

              </div>


              <ul>

                {t.profile.bringItems.map((item) => <li key={item}>{item}</li>)}

              </ul>

            </div>


            <div className="about-card">

              <div className="about-card-top">

                <Sparkles size={18} />

                <strong>
                  {t.profile.looking}
                </strong>

              </div>


              <ul>

                {t.profile.lookingItems.map((item) => <li key={item}>{item}</li>)}

              </ul>

            </div>

          </div>

        </section>


        {/* EDUCATION */}

        <section
          id="education"
          className="section education-section"
        >

          <div className="section-header">

            <div>

              <span className="section-kicker">
                {t.education.kicker}
              </span>


              <h2>
                {t.education.title}
                <span className="gradient-word">
                  {" "}{t.education.titleAccent}
                </span>
              </h2>

            </div>


            <p>
              {t.education.intro}
            </p>

          </div>


          <article className="education-card">

            <div className="education-icon">

              <GraduationCap size={25} />

            </div>


            <div className="education-main">

              <div className="education-top">

                <div>

                  <span className="education-school">
                    ESPRIT
                  </span>


                  <h3>
                    {t.education.degree}
                  </h3>


                  <p className="education-location">
                    {t.education.location}
                  </p>

                </div>


                <span className="education-status">
                  {t.education.status}
                </span>

              </div>


              <p className="education-description">
                {t.education.description}
              </p>


              <div className="education-focus">

                <div>

                  <small>
                    {t.education.dataBi}
                  </small>

                  <strong>
                    Business Intelligence · Data Analytics · SQL
                  </strong>

                </div>


                <div>

                  <small>
                    {t.education.aiMl}
                  </small>

                  <strong>
                    Machine Learning · Artificial Intelligence
                  </strong>

                </div>


                <div>

                  <small>
                    {t.education.dataEngineering}
                  </small>

                  <strong>
                    ETL · Databases · Data Processing
                  </strong>

                </div>


                <div>

                  <small>
                    {t.education.projectWork}
                  </small>

                  <strong>
                    {t.education.projectWorkValue}
                  </strong>

                </div>

              </div>


              <div className="education-tags">

                <span>Power BI</span>
                <span>SQL</span>
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Data Analytics</span>
                <span>ETL</span>
                <span>AI</span>

              </div>

            </div>

          </article>

        </section>


        {/* EXPERIENCE */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-header">

            <div>

              <span className="section-kicker">
                {t.experience.kicker}
              </span>


              <h2>
                {t.experience.title}
                <span className="gradient-word">
                  {" "}{t.experience.titleAccent}
                </span>
              </h2>

            </div>


            <p>
              {t.experience.intro}
            </p>

          </div>


          <div className="experience-list">

            {t.experience.items.map(
              (experience, index) => (

                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                  period={experiences[index].period}
                  badge={experience.badge || experiences[index].badge}
                />

              )
            )}


            <aside className="opportunity-card">

              <span className="section-kicker opportunity-kicker">
                {t.experience.next}
              </span>


              <h3>
                {t.experience.nextTitle}
              </h3>


              <p>
                {t.experience.nextDescription}
              </p>


              <div className="opportunity-tags">

                <span>Business Intelligence</span>
                <span>Data Analytics</span>
                <span>Power BI</span>
                <span>SQL</span>
                <span>Reporting</span>
                <span>Applied AI</span>

              </div>

            </aside>

          </div>

        </section>


        {/* CONTACT */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-copy">

            <span className="section-kicker">
              {t.contact.kicker}
            </span>


            <h2>
              {t.contact.title}
              <span className="gradient-word">
                {" "}{t.contact.titleAccent}
              </span>
            </h2>


            <p>
              {t.contact.description}
            </p>

          </div>


          <div className="contact-buttons">

            <a
              href={`mailto:${profile.email}`}
              className="primary-btn"
            >

              <Mail size={16} />

              {t.contact.email}

            </a>


            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >

              <Linkedin size={16} />

              LinkedIn

            </a>


            <a
              href={`tel:${profile.phoneHref}`}
              className="secondary-btn"
            >

              <Phone size={16} />

              {profile.phoneLabel}

            </a>

          </div>

        </section>

      </main>


      <footer className="footer">

        <span>
          Ghalia Abdelkebir
        </span>

        <span>
          {t.footer}
        </span>

      </footer>


      {demoProject && (

        <VideoModal
          project={demoProject}
          label={t.projects.projectDemo}
          onClose={() =>
            setDemoProjectId(null)
          }
        />

      )}

    </div>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  activeProject,
  setActiveProject,
  openDemo,
  labels
}) {

  const videoRef = useRef(null);

  const isActive =
    activeProject === project.id;


  const previewPlay = () => {

    videoRef.current
      ?.play()
      .catch(() => {});

  };


  const previewStop = () => {

    if (videoRef.current) {

      videoRef.current.pause();

    }

  };


  return (

    <article
      className={`project-card project-card-${index + 1} ${
        isActive
          ? "active"
          : ""
      }`}
      onMouseEnter={previewPlay}
      onMouseLeave={previewStop}
    >

      <button
        type="button"
        className="project-video-preview"
        onClick={() =>
          openDemo(project)
        }
      >

        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
        />


        <div className="video-preview-overlay">

          <div className="preview-play">

            <Play
              size={15}
              fill="currentColor"
            />

          </div>

          <strong>
            {labels.videoDemo}
          </strong>

          <span>
            {labels.clickToWatch}
          </span>

        </div>

      </button>


      <div className="project-top">

        <span className="project-category">
          {project.eyebrow}
        </span>

        <span className="project-index">
          0{index + 1}
        </span>

      </div>


      <h3>
        {project.title}
      </h3>


      <p className="project-card-description">
        {project.summary}
      </p>


      <ul className="project-points">

        {(project.keyPoints || []).map(
          (item) => (

            <li key={item}>
              {item}
            </li>

          )
        )}

      </ul>


      <div className="project-tech">

        {(project.tech || [])
          .slice(0, 6)
          .map(
            (technology) => (

              <span key={technology}>
                {technology}
              </span>

            )
          )}

      </div>


      <div className="project-actions">

        <button
          type="button"
          className="demo-button"
          onClick={() =>
            openDemo(project)
          }
        >

          <Play
            size={13}
            fill="currentColor"
          />

          {labels.watchDemo}

        </button>


        <button
          type="button"
          className="details-button"
          onClick={() =>
            setActiveProject(
              isActive
                ? null
                : project.id
            )
          }
        >

          <Eye size={13} />

          {isActive
            ? labels.hideDetails
            : labels.moreDetails}

        </button>

      </div>

    </article>
  );
}


/* =========================================================
   PROJECT DETAILS
========================================================= */

function ProjectDetails({
  project,
  openDemo,
  labels
}) {

  if (!project) {
    return null;
  }


  return (

    <div className="project-details">

      <div className="project-detail-main">

        <span className="project-category">
          {project.eyebrow}
        </span>


        <h3>
          {project.title}
        </h3>


        <div className="project-detail-block">

          <small>
            {labels.overview}
          </small>

          <p>
            {project.overview}
          </p>

        </div>


        <div className="project-detail-block">

          <small>
            {labels.built}
          </small>

          <p>
            {project.solution}
          </p>

        </div>


        <div className="project-detail-block">

          <small>
            {labels.businessValue}
          </small>

          <p>
            {project.businessValue}
          </p>

        </div>


        <div className="project-detail-block">

          <small>
            {labels.keyPoints}
          </small>


          <ul className="project-detail-list">

            {(project.highlights || []).map(
              (item) => (

                <li key={item}>
                  {item}
                </li>

              )
            )}

          </ul>

        </div>


        <div className="detail-tags">

          {(project.tech || []).map(
            (technology) => (

              <span key={technology}>
                {technology}
              </span>

            )
          )}

        </div>


        <button
          type="button"
          className="video-button"
          onClick={() =>
            openDemo(project)
          }
        >

          <Play
            size={14}
            fill="currentColor"
          />

          {labels.videoDemo}

        </button>

      </div>


      <div className="project-detail-side">

        <span className="side-label">
          {labels.keyResults}
        </span>


        <div className="metrics-grid">

          {(project.metrics || []).map(
            ([value, label]) => (

              <div
                className="metric-card"
                key={`${value}-${label}`}
              >

                <strong>
                  {value}
                </strong>

                <span>
                  {label}
                </span>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   EXPERIENCE
========================================================= */

function ExperienceCard({
  experience,
  period,
  badge
}) {

  return (

    <article className="experience-card">

      <div className="experience-head">

        <span className="experience-period">
          {period}
        </span>


        {badge && (

          <span className="experience-badge">
            {badge}
          </span>

        )}

      </div>


      <h3 className="experience-company">
        {experience.company}
      </h3>


      <h4 className="experience-role">
        {experience.role}
      </h4>


      <p className="experience-subtitle">
        {experience.subtitle}
      </p>


      <p className="experience-description">
        {experience.description}
      </p>


      <ul className="experience-points">

        {experience.bullets.map(
          (item) => (

            <li key={item}>
              {item}
            </li>

          )
        )}

      </ul>


      <div className="experience-tags">

        {experience.tags.map(
          (tag) => (

            <span key={tag}>
              {tag}
            </span>

          )
        )}

      </div>

    </article>
  );
}


/* =========================================================
   VIDEO MODAL
========================================================= */

function VideoModal({
  project,
  onClose,
  label
}) {

  return (

    <div
      className="video-modal-backdrop"
      onClick={onClose}
    >

      <div
        className="video-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <div className="video-modal-header">

          <div>

            <span>
              {label}
            </span>

            <strong>
              {project.title}
            </strong>

          </div>


          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >

            <X size={20} />

          </button>

        </div>


        <video
          key={project.video}
          controls
          autoPlay
          playsInline
          className="modal-video"
        >

          <source
            src={project.video}
            type="video/mp4"
          />

        </video>

      </div>

    </div>
  );
}


export default App;