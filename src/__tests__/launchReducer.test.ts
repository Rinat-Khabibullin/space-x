import { initial, reducer } from '../reducers/launchReducer'

const mockLaunch = {
  mission_name: 'Falcon Test',
  details: 'Details Test',
  rocket: {
    rocket_name: 'Falcon'
  },
  links: {
    
    mission_patch: "Big.png",
    mission_patch_small: "Small.png",
  }
}

test("Set 'FETCH_LOADING', loading = true", () => {
  const state = reducer(initial, { type: "FETCH_LOADING"});
  expect(state.loading).toBe(true);
})

test('State "FECH__SUCCESS", get launches, loading = false', () => {
  const state = reducer(initial, {type: 'FETCH_SUCCESS', payload: [mockLaunch]})

  expect(state.launches.length).toBe(1)
  expect(state.loading).toBe(false)
})

test('Set "OPEN_MODAL" in selected launch', () => {
  const state = reducer(initial, {type: "OPEN_MODAL", payload: mockLaunch})
  expect(state.selectedLaunch).toEqual(mockLaunch);
  expect(state.isModalOpen).toBe(true)
})

test('Set "CLOSE_MODAL", clear modal in state', () => {
  const state = reducer({...initial, selectedLaunch: mockLaunch, isModalOpen: true}, {type: "CLOSE_MODAL"})
  expect(state.isModalOpen).toBe(false)
  expect(state.selectedLaunch).toBe(null)
})