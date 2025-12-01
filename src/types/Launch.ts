export type Launch = {
  mission_name: string;
  details: string | null;
  rocket: {
    rocket_name: string;
  }
  links: {
    mission_patch: string | null;
    mission_patch_small: string | null;
  }
}
export type State = {
  launches: Launch[],
  selectedLaunch: Launch | null,
  isModalOpen: boolean,
  loading: boolean,
}
export type Action =
  | { type: "FETCH_SUCCESS"; payload: Launch[] }
  | { type: "FETCH_LOADING" }
  | { type: "FETCH_ERROR" }
  | { type: "OPEN_MODAL"; payload: Launch }
  | { type: "CLOSE_MODAL" }

export type LaunchModalProps = {
  launch: Launch;
  onClose: () => void;
}

