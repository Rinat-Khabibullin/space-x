import { Portal } from "../Portal/Portal";
import  style from "../../styles/styles.module.css";
import type { LaunchModalProps } from "../../types/Launch";
 
export function LaunchModal({ onClose, launch }: LaunchModalProps) {
  return (
    <Portal>
      <div className={style.backdropStyles} onClick={onClose} data-testid="backdrop">
        <div className={style.modalStyle} onClick={(e) => e.stopPropagation()}>
          <h2>{launch.mission_name}</h2>
          <button onClick={onClose}>X</button>
          <img src={launch.links.mission_patch || undefined} alt="Mission Patch" />
          <h2>Mission name:</h2>
          <p>{launch.mission_name}</p>
          <h2>Rocket name:</h2>
          <p>{launch.rocket.rocket_name}</p>
          <h2>Details:</h2>
          <p>{launch.details ?? "Нет деталей по запуску"}</p>
          
        </div>
      </div>
    </Portal>
  );
}
