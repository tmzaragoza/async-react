import React from 'react';
import renderer from 'react-test-renderer';
import Character from './Character';

describe('App', () => {
  it('matches a snapshot', () => {
    const character = {
      name: 'teonna',
      status: 'alive',
      species: 'human',
      gender: 'female'
    };
    
    const tree = renderer.create(
      <Character character={character} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
