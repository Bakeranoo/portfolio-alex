import Game1 from '../../games/Game1';
import './Background.css';

type BackgroundProps = {
    contentSrc: string;
    contentType: 'image' | 'video' | 'game';
}

const Background = ({
    contentSrc,
    contentType,
}: BackgroundProps) => {

    const drawBackground = () => {
        switch (contentType) {
            case 'image':
                return <img src={contentSrc} alt="Background" className="background-image" />;
            case 'video':
                return <video src={contentSrc} className="background-video" autoPlay loop muted />;
            case 'game':
                return <Game1 />;
            default:
                return null;
        }
    }

    return (
        <div className="background-container">
            {drawBackground()}
        </div>
    );
};

export default Background;