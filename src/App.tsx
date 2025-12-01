import { useEffect, useReducer } from "react";
import { reducer, initial } from "./reducers/launchReducer";
import { LaunchCard } from "./components/LaunchCard/LaunchCard";
import { SimpleGrid, Text, Loader } from "@mantine/core";
import { LaunchModal } from "./components/LaunchModal/LaunchModal";
function App() {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    dispatch({ type: "FETCH_LOADING" });
    fetch("https://api.spacexdata.com/v3/launches?launch_year=2020")
      .then((res) => res.json())
      .then((launch) => dispatch({ type: "FETCH_SUCCESS", payload: launch }))
      .catch(() => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <>
      <Text fw={700} mt={30} ta='center' size="40px">SpaceX Launches 2020</Text>
      { state.loading?  <Loader size="xl" mt="xl" ml="45%"/> : null}
      <SimpleGrid cols={3} spacing="lg" px="md" py="xl">
        {state.launches.map((launch) => {
          return (
            <LaunchCard
              key={launch.mission_name + launch.rocket.rocket_name}
              launch={launch}
              onOpen={(l) => dispatch({ type: "OPEN_MODAL", payload: l })}
            />
          );
        })}
      </SimpleGrid>
      {state.isModalOpen && state.selectedLaunch && (
        <LaunchModal 
        launch={state.selectedLaunch}
        onClose={() => dispatch({type: 'CLOSE_MODAL'})}
        />
      )}
  
    </>
  );
}

export default App;
