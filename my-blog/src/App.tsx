import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/1.md");
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
    <article
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default App;
