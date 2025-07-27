import { useState, useEffect } from "preact/hooks";
import { WiiMainMenu } from "../renderingEngine/menu/menu";

export function Menu() {
  function getInitialMode() {
    return window.__WiiCTX__?.mode || "standard";
  }

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    function onResize() {
		console.log("resized!! dont ignore me");
      setMode(window.__WiiCTX__?.mode || "standard");
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <WiiMainMenu mode={mode} />;
}
