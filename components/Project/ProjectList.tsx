import { Project } from 'lib/types';
import styles from './ProjectList.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <ul className={styles.project_list}>
      {projects.map((project) => (
        <li className={styles.project_item} key={project.title}>
          <Link href={project.url} target="_blank" rel="noreferrer">
            <div className={styles.project_preview}>
              <Image src={project.image} alt={project.title} fill sizes="300" priority />
            </div>
            <div className={styles.project_text}>
              <h2 className={styles.project_title}>{project.title}</h2>
              <p className={styles.project_desc}>{project.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
