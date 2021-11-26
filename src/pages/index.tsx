import type { NextPage } from 'next';
import Link from 'next/link';
import { createElement } from 'react';
import Arrow from '@/assets/arrows/simple.svg';
import * as Frameworks from '@/assets/index/frameworks';
import * as WhatIsIt from '@/assets/index/what-is-it';
import Scribble from '@/components/Scribble';
import stl from '@/styles/pages/index.module.scss';
import cls from '@/utils/multi-classes';

const Index: NextPage = () => (
  <main id={stl.homepage}>
    <section id={stl.hero}>
      <div className="layout">
        <div className={stl.content}>
          <h1 className={stl.title}>Host your<br /><span className={stl.highlight}>static</span> content</h1>
          <p className={stl.subtitle}><b>Fyllee</b> lets you host and
            manage static content for your websites or application.</p>
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
      </div>
    </section>
    <section id={stl.whats} className={stl.cutted}>
      <div className="layout flex--center">
        <div className={cls('flex--center', 'flex--justify--center', 'flex--column', stl.side)}>
          <img src="/images/index/what-is-it.png" alt="" />
        </div>
        <div className={stl.side}>
          <div className={stl.content}>
            <h1 className={stl.title}>What is Fyllee?</h1>
            <p className={stl.text}><b>Fyllee</b> is a service that lets you host your static content for your
              websites or mobile applications. Many file types are supported —although images receive a first-class
              support: letting you edit or resize them on the fly through a simple query!</p>
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
      </div>
    </section>
    <section id={stl.how}>
      <div className="layout flex--center">
        <div className={stl.side}>
          <div className={stl.content}>
            <h1 className={stl.title}>How does it work?</h1>
            <p className={stl.text}>You can simplfy upload your content from your account dashboard, or use
              the REST API to dynamically upload your static content.<br />By using parameters in your
              query, you can resize your image, reduce it, apply filters and more!</p>
            <Link href="/auth/sign-up">
              <a className="button--blue">Start Now, Sign Up</a>
            </Link>
          </div>
        </div>
        <div className={cls('flex--center', 'flex--justify--center', 'flex--column', stl.side)}>
          <img src="/images/index/dashboard.png" alt="" />
        </div>
      </div>
    </section>
    <section id={stl.why} className={stl.cutted}>
      <div className="layout">
        <h1 className={stl.title}>Why Fyllee?</h1>
        <div className={stl.grid}>
          <div>
            <h2 className={stl.subtitle}>Easy To Use</h2>
            <p className={stl.text}>We designed Fyllee as a simple and quick-to-use solution. All you have to
              do is upload your image to our service, and modify it as you wish using query parameters.
              You can use either our REST API or our web app, if you wish to make it easier.</p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Scalable</h2>
            <p className={stl.text}>Transform your images as you need and as you want. There are a lot of filters
              and modifications available. We constantly upgrade Fyllee's functionalities, to propose our clients
              the best service they need.</p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Fast</h2>
            <p className={stl.text}>Our API and image-processing process is fast, thanks to the cutting-edge technology
              we use. Having a fast and reliable service is extremely important for our customer's businesses. This will
              ensure you are always ahead of your competitors!
            </p>
          </div>
          <div>
            <h2 className={stl.subtitle}>Secure</h2>
            <p className={stl.text}>All of your data are completely safe and secure. Your account and your applications
              are protected with a token, and you can choose to encrypt the uploaded static content.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
