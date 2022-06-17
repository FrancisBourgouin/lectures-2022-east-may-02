import { fetchAWow } from "../helpers/owenHelpers";
import { useState, useEffect } from "react";

export default function useOwenWilson() {
  const [currentWow, setCurrentWow] = useState(undefined);

  useEffect(() => {
    fetchAWow().then((data) => {
      setCurrentWow(data.audio);
    });
  }, []);

  const refresh = () => {
    fetchAWow().then((data) => {
      setCurrentWow(data.audio);
    });
  };

  const play = () => {
    const sound = new Audio(currentWow);
    sound.play();
  };

  return { play, refresh };
}
