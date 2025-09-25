import { JSX, SVGProps } from 'react'

import { getData } from '@/data'
import BookIcon from '@/icons/Book'
import ChipIcon from '@/icons/Chip'
import FileHeartIcon from '@/icons/FileHeart'
import MusicIcon from '@/icons/Music'

import styles from './Main.module.css'

const icons: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  music: MusicIcon,
  book: BookIcon,
  fileHeart: FileHeartIcon,
  chip: ChipIcon,
}

type Project = {
  start: string
  end: string
  name: string
  description: string
  details: string[]
}

type Job = {
  company: string
  projects: Project[]
}

type Hobby = {
  icon: string
  description: string
}

export const Main = async () => {
  const data = await getData('en')

  return (
    <main className={styles.main}>
      <h2 className={styles.title} id='work'>
        {data.main.experience.title}
      </h2>
      {data.main.experience.jobs.map(job => (
        <Job
          key={job.company}
          job={job}
          detailsText={data.main.experience.detailsText}
        />
      ))}

      <h2 className={styles.title} id='hobbies'>
        {data.main.hobbies.title}
      </h2>
      <div className={styles.hobbies}>
        {data.main.hobbies.items.map(hobby => (
          <Hobby key={hobby.icon} hobby={hobby} />
        ))}
      </div>
    </main>
  )
}

function Job({ job, detailsText }: { job: Job; detailsText: string }) {
  return (
    <div className={styles.job}>
      <h3 className={styles.company}>{job.company}</h3>
      {job.projects.map(project => (
        <Project
          key={project.start}
          project={project}
          detailsText={detailsText}
        />
      ))}
    </div>
  )
}
function Project({
  project,
  detailsText,
}: {
  project: Project
  detailsText: string
}) {
  return (
    <div className={styles.project}>
      <p className={styles.projectDates}>
        {project.start} {'->'} {project.end}
      </p>
      <h4 className={styles.projectName}>{project.name}</h4>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.details.length > 0 && (
        <details className={styles.details}>
          <summary className={styles.detailsSummary}>{detailsText}</summary>
          <ul className={styles.detailsList}>
            {project.details.map(detail => (
              <li key={detail} className={styles.detail}>
                {detail}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}

function Hobby({ hobby }: { hobby: Hobby }) {
  const Icon = icons[hobby.icon]

  if (!Icon) throw new Error(`Unknown icon: ${hobby.icon}`)

  return (
    <div className={styles.hobby}>
      <Icon className={styles.hobbyIcon} />
      <p className={styles.hobbyDescription}>{hobby.description}</p>
    </div>
  )
}
