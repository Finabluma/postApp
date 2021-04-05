import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
  <Post
    content="eira seats next to me!"
    date="01/04/2021"
  />
);

export const Default = Template.bind();
