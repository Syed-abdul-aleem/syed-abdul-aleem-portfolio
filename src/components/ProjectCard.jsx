import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Section';

export default function ProjectCard({ project }) {
  const destination = project.caseStudyPath || project.url;

  return (
    <Reveal className="project card">
      <div className="project-media">
        {project.image ? (
          <a
            href={destination}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noreferrer' : undefined}
            className="project-image-link"
            aria-label={`Open ${project.title}`}
          >
            <img
              className="project-image"
              src={project.image}
              alt={`${project.title} project preview`}
            />
            <span className="image-open">
              <ArrowUpRight size={18} />
            </span>
          </a>
        ) : (
          <div className="mock-browser">
            <div className="dots"><i /><i /><i /></div>
            <div className="mock-line big" />
            <div className="mock-line" />
            <div className="mock-grid">
              <div /><div /><div />
            </div>
          </div>
        )}

        <span className="mini-note">
          PROJECT / {project.number}
        </span>
      </div>

      <div className="project-body">
        <div className="project-meta">{project.category}</div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <a
          className="project-link"
          href={destination}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? 'noreferrer' : undefined}
        >
          {project.external ? 'Open Project' : 'View Case Study'}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </Reveal>
  );
}