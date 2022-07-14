import ReactPlayer from 'react-player';
import styles from "../../../styles/home/homeComponents/player.module.scss"

const Player = () => (
    <div className={styles.wrapper}>
        <ReactPlayer
            url="./logo/video.mp4"
            className={styles.player}
            width="100%"
            controls={true}
        />
    </div>
);

export default Player
