import Index from './index';

describe('App', () => {
  test('Renders without crashing', () => {
    expect(
      JSON.stringify(
        ({}, Index, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot();
  });
});
