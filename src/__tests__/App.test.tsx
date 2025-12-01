import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import { renderWithProvider } from '../__tests__/test-utils'
const mockLaunch = [
  {
    mission_name: "Falcon Test",
    details: "Details Test",
    rocket: {
      rocket_name: "Falcon",
    },
    links: {
      mission_patch: "Big.png",
      mission_patch_small: "Small.png",
    },
  },
];
beforeEach(() => {
  global.fetch = vi.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockLaunch),
    })
  ) as any;
})

test("render launch card after fetch", async () => {
  renderWithProvider(<App />)
  await waitFor(() => {
    expect(screen.getByText('Falcon Test')).toBeInTheDocument()
  })
});

test('Open madal after see more click', async () => {
  renderWithProvider(<App />)

  await waitFor(() => {
    expect(screen.getByText('Falcon Test')).toBeInTheDocument()
  })

  const button = screen.getByText('See more');
  button.click();

  expect(await screen.findByText("Details:")).toBeInTheDocument()
})

test('Close modal on X click', async () => {
  renderWithProvider(<App />)

  await waitFor(() => screen.getByText('See more'))
  screen.getByText('See more').click()
  
  const closeBtn = await screen.findByText('X')
  closeBtn.click()

  await waitFor(() => {
    expect(screen.queryByText('Details:')).toBe(null)
  })
  
})

test('Close modal on backdrop', async () => {
  renderWithProvider(<App />)

  await screen.findByText("Falcon Test");
  screen.getByText("See more").click();

  await screen.findByText("Details:");

  screen.getByTestId("backdrop").click();
  await waitFor(() => {
    expect(screen.queryByText("Details:")).toBeNull();
  })
  
})