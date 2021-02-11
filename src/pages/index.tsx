import { createElement, ReactElement } from 'react';
import Scribble from '../components/Scribble';
import Link from 'next/link';

// Assets
import * as WhatIsIt from '../assets/index/what-is-it';
import * as Frameworks from '../assets/index/frameworks';
import Arrow from '../assets/arrows/simple.svg';

// Utils and style
import cls from '../utils/multi-classes';
import stl from '../styles/pages/index.module.scss';

export default function Index(): ReactElement {
  return (
    <main id={stl.homepage}>
      <section id={stl.hero} className="layout">
        <div className={stl.content}>
          <h1 className={stl.title}>Host your<br /><span className={stl.highlight}>static</span> content</h1>
          <p className={stl.subtitle}><b>Bild</b> allows you to host and manage static content for your websites or application.</p>
        </div>
        <ul className={cls('flex--justify--center', 'flex--center', stl.frameworks)}>
          {Object.keys(Frameworks).map(e => (
            <li key={e}>
              {createElement((Frameworks as SVG)[e])}
            </li>
          ))}
        </ul>
        <div className={stl['sign-buttons']}>
          <Link href="/auth/sign-up">
            <a className="button--blue">Sign Up For Free<Arrow /></a>
          </Link>
          <Link href="/auth/sign-in">
            <a className={stl['sign-in']}>Sign In<Arrow /></a>
          </Link>
        </div>
      </section>
      <section id={stl.whats} className={cls('layout', 'flex--center', stl.cutted)}>
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
              <a className="button--blue">Start Now, Sign Up</a>
            </Link>
          </div>
        </div>
        <div className={cls('flex--center', 'flex--justify--center', 'flex--column', stl.side)}>
          <img src="/images/index/dashboard.png" alt="" />
        </div>
      </section>
      <section id={stl.why} className={cls('layout', stl.cutted)}>
        <h1 className={stl.title}>Why Bild?</h1>
        <div className={stl.grid}>
          <div>
            <h2 className={stl.subtitle}>Simplicity</h2>
            <p className={stl.text}>We designed Bild as a simple and quick to use solution. All you have to do is upload your image to our servers to access it, and modify it as you wish using parameters.</p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Scalability</h2>
            <p className={stl.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus esse sint modi totam ipsam dolorem repellat autem ipsa hic similique impedit illum porro explicabo magnam aliquid enim dolores, consequuntur natus.</p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Rapidity</h2>
            <p className={stl.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus esse sint modi totam ipsam dolorem repellat autem ipsa hic similique impedit illum porro explicabo magnam aliquid enim dolores, consequuntur natus.</p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Lorem</h2>
            <p className={stl.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus esse sint modi totam ipsam dolorem repellat autem ipsa hic similique impedit illum porro explicabo magnam aliquid enim dolores, consequuntur natus.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
