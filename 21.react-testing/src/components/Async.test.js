import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [
          { id: 'p1', title: 'First post' },
          { id: 'p2', title: 'Second post' },
        ];
      },
    });

    render(<Async />);
    const listItemElements = await screen.findAllByRole(
      'listitem',
      {},
      { timeout: 2000 }
    );
    expect(listItemElements).toHaveLength(2);
    // expect(listItemElements).not.toHaveLength(0);
  });
});
// describe('Async component', () => {
//   test('renders posts if request succeeds', async () => {
//     render(<Async />);
//     const listItemElements = await screen.findAllByRole(
//       'listitem',
//       {},
//       { timeout: 2000 }
//     );
//     expect(listItemElements).not.toHaveLength(0);
//   });
// });
