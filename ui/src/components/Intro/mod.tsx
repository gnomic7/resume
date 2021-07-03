import { h } from 'https://x.lcas.dev/preact@10.5.12/mod.js';

const Intro = ({ fullName }) => (
  <div>
    <h2>Who am I</h2>
    <div>Name:</div> <div>{fullName}</div>
  </div>
);

export default Intro;
