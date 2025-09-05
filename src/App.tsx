import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Respect Vite base path so it works on GitHub Pages
        const mdUrl = `${import.meta.env.BASE_URL}1.md`;
        const res = await fetch(mdUrl);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const md = await res.text();

        const marked = (window as any).marked;
        const DOMPurify = (window as any).DOMPurify;

        const raw = marked ? marked.parse(md) : md;
        const safe = DOMPurify ? DOMPurify.sanitize(raw) : raw;
        setHtml(safe);
      } catch (e) {
        setError("글을 불러오지 못했어요.");
      }
    })();
  }, []);

  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!html) return <p>로딩중…</p>;
  return (
    <>
      <Header />
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export default App;
