import React from 'react';
import './App.css';
// import GitHubUser from './GithubUser';
import { bigList } from './Faker';
// import List from './List';
import { FixedSizeList } from 'react-window';


// function App() {
//   const renderItem = item => (
//     <div style={{ display: 'flex' }}>
//       <img src={item.avatar} alt={item.name} width={50} />
//       <p>{item.name} - {item.email}</p>
//     </div>
//     )
//   return (
//     <List data={bigList} renderItem={renderItem} />
//   );
// }


function App() {
  const renderRow = ({ index, style}) => (
    <div style={{  ...style , ...{display: 'flex'} }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>{bigList[index].name} - {bigList[index].email}</p>
    </div>
    )
  return (
    <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth - 20}
    itemCount={bigList.length}
    itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default App;
