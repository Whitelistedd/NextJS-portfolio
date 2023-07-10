export type ExpType = {
  year: string
  details: Array<{
    title: string
    desc: string
  }>
}

export type skillsType = {
  title: string
  link: string
  image: string
}

export type SkillProps = skillsType

export type ExpProps = ExpType
