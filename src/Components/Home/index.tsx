import { useState } from "react";
import Dados from "../Dados";
import "./styles.scss";

export default function Home() {
    return (
        <div className="container">
            <div className="mainContainer">
                <h1 className="titleContainer">Gerador de Dados</h1>
                <span className="datesContainer">
                    <Dados />
                </span>
            </div>
        </div>
    );
}
