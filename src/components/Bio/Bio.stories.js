import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/499248957059375104/5YV6IT8A_400x400.jpeg"
    name="Finabluma"
    tagline="Living on planet earth"
    role="Frontend developer"
  />
);

export const Default = Template.bind();
