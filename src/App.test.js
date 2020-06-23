import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, configure, mount } from 'enzyme';

describe('App', () => {

  describe('App Matches Snapshot', () => {
    test('snapshot matches', () => {
      const renderer = new ShallowRenderer()
      const result = renderer.render(<App />)
      expect(result).toMatchSnapshot()
    });
  });

});
