import { useEffect, useState } from "react";
import {
    Application,
    extend,
} from '@pixi/react';
import {
    Container,
    Texture,
    Sprite,
} from 'pixi.js';

extend({
    Container,
    Sprite,
});

const Game1 = () => {

    const playerDownTextures = [
        Texture.from("/sprites/player/sprite_0.png"),
        Texture.from("/sprites/player/sprite_1.png"),
        Texture.from("/sprites/player/sprite_2.png"),
        Texture.from("/sprites/player/sprite_3.png"),
    ];
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
    const [playerCurrentTextureIndex, setPlayerCurrentTextureIndex] = useState<number>(0);
    const [playerTexture, setPlayerTexture] = useState<Texture | null>(null);
    const [canChangeTexture, setCanChangeTexture] = useState(true); // Controla el tiempo entre cambios

    useEffect(() => {
        // Cargar la textura desde la carpeta public
        const texture = Texture.from("/sprites/player/sprite_1.png");
        setPlayerTexture(texture);
    }, []);

    useEffect(() => {
        console.log("entro en el useEffect de playerTexture");
        setTimeout(() => {
            setCanChangeTexture(true); // Permitir el cambio de textura después de 500ms
        }, 100);
    },[playerCurrentTextureIndex]);

    useEffect(() => { console.log(playerPosition) }, [playerPosition]);

    useEffect(() => {
        // Controlador de movimiento del jugador
        const handleKeyDown = (event: KeyboardEvent) => {
            const step = 5; // Tamaño del paso
            setPlayerPosition((prev) => {
                switch (event.key) {
                    case "ArrowUp":
                        return prev.y < 300 ? { ...prev, y: prev.y + step } : prev;
                    case "ArrowDown":
                        return prev.y > -775 ? { ...prev, y: prev.y - step } : prev;
                    case "ArrowLeft":
                        return prev.x < 415 ? { ...prev, x: prev.x + step } : prev;
                    case "ArrowRight":
                        return prev.x > -1330 ? { ...prev, x: prev.x - step } : prev;
                    default:
                        return prev;
                }
            });

            if(canChangeTexture) {
                setPlayerCurrentTextureIndex((prevIndex) => prevIndex + 1);
                setPlayerTexture((prevTexture) => {
                    console.log("textureIndex1", playerCurrentTextureIndex);
                    switch (event.key) {
                        case "ArrowUp":
                            return Texture.from("/sprites/player/sprite_1.png");
                        case "ArrowDown":
                            return playerDownTextures[(playerCurrentTextureIndex + 1) % playerDownTextures.length];
                        case "ArrowLeft":
                            return Texture.from("/sprites/player/sprite_3.png");
                        case "ArrowRight":
                            return Texture.from("/sprites/player/sprite_0.png");
                        default:
                            return prevTexture;
                    }
                });
                setCanChangeTexture(false);
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [playerCurrentTextureIndex, playerDownTextures]);

    return (
        <Application
            width={1000}
            height={700}
            background={'#FFFFFF'}
        >
            <pixiSprite
                x={playerPosition.x}
                y={playerPosition.y}
                texture={Texture.from("/sprites/map/map.png")}
            />
            <pixiContainer>
                {playerTexture && (
                    <pixiSprite
                    anchor={0.5}
                    texture={playerTexture} 
                    x={500}
                    y={350}
                    />
                )}
            </pixiContainer>
        </Application>
    );
};

export default Game1;