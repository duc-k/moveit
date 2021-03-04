import Head from 'next/head';
import { GetServerSideProps  } from 'next';

import { ChallengeProvider } from 'src/contexts/ChallengesContext';
import { CountdownProvider } from 'src/contexts/CountdownContext';

import { ExperienceBar } from '@components/ExperienceBar';
import { Profile } from "@components/Profile";
import { CompletedChallenges } from "@components/CompletedChallenges";
import { Countdown } from "@components/Countdown";
import { ChallengeBox } from '@components/ChallengeBox';

import styles from '@styles/pages/Home.module.css';

export default function Home(props) {
  return (
    <ChallengeProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={ styles.container }>
        <Head>
          <title>Homepage</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}