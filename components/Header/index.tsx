import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import main from "@styles/main.module.scss";
import header from "./header.module.scss";
import Logo from "@assets/Logo";

function Header() {
  return (
    <>
      <header className={header.container}>
        <div className={main.container}>
          <div className={header.container__content}>
            <div className={header.section__one}>
              <Link href="/">
                <div className={header.logo}>
                  <Logo width="36" height="36" />
                  <span className={header.logo__title}>
                    Mi<span>Sorteo</span>
                  </span>
                </div>
              </Link>
              <div className={header.options}>
                <Link href="/">Precios</Link>
                <Link href="/">Ayuda</Link>
              </div>
            </div>
            <div className={header.auth}>
              <Link href="/">Inicio Sesión</Link>
              <Link href="/">Registrarme</Link>
            </div>

            <div className="lol">
              <input type="checkbox" id="menu-bar" />
              <label htmlFor="menu-bar">
                <MenuOutlined />
              </label>
              <nav className="navbar">
                <ul>
                  <li>
                    <a href="#">Homa</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
