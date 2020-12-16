import React from 'react';

import GlobalStyle from './styles/global';

import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PostList />
    </div>
  );
}

export default App;
