//# Components //
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer';
//# Libs //
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
//# Classes //
import './App.scss'

//* Local Functions //
function GetParams(location: ReturnType<typeof useLocation>) {
  return location.pathname.replace(/^\/+/, '').split('/')
}
function Lang() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const ln = GetParams(location)[0]
  if (ln && i18n.language !== ln) {
    i18n.changeLanguage(ln)
    document.documentElement.lang = ln
  }

  return null
}
function GetDefaultLn() {
  const DefaultLn = navigator.language.toLowerCase()

  if (DefaultLn.startsWith("pt")) {
    return "pt"
  } else if (DefaultLn.startsWith("en")) {
    return "en"
  } else {
    return "en"
  }
}

function App() {

  return (
    <>
      <Lang />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={`/${GetDefaultLn()}`} replace />} />
          <Route path=":ln" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
