import {motion} from 'framer-motion';
export const Reveal=({children,className=''})=><motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>;
export const PageHero=({kicker,title,muted,children})=><section className="page-hero"><div className="container"><Reveal><div className="kicker">{kicker}</div><h1>{title}<br/><span>{muted}</span></h1>{children&&<p>{children}</p>}</Reveal></div></section>;
