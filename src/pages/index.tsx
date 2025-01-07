import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="hero shadow--lw cs-height">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h1 className="hero__title cs-title">{siteConfig.title}</h1>
            <div className="hero__subtitle cs-title cs-font-size dynamic-text">{siteConfig.tagline}</div>
            <div>
              <Link
                className="button button--secondary button--outline button--lg"
                to ="/docs/intro">
                GET STARTED
              </Link>
            </div>
          </div>
          <div className="col col--4"></div>
          <div className="col col--4">          
            <img className="cs-image" src={useBaseUrl('/img/performance-increase-svgrepo-com.png')} />            
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
