import { createElement, FC, ReactElement } from 'react';
// import { Editor } from '../components/Highlight';
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
      </div>
      <div id={stl.demo} className={'layout'}>
        {/* <img src="/index/hero.png" alt="Hero Image" /> */}
        <h1>Hello world...</h1>
      </div>
    </main>
  )
}
