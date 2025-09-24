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

type Job = {
  start: string
  end: string
  name: string
  description: string
}

type Project = {
  company: string
  jobs: Job[]
}

type Hobby = {
  icon: string
  description: string
}

export const Main = async () => {
  const data = await getData('en')

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{data.main.experience.title}</h2>
      {data.main.experience.projects.map(project => (
        <Project key={project.company} project={project} />
      ))}
      <p className={styles.incentive}>{data.main.experience.incentive}</p>

      <h2 className={styles.title}>{data.main.hobbies.title}</h2>
      <div className={styles.hobbies}>
        {data.main.hobbies.items.map(hobby => (
          <Hobby key={hobby.icon} hobby={hobby} />
        ))}
      </div>
    </main>
  )
}

function Job({ job }: { job: Job }) {
  return (
    <div className={styles.projectJob}>
      <p className={styles.projectDates}>
        {job.start} {'->'} {job.end}
      </p>
      <h4 className={styles.projectName}>{job.name}</h4>
      <p className={styles.projectDescription}>{job.description}</p>
    </div>
  )
}

function Project({ project }: { project: Project }) {
  return (
    <div className={styles.project}>
      <h3 className={styles.projectCompany}>{project.company}</h3>
      {project.jobs.map(job => (
        <Job key={job.start} job={job} />
      ))}
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
