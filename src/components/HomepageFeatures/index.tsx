import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: '排程時間',
    link: '/img/schedule-calendar-time-svgrepo-com.png',
    description: '',
  },
  {
    title: '排程執行狀況',
    link: '/img/execute-yes-svgrepo-com.png',
    description: '',
  },
  {
    title: '資料字典',
    link: '/img/dictionary-svgrepo-com.png',    
    description: '',
  }, 
];

function Feature({link, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureSvg}  src={useBaseUrl(link)} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
