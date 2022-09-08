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
            <Link href="/">
              <div className={header.logo}>
                <Logo width="36" height="36" />
                <span className={header.logo__title}>
                  Mi<span>Sorteo</span>
                </span>
              </div>
            </Link>
            <div className={header.navbar}>
              <input type="checkbox" id="menu-bar" />
              <label htmlFor="menu-bar">
                <MenuOutlined />
              </label>
              <nav className={header.navbar__content}>
                <ul>
                  <li>
                    <a href="#">Precios</a>
                  </li>
                  <li>
                    <a href="#">Ayuda</a>
                  </li>
                  <li className={header.navbar__login}>
                    <a href="#">Inicio Sesión</a>
                  </li>
                  <li className={header.navbar__register}>
                    <a href="#">Registrarme</a>
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
