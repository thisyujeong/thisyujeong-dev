import { Project } from 'lib/types';
import Image from 'next/image';
import styles from './ProjectList.module.scss';
import Link from 'next/link';

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <ul className={styles.project_list}>
      {projects.map((project) => (
        <li className={styles.project_item} key={project.title}>
          <Link href={project.url} target="_blank" rel="noreferrer">
            <div className={styles.project_preview}>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
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
