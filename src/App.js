import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

function App() {
  const [currentPg, setPage] = useState('HomePage')
  return (
    <div>
      <MainContainer
        currentPg={currentPg} setPage={setPage}>
      </MainContainer>
    </div>
  );
}

export default App;
