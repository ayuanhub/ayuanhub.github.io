import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: '數據工程與治理科',
    link: '/img/engine-gear-setting-svgrepo-com.png',
    description: (
      <>
        數據工程<br/>
        數據治理
      </>
    ),
  },
  {
    title: '客戶關係與管理科',
    link: '/img/customer-management-sales-line-svgrepo-com.png',
    description: (
      <>
        客群經營<br/>
        CRM客戶關係管理與行銷<br/>
        客戶洞悉
      </>
    ),
  },
  {
    title: '整合行銷與通路科',
    link: '/img/marketing-outline-people-svgrepo-com.png',
    description: (
      <>
        客群整合行銷<br/>
        LINE會員經營與行銷活動<br/>
        客戶洞悉
      </>
    ),
  },
  {
    title: '價值分析與管理科',
    link: '/img/marketing-analysis-marketing-research-svgrepo-com.png',
    description: (
      <>
        價值分析與管理<br/>
        分析資料定義與設計
      </>
    ),
  },
  {
    title: '風險智能與決策科',
    link: '/img/security-svgrepo-com.png',
    description: (
      <>
        風險模型<br/>
        風險智能應用<br/>
        決策平台
      </>
    ),
  },
  {
    title: '理財客群與經營科',
    link: '/img/money-recive-svgrepo-com.png',
    description: (
      <>
        理財客戶經營模式規劃<br/>
        空中服務人員管理
      </>
    ),
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
