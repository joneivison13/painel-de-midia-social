import React, { useState, useEffect } from "react";
import "./home.css";
import api from "../services/api";
import {
  FaFacebookSquare,
  FaCaretUp,
  FaCaretDown,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState(api);
  useEffect(() => {
    setData(api);
  }, []);

  return (
    <>
      <header>
        <p className="headeTitle">Painel de Mídia Social</p>
        <p style={{color:'#aaa', fontSize:15, fontWeight:'bold'}}>Total de Seguidores: {data.map(dado => dado.followers.total)}</p>
      </header>

      <div className="container1">
        <div className="followers">
          
          {/* Início do facebok */}
          <div className="card facebook">
            <div className="name">
              <FaFacebookSquare size={30} color="#0055ff" />
              <small>Joneivison Oliveira</small>
            </div>

            {data.map((dado) => (
              <p className="folloewrs-number">{dado.followers.facebook}</p>
            ))}

            <p className="follow"> F O L L O W E R S</p>

            <div className="name">
              <FaCaretUp size={20} color="#008000" />
              <p style={{ color: "#008000", fontSize: 15 }}>12 Today</p>
            </div>
          </div>
          {/* Fim do facebok */}
          {/* Inicio do twiter */}
          <div className="card twiter">
            <div className="name">
              <FaTwitter size={30} color="#0055ff" />
              <small>Joneivison Oliveira</small>
            </div>

            {data.map((dado) => (
              <p className="folloewrs-number">{dado.followers.twiter}</p>
            ))}

            <p className="follow"> F O L L O W E R S</p>

            <div className="name">
              <FaCaretUp size={20} color="#008000" />
              <p style={{ color: "#008000", fontSize: 15 }}>99 Today</p>
            </div>
          </div>
          {/* Fim do twiter */}

          {/* Inicio do Instagran */}
          <div className="card instagran">
            <div className="name">
              <FaInstagram size={30} color="#DA2334" />
              <small>Joneivison Oliveira</small>
            </div>

            {data.map((dado) => (
              <p className="folloewrs-number">{dado.followers.instagran}</p>
            ))}

            <p className="follow"> F O L L O W E R S</p>

            <div className="name">
              <FaCaretUp size={20} color="#008000" />
              <p style={{ color: "#008000", fontSize: 15 }}>1099 Today</p>
            </div>
          </div>
          {/* Fim do instagran */}

          {/* Inicio do youtube */}
          <div className="card youtube">
            <div className="name">
              <FaYoutube size={30} color="#DA2334" />
              <small>Joneivison Oliveira</small>
            </div>

            {data.map((dado) => (
              <p className="folloewrs-number">{dado.followers.youtube}</p>
            ))}

            <p className="follow"> F O L L O W E R S</p>

            <div className="name">
              <FaCaretDown size={20} color="#f00" />
              <p style={{ color: "#f00", fontSize: 15 }}>144 Today</p>
            </div>
          </div>
          {/* Inicio do youtube */}
        </div>
      </div>
    </>
  );
}
