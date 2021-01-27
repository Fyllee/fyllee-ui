import { ReactElement } from 'react';
import { Editor } from '../components/Highlight';
import stl from '../styles/pages/index.module.scss';

export default function Index(): ReactElement {
  return (
    <main id={stl.homepage} className={'layout'}>
      <div id={stl.hero}>
        <div>
          <h1 className={stl.title}>Dynamically host<br />your SPA images</h1>
          <p>Host your image to display them on your Single Page Application.</p>
        </div>
        <div>
          {/* <Editor /> */}
        </div>
      </div>
    </main>
  )
}
