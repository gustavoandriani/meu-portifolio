import styles from "./styles.module.css"

export default function Navbar({ title }) {
    return (
        <nav className={styles.navbarBar}>
            <div className={styles.navbarContainer}>
                <a className={styles.navbarTitle} href="https://devgustavoandriani.netlify.app">
                    <h2>
                        <span>dev&#123;</span> 
                        {title} 
                        <span>&#125;</span>
                    </h2>
                </a>
                <ul className={styles.navbarMenu}>
                    <li>
                        <span>&#123;</span>
                        Home
                        <span>&#125;</span>
                    </li>
                    <li>
                        <span>&#123;</span>
                        Sobre
                        <span>&#125;</span>
                    </li>
                    <li>
                        <span>&#123;</span>
                        Projetos
                        <span>&#125;</span>
                    </li>
                    <li>
                        <span>&#123;</span>
                        Contato
                        <span>&#125;</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}