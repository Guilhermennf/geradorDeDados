import "./styles.scss";
import { api } from "../../Services/Api/Api";
import { useCallback, useState } from "react";

interface IValues {
    id: number;
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    };
    email: string;
    location: {
        street: {
            name: string;
            number: string | number;
        };
    };
}

export default function Dates() {
    const [dados, setDados] = useState<Array<IValues>>([
        {
            id: 0,
            name: {
                first: "???",
                last: "",
            },
            picture: {
                large: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ArKQ5AIUqacA-5ofQ5nfPevwR0RtI7PBtg&usqp=CAU",
            },
            email: "???",
            location: {
                street: {
                    name: "???",
                    number: "",
                },
            },
        },
    ]);

    const gerarDados = useCallback(async () => {
        const { data } = await api.get("/api");

        setDados(data.results);
    }, []);

    function handleSubmit() {
        return gerarDados;
    }

    return (
        <div className="main">
            <div className="main" key={dados[0].id}>
                <img
                    className="mainImg"
                    alt="Foto aleatória"
                    src={dados[0].picture.large}
                />
                <h6 className="mainName">
                    Nome: {dados[0].name.first} {dados[0].name.last}
                </h6>
                <span className="mainEmail">E-mail: {dados[0].email}</span>
                <span className="mainAddress">
                    Endereço: {dados[0].location.street.name}
                    {dados[0].location.street.number > 0 && ","}{" "}
                    {dados[0].location.street.number}
                </span>
            </div>

            <button
                type="button"
                className="btnContainer"
                onClick={handleSubmit()}
            >
                Gerar Dados
            </button>
        </div>
    );
}
