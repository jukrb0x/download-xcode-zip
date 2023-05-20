import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.grid}>
        <a
          href="https://developer.apple.com/xcode/resources/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Xcode Resources <span>-&gt;</span>
          </h2>
          <p>The official Xcode resources website from Apple.</p>
        </a>

        <a
          href="https://developer.apple.com/download/all/?q=Xcode"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Developer <span>-&gt;</span>
          </h2>
          <p>Download the <span className={styles.code}>.dmg</span> and more developer resources. You need to login your Apple ID.</p>
        </a>

        <a
          href="https://wh0.is"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            My Blog <span>-&gt;</span>
          </h2>
          <p>Visit my blog just for fun.</p>
        </a>

      </div>


      <div className={styles.description}>
        <p>
          This website is not affiliated with or endorsed by Apple Inc. in any way.<br />
          We do not provide any Xcode downloads or file storage.
        </p>
      </div>

    </main>
  )
}
