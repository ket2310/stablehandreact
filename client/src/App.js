import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

function App() {
  const [currentPg, setPage] = useState('HomePage');
  const [farmName, setFarm ] = useState('Fox Hill Farms');
  const [task , setTask ] = useState('Welcome to your stable hand!')
  return (
    <div>
      <MainContainer
        currentPg={currentPg} setPage={setPage} farmName={farmName} setFarm={setFarm} task={task} setTask={setTask}>
      </MainContainer>
    </div>
  );
}

export default App;
