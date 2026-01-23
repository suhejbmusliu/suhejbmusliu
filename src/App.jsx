import { useEffect, useState } from "react";
import AppShell from "./components/layout/AppShell";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Preloader />;
  return <AppShell />;
}
