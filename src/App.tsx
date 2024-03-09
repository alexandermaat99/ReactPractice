import React from 'react';
import './App.css';

const bandNames = [
  { name: 'The Beastie Boys', members: 'Mike D, MCA, Ad-Rock', formed: 1970 },

  {
    name: 'The Beatles',
    members: 'John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    formed: 1960,
  },

  {
    name: 'The Rolling Stones',
    members: 'Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood',
    formed: 1962,
  },
];

function Welcome() {
  return <h1>Welcome to the Band List</h1>;
}

class Band extends React.Component {
  render() {
    const oneBand = bandNames[0];

    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h2>{oneBand.members}</h2>
        <h2>{oneBand.formed}</h2>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      <Band />
      <Band />
      <Band />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
