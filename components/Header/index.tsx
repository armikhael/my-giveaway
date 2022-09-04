import styles from "./styles.module.scss";

import Logo from "@assets/Logo";

function Header() {
  return (
    <>
      <Logo width="100" height="100" />
      <h1 className={styles.title}>Header</h1>
    </>
  );
}
export default Header;
