import './App.css'

const sections = [
  { id: 'interests', label: '관심사' },
  { id: 'strengths', label: '잘하는 것과 배우고 싶은 것' },
  { id: 'activities', label: '활동과 작품' },
  { id: 'goals', label: '앞으로의 목표' },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="my portfolio 홈">
            <span aria-hidden="true">✿</span> my portfolio<span className="brand-dot">.</span>
          </a>
          <nav aria-label="소개 메뉴">
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">✦</span> 반가워요, 제 소개를 시작할게요</p>
            <h1 id="hero-title">안녕하세요,<br /><span className="name-highlight">Kim</span>이에요!</h1>
            <p className="hero-intro">새로운 걸 직접 해보는 걸 좋아하는 사람</p>
            <a className="hero-link" href="#interests">저를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-star hero-star-one">✦</span>
            <span className="hero-star hero-star-two">✿</span>
            <div className="game-card">
              <span className="game-card-label">HELLO, KIM!</span>
              <span className="game-card-emoji">🎮</span>
              <span className="game-card-caption">PLAY · TRY · LEARN</span>
            </div>
            <span className="hero-sparkle">✧</span>
          </div>
        </section>

        <section className="content-section page-width" id="interests" aria-labelledby="interests-title">
          <div className="section-heading">
            <p className="section-number">01 / WHAT I LIKE</p>
            <h2 id="interests-title">요즘 좋아하는 것</h2>
            <p>제가 즐기는 게임이에요.</p>
          </div>
          <div className="interest-grid">
            <article className="info-card interest-card roblox-card">
              <span className="card-emoji" aria-hidden="true">🧱</span>
              <h3>Roblox</h3>
              <p>관심 있는 게임</p>
            </article>
            <article className="info-card interest-card brawl-card">
              <span className="card-emoji" aria-hidden="true">⭐</span>
              <h3>브롤스타즈</h3>
              <p>관심 있는 게임</p>
            </article>
          </div>
        </section>

        <section className="content-section soft-section" id="strengths" aria-labelledby="strengths-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">02 / MY NEXT STEP</p>
              <h2 id="strengths-title">잘하는 것과 배우고 싶은 것</h2>
            </div>
            <div className="strength-grid">
              <article className="info-card strength-card">
                <span className="card-label">제가 잘하는 것</span>
                <span className="strength-icon" aria-hidden="true">🤝</span>
                <h3>약속을 잘 지켜요</h3>
              </article>
              <article className="info-card strength-card learning-card">
                <span className="card-label">앞으로 배우고 싶은 것</span>
                <span className="strength-icon" aria-hidden="true">🕹️</span>
                <h3>게임 만들기</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="activities" aria-labelledby="activities-title">
          <div className="section-heading">
            <p className="section-number">03 / THINGS I’VE DONE</p>
            <h2 id="activities-title">활동과 작품</h2>
          </div>
          <div className="empty-card">
            <span aria-hidden="true">🌱</span>
            <p>소개할 활동이나 작품은 나중에 추가할게요.</p>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goals-title">
          <div className="page-width goal-inner">
            <div>
              <p className="section-number">04 / MY GOAL</p>
              <h2 id="goals-title">앞으로의 목표</h2>
              <p className="goal-copy">브롤스타즈 트로피 <strong>10만</strong></p>
            </div>
            <span className="goal-star" aria-hidden="true">★</span>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
