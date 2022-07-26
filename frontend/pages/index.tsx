import { About } from '../src/component/About/About'
import { Contact } from '../src/component/Contact/Contact'
import Head from 'next/head'
import { Header } from '../src/component/Header/Header'
import type { NextPage } from 'next'
import { Projects } from '../src/component/Projects/Projects'
import { SkillsAndExp } from '../src/component/SkillsAndExp/SkillsAndExp'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>{`Muha's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Projects />
      <SkillsAndExp />
      <Contact />
    </Container>
  )
}

export const Container = styled.div``

export default Home
