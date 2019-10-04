import './App.css';

import React, { Component } from 'react';

import CharacterList, { Character } from './CharacterList';

class App extends Component {
  render() {
    const characters: Character[] = [
      {
        id: 1,
        name: "羽咲 綾乃",
        age: 16,
        height: 151
      },
      {
        id: 2,
        name: "洗垣 なぎさ",
        age: 18,
        height: 174
      },
      {
        id: 3,
        name: "泉 理子",
        age: 18
      }
    ];

    return (
      <div className="container">
        <header>
          <h1>はねバド！ キャラクター一覧</h1>
        </header>
        <CharacterList school="北小町高校" characters={characters} />
      </div>
    );
  }
}

export default App;
