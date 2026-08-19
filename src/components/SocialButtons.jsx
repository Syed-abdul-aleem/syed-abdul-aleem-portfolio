import { ArrowUpRight, Mail } from 'lucide-react';
import BrandIcon from './BrandIcon';
import { socials } from '../data/content';

export default function SocialButtons({ className = '' }) {
  return (
    <div className={`socials ${className}`.trim()}>
      {socials.map(([name, url]) => (
        <a className="social-btn" key={name} href={url} target="_blank" rel="noreferrer">
          <BrandIcon name={name} size={20} />
          <span>{name}</span>
          <ArrowUpRight size={15} />
        </a>
      ))}
      <a className="social-btn email-social" href="mailto:syedabdulaleem.ai@gmail.com" aria-label="Email Syed Abdul Aleem">
        <Mail size={20} />
        <span>Email</span>
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
