import { useState } from "react";
import s from "./Main.module.scss";
import genio from "../assets/Genio.png";
import lampada from "../assets/Lâmpada.png";

const Main = () => {
    const [magica, setMagica] = useState(false);

    const magicaClick = () => {
        setMagica(!magica);
    };

    return (
        <section className={s.container}>
            <div className={s.text}>
                <p >"Liberte a magia da programação com a lâmpada de Aladim."</p>
            </div>
            <section className={s.imageContainer}>
                <button className={s.luzBtn} onClick={magicaClick}>
                    <img
                        src={magica ? genio : lampada}
                        alt={magica ? "Gênio saindo da lâmpada" : "Lâmpada mágica"}
                        className={magica ? s.genio : ""}
                    />
                </button>

            </section>

        </section>

    );
};

export default Main;
