import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App', () => {
  describe('App Matches Snapshot', () => {
    test('snapshot matches', () => {
      const renderer = new ShallowRenderer();
      const result = renderer.render(<App />);
      expect(result).toMatchSnapshot();
    });
  });
});
