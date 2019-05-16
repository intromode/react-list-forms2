import React, { useState } from 'react';
import Sidebar from './Sidebar';

//normally we use classes if we want to hold state. but we can use functions + react hooks to hold state too. 
// React will preserve this state between re-renders

//app will hold state so that we can pass it if we decide to make other components 
export default function App() {
  const [selectedTab, updateTab] = useState('home');

  const tabs = {
    home: 'dont gotta go home butcha CANT STAY HERE',
    about: 'mean old lady',
    blog: 'today at the neighborhood watch meeting, Susan and I argued!!',
    contact: 'No.'
  };

  return (
    <>
    <Sidebar>
      <a onClick={() => updateTab('home')}>Home</a>
      <a onClick={() => updateTab('about')}>About</a>
      <a onClick={() => updateTab('blog')}>Blog</a>
      <a onClick={() => updateTab('contact')}>Contact</a>
    </Sidebar>
    <p>{tabs[selectedTab]}</p>
    </>
  );
}
