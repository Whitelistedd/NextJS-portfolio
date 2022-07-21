import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { filterTypes } from '../../constants'
import { client, urlFor } from '../../SanityClient'
import { Hightlight } from '../About/About'
import { SideNav } from '../Navbar/SideNav/SideNav'
import { Card } from './Card/Card'
import { ProjectsCardsState } from './Projects.model'

export const Projects: React.FC = () => {
  const [projectsCards, setProjectsCards] = useState<ProjectsCardsState[]>([])
  const [filteredProjects, setFilteredProjects] = useState<
    ProjectsCardsState[]
  >([])
  const [filter, setFilter] = useState<string>('All')
  const [animation, setAnimation] = useState('fadeUp')

  const handleFilters = (filterType: string) => {
    setFilter(filterType)
    setAnimation('fadeDown')
  }

  useEffect(() => {
    setTimeout(() => {
      setAnimation('fadeUp')
      setFilteredProjects(
        filter === 'All'
          ? projectsCards
          : projectsCards.filter((project) => project?.tags?.includes(filter))
      )
    }, 500)
  }, [filter, projectsCards])

  useEffect(() => {
    const getAllAboutCards = () => {
      const query = '*[_type == "projects"]'

      client.fetch(query).then((data) => {
        setProjectsCards(data)
        setFilteredProjects(data)
      })
    }
    getAllAboutCards()
  }, [])

  return (
    <Container id="Проекты">
      <SideNav activeId={3} />
      <Title>
        Мои <Hightlight>Проекты</Hightlight>
      </Title>
      <Selections>
        {filterTypes.map((filterType, index) => (
          <Selection
            key={`project-selection ${index}`}
            onClick={() => handleFilters(filterType)}
            active={filter === filterType}
          >
            {filterType}
          </Selection>
        ))}
      </Selections>
      <Cards>
        {filteredProjects?.map((card, index) => (
          <Card
            key={`projects-cards ${index}`}
            title={card.title}
            description={card.description}
            ImageSRC={urlFor(card.mainImage).url()}
            projectLink={card.projectLink}
            projectCode={card.projectCode}
            animation={animation}
            tags={card.tags}
          />
        ))}
      </Cards>
    </Container>
  )
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`

const Selection = styled.button<{ active: boolean }>`
  padding: 0.6em 1em;
  background-color: ${(props) =>
    props.active ? 'var(--secondary-font-color)' : 'white'};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: none;
  border-radius: 10px;
  font-size: 0.6em;
  font-family: 'Golos Bold';
  transition: 400ms ease;
  box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background-color: var(--secondary-font-color);
    color: white;
  }
`

const Selections = styled.div`
  display: flex;
  gap: 1em;
`

const Title = styled.h2``

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 3em;
  padding: 1em;
  font-size: 25px;
`
