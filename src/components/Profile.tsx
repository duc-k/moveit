import styles from '@styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from 'src/contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/duc-k.png" alt="Ricardo Brito" />
      <div>
        <strong>Ricardo Brito</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          { `Level ${level}` }
        </p>
      </div>
    </div>
  )
}