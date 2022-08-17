import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="site">
            <div className="img">
              <img src="/bb.svg" alt="" />
            </div>
            <div className="">
              <p className="corp">BB アシスタントカンパニー</p>
              <p className="desc">確かなスタッフによる業務サポート</p>
            </div>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <Link href="/">
                  <a>会社情報</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>サービス</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="btn">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>

          <button type="button" className="nav-button" onClick={navFunc}>
            <span className="sr-only">MENU</span>
          </button>
        </div>
      </div>
      <section className="hero">
        <div className="catch">
          <div className="container">
            <h1>
              <img src="/hero.svg" alt="BB Assistant Company" />
            </h1>
            <p>縁の下の力持ちとしてお仕事を支えます</p>
          </div>
        </div>
      </section>
      <section className="message">
        <div className="container">
          <h2>
            ビジネスアシスタントとして
            <br />
            サポートを続けて20年
          </h2>
          <p>
            プロのビジネスアシスタントとして独立後、さまざまなお客様からご依頼をいただき、多様な業務、事業、効率化などのサポートを行ってきました。得意分野が多岐にわたるスタッフが揃っていますので、必要に応じてどのような業務にも対応いたし、雑事に振り回されることなく、重要な案件に取り組んでいただくことを目指しています。
          </p>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <h2>アシスタントサービス</h2>
          <p>私達にできること</p>

          <div className="details">
            <article className="detail office">
              <figure></figure>
              <h3>
                オフィス業務
                <br />
                サポート
              </h3>
              <p>
                書類管理、電話・メール対応、スケジュール管理、デジタルトランスフォーメーションなど、さまざまなオフィス業務のサポートを行います。
              </p>
              <Link href="/">
                <a className="btn">OFFICE</a>
              </Link>
            </article>
            <article className="detail manage">
              <figure></figure>
              <h3>
                マネージメント
                <br />
                サポート
              </h3>
              <p>
                プロジェクトチームの構成メンバーのマネージメント、案件の進捗管理、リーダーのアシスタントサポートなどを行います。
              </p>
              <Link href="/">
                <a className="btn">MANAGEMMENT</a>
              </Link>
            </article>
            <article className="detail research">
              <figure></figure>
              <h3>
                調査・研究
                <br />
                サポート
              </h3>
              <p>
                各種事業の立ち上げ、運営にかかわる調査・研究のサポートや、特定分野の専門家との提携のお手伝いなどを行います。
              </p>
              <Link href="/">
                <a className="btn">RESEARCH</a>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="text">
            <h2>お問い合わせ</h2>
            <p>
              もっと業務を効率化したい
              <br />
              マネージメントの煩わしさから開放されたい
              <br />
              本業に集中したいなどなど、
              <br />
              些細なことでもお気軽にお問い合わせください。
            </p>
          </div>

          <form className="form">
            <p>
              <label>
                <span className="sr-only">名前</span>
                <input type="text" name="name" placeholder="名前"></input>
              </label>
            </p>
            <p>
              <label>
                <span className="sr-only">メールアドレス</span>
                <input
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                ></input>
              </label>
            </p>
            <p>
              <label>
                <span className="sr-only">メッセージ</span>
                <textarea
                  name="msg"
                  placeholder="メッセージを入力してください"
                ></textarea>
              </label>
            </p>
            <p>
              <input className="btn" type="submit" value="送信"></input>
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="info">
            <div className="site">
              <div className="img">
                <img src="/bb-white.svg" alt="" />
              </div>
              <div className="">
                <p className="corp">BB アシスタントカンパニー</p>
              </div>
            </div>

            <p className="add">
              〒001-0001
              <br />
              北海道中央区南53条東西ビル8F
              <br />
              0001-1234-5678
            </p>
          </div>

          <ul className="sns">
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-twitter.svg" alt="Twitter" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-facebook.svg" alt="Facebook" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/logo-instagram.svg" alt="Instagram" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
