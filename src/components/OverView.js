import React, { useState, useEffect } from "react";
import "./OverView.css";
import api from "../services/api";
import {
  FaFacebookSquare,
  FaCaretUp,
  FaCaretDown,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function OverViewe() {
  const [data, setData] = useState(api);

  useEffect(() => {
    setData(api);
  }, []);
  return (
    <>
      <p className="headeTitle2">Visão Geral do Dia</p>
      <div className="container">
        <div className="corpo">
          <div className=" view-card">
            <div className="title-overview">
              <p>Page Views</p>
              <FaFacebookSquare size={30} color="#0055ff" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.views.facebook}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretUp color="#008000" />
                <p style={{ color: "#008000" }}>3%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Likes</p>
              <FaFacebookSquare size={30} color="#0055ff" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.likes.facebook}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretDown color="#f00" />
                <p style={{ color: "#f00" }}>2%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Profile Views</p>
              <FaInstagram size={30} color="#DA2334" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.views.instagran}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretUp color="#008000" />
                <p style={{ color: "#008000" }}>1375%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Likes</p>
              <FaInstagram size={30} color="#DA2334" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.likes.instagran}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretUp color="#008000" />
                <p style={{ color: "#008000" }}>2257%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Retweets</p>
              <FaTwitter size={30} color="#0055ff" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.retweets}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretUp color="#008000" />
                <p style={{ color: "#008000" }}>303%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Likes</p>
              <FaTwitter size={30} color="#0055ff" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.likes.twiter}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretUp color="#008000" />
                <p style={{ color: "#008000" }}>553%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Likes</p>
              <FaYoutube size={30} color="#DA2334" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.likes.youtube}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretDown color="#f00" />
                <p style={{ color: "#f00" }}>19%</p>
              </div>
            </div>
          </div>
          <div className=" view-card">
            <div className="title-overview">
              <p>Total Views</p>
              <FaYoutube size={30} color="#DA2334" />
            </div>
            <div className="title-overview">
              {data.map((dado) => (
                <p className="numberDado">{dado.today.views.youtube}</p>
              ))}
              <div style={{ display: "flex", marginTop: 12 }}>
                <FaCaretDown color="#f00" />
                <p style={{ color: "#f00" }}>12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
