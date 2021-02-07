import * as WhatIsIt from '../assets/index/what-is-it';
import cls from '../utils/multi-classes';
import stl from '../styles/pages/index.module.scss';
import * as Frameworks from '../assets/frameworks';
import Arrow from '../assets/arrow.svg';
import Link from 'next/link';

interface IFrameworks {
  [key: string]: FC;
}

export default function Index(): ReactElement {
  return (
    <main id={stl.homepage}>
      <div id={stl.hero} className={'layout'}>
        <div className={stl.content}>
          <h1 className={stl.title}>Host your<br /><span className={stl.highlight}>static</span> contents</h1>
          <p className={stl.subtitle}><b>Bild</b> allows you to host your web or application static contents.</p>
        </div>
        <ul className={cls('flex--justify--center flex--center', stl.frameworks)}>
          {Object.keys(Frameworks).map(e => (
            <li key={e}>
              {createElement((Frameworks as IFrameworks)[e])}
            </li>
          ))}
        </ul>
        <div className={stl['sign-buttons']}>
          <Link href="/auth/sign-up">
            <a className="button--dark">Sign Up For Free<Arrow /></a>
          </Link>
          <Link href="/auth/sign-in">
            <a className={stl['sign-in']}>Sign In<Arrow /></a>
          </Link>
        </div>
      <section id={stl.whats} className={cls('layout', 'flex--center')}>
        <div className={cls('flex--center', 'flex--justify--center', 'flex--column', stl.side)}>
          <img src="/images/index/what-is-it.png" alt="" />
        </div>
        <div className={stl.side}>
          <div className={stl.content}>
            <h1 className={stl.title}>What is Bild?</h1>
            <p className={stl.text}><b>Bild</b> is a service that allows you to host all of your static content for your websites, web and mobile applications etc. Moreover, you can edit your images size to optimize the performance of your services.</p>
            <ul className={cls('flex--center', stl.icons)}>
              {Object.keys(WhatIsIt).map(e => (
                <li key={e}>
                  {createElement((WhatIsIt as SVG)[e])}
                </li>
              ))}
            </ul>
            <Scribble content="resize, crop and more!" direction="top-right" arrow={false} />
          </div>
        </div>
      </section>
      <section id={stl.how} className={cls('layout', 'flex--center')}>
        <div className={stl.side}>
          <div className={stl.content}>
            <h1 className={stl.title}>How it works?</h1>
            <p className={stl.text}>Simply upload your content from your account dashboard, or use the REST API to dynamically upload your static content.<br />By using parameters in your query, you can resize your image, reduce it, apply filters and more!</p>
            <Link href="/auth/sign-up">
              <a className="button--dark">Start Now, Sign Up</a>
            </Link>
          </div>
        </div>
        <div className={cls('flex--center', 'flex--justify--center', 'flex--column', stl.side)}>
          <img src="/images/index/dashboard.png" alt="" />
        </div>
      </section>
      </section>
    </main>
  )
}
