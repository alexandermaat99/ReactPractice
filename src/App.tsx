import React from 'react';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

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

  {
    name: 'The Velvet Underground',
    members: 'Lou Reed, John Cale, Sterling Morrison, Maureen Tucker',
    formed: 1964,
  },

  {
    name: 'The Who',
    members: 'Roger Daltrey, Pete Townshend, John Entwistle, Keith Moon',
    formed: 1964,
  },

  {
    name: 'The Ramones',
    members: 'Joey Ramone, Johnny Ramone, Dee Dee Ramone, Tommy Ramone',
    formed: 1974,
  },

  {
    name: 'The Clash',
    members: 'Joe Strummer, Mick Jones, Paul Simonon, Topper Headon',
    formed: 1976,
  },
];

function Welcome() {
  return <h1>Welcome to the Band List</h1>;
}

class Band extends React.Component<BandProps> {
  render() {
    const oneBand = this.props;

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
      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
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
