import {
  h,
  useEffect,
  useState,
} from 'https://x.lcas.dev/preact@10.5.12/mod.js';

import fetchData from '../../utils/mod';

const Experience = () => {
  const { experiences, setExperiences } = useState('');
  useEffect(() => {
    setExperiences(fetchData({}));
  }, []);
  <div>
    <h2>Work Experience</h2>
  </div>;
};

export default Experience;
