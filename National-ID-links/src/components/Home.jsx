import React, { useEffect } from "react";
import Abyssinia from '../assets/logos/abyssinia.jpg'
import Awash from '../assets/logos/awash.jpg'
import Coop from '../assets/logos/coop.png'
import CBE from '../assets/logos/cbe.jpeg'
import Oromia from '../assets/logos/oromia.png'
import Wegagen from '../assets/logos/wegagen.jpg'
import Nib from '../assets/logos/nib.jpg'   
import Tsehay from '../assets/logos/tsehay.png'
import Siinqee from '../assets/logos/siinqee.png'
import Zamzam from '../assets/logos/zamzam.png'
import Amhara from '../assets/logos/amhara.png'

const banks = [
  { name: "Bank of Abyssinia", logo: Abyssinia, url: "https://cs.bankofabyssinia.com/fayda_connect" },
  { name: "Awash Bank", logo: Awash, url: "https://fayda.awashbank.com" },
  { name: "Coop Bank of Oromia", logo: Coop, url: "https://my.coopbankoromiasc.com/harmonization" },
  { name: "Commercial Bank of Ethiopia", logo: CBE, url: "https://cbefayda.cbe.com.et" },
  { name: "Oromia Bank", logo: Oromia, url: "https://bfayda.oromiabank.com" },
  { name: "Wegagen Bank", logo: Wegagen, url: "https://fayda.wegagenbanksc.com.et/harmonization" },
  { name: "Nib Bank", logo: Nib, url: "https://fayda.nibbank.com.et" },
  { name: "Tsehay Bank", logo: Tsehay, url: "https://fayda.tsehaybank.com.et/FAYDA/home" },
  { name: "Siinqee Bank", logo: Siinqee, url: "https://fayda.siinqeebank.com:7443" },
  { name: "Zamzam Bank", logo: Zamzam, url: "https://fayda.zamzambank.com.et" },
  { name: "Amhara Bank", logo: Amhara, url: "https://fayda.amharabank.com.et" },
];

const highlights = [
  { title: "Trusted by Banks", value: "11+", description: "Verified banking partners" },
  { title: "Secure Links", value: "256-bit", description: "Encrypted connection" },
  { title: "Fast Setup", value: "< 2 min", description: "Quick ID linking" },
];

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element",
      );
    };
  }, []);

  const topBanks = banks.slice(0, 4);

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <div className="brand-wrap">
            <span className="brand-logo">ID</span>
            <div>
              <h1 className="brand">NID Links</h1>
              <p className="brand-tag">Secure national ID integration</p>
            </div>
          </div>
          <div className="translator">
            <div id="google_translate_element"></div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Banking made seamless</p>
            <h2 className="hero-title">Link your National ID in seconds</h2>
            <p className="hero-subtitle">One secure portal to connect with trusted banks, manage your credentials, and activate services with confidence.</p>

            <div className="hero-actions">
              <a className="primary-button" href="#banks">Browse banks</a>
              <a className="secondary-button" href="#learn">How it works</a>
            </div>

            <div className="hero-badges">
              <span>PCI compliant</span>
              <span>Bank-grade security</span>
              <span>24/7 access</span>
            </div>

            <div className="highlight-band">
              {highlights.map((item) => (
                <div key={item.title} className="highlight-card">
                  <p className="highlight-value" dangerouslySetInnerHTML={{ __html: item.value }} />
                  <p className="highlight-title">{item.title}</p>
                  <p className="highlight-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <div className="hero-panel-header">
                <span>Top linked banks</span>
                <span className="hero-panel-pill">Verified</span>
              </div>
              <ul className="hero-panel-list">
                {topBanks.map((bank) => (
                  <li key={bank.name} className="hero-panel-item">
                    <img src={bank.logo} alt={bank.name} />
                    <div>
                      <strong>{bank.name}</strong>
                      <p>Fast ID linking</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hero-panel-footer">Over 10 trusted banking networks connected</div>
            </div>
          </div>
        </div>
      </section>

      <section className="banks-section" id="banks">
        <div className="banks-header">
          <h2>Select your bank</h2>
          <p>Tap the bank below to link your National ID instantly.</p>
        </div>

        <div className="banks-grid">
          {banks.map((bank, index) => (
            <div key={index} className="bank-card">
              <div className="bank-logo-wrapper">
                <img src={bank.logo} alt={bank.name} className="bank-logo" />
              </div>
              <h3 className="bank-name">{bank.name}</h3>
              <p className="bank-copy">Secure connection to your bank's identity flow.</p>
              <a
                href={bank.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                Link account
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.5 2.5H2.5V13.5H13.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 1.5H9.5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 1.5L7.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section" id="learn">
        <div className="info-card">
          <h3>How it works</h3>
          <p>Choose your bank, verify your identity, and complete the secure link process through each bank's trusted portal.</p>
        </div>
        <div className="info-card">
          <h3>Why use National ID Links?</h3>
          <p>We centralize your National ID linking experience into one polished workflow with strong encryption and easy access.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2018 National ID Linking Service. All rights reserved.</p>
        <p>developed by <a href="https://yonatan-habtamu.vercel.app/" target="_blank">Dev. Jhan</a></p>
      </footer>
    </div>
  );
}

export default Home;
