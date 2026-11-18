import { useEffect, useState } from 'react'
import { Activity, Anvil, ArrowUpRight, BookOpen, ChevronDown, CircleHelp, Compass, Flame, Hammer, Layers3, Plus, Shield, Swords, WandSparkles } from 'lucide-react'

type Health = { status: string; service: string; version: string }

const stats = [
  { label: 'Vigor', value: 60, color: 'gold' },
  { label: 'Mind', value: 20, color: 'blue' },
  { label: 'Endurance', value: 30, color: 'green' },
  { label: 'Strength', value: 54, color: 'red' },
  { label: 'Dexterity', value: 18, color: 'purple' },
  { label: 'Intelligence', value: 9, color: 'blue' },
  { label: 'Faith', value: 25, color: 'gold' },
  { label: 'Arcane', value: 8, color: 'red' },
]

function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('API unavailable')
        return response.json()
      })
      .then(setHealth)
      .catch(() => setApiError(true))
  }, [])

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/">
          <span className="brand-mark"><Anvil size={22} /></span>
          <span><strong>BUILD FORGE</strong><small>ELDEN RING WORKSHOP</small></span>
        </a>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <a className="nav-item active" href="#forge"><Hammer size={17} /> Build Forge</a>
          <a className="nav-item" href="#library"><BookOpen size={17} /> Build Library</a>
          <a className="nav-item" href="#catalog"><Layers3 size={17} /> Item Catalog</a>
          <a className="nav-item" href="#analysis"><Activity size={17} /> Build Analysis</a>
        </nav>
        <div className="sidebar-bottom">
          <div className="version-card"><span className="status-dot" /> API {health ? 'CONNECTED' : apiError ? 'OFFLINE' : 'CONNECTING'}<small>{health ? health.version : 'Local development'}</small></div>
          <a className="nav-item muted" href="#help"><CircleHelp size={17} /> Project notes</a>
        </div>
      </aside>

      <section className="main-panel" id="forge">
        <header className="topbar">
          <div className="breadcrumb"><span>WORKSPACE</span><ChevronDown size={14} /><strong>BUILD FORGE</strong></div>
          <div className="topbar-right"><span className="online-indicator"><i /> PERSONAL WORKSPACE</span><div className="avatar">T</div></div>
        </header>

        <div className="content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span /> THE TARNISHED'S WORKSHOP</div>
              <h1>Shape your<br /><em>legend.</em></h1>
              <p>Craft a build with intention. Tune your attributes, choose your armaments, and prepare for the Lands Between.</p>
              <div className="hero-actions"><button className="primary-button" onClick={() => document.getElementById('character')?.scrollIntoView({ behavior: 'smooth' })}><Plus size={17} /> START A BUILD</button><button className="secondary-button" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>EXPLORE CATALOG <ArrowUpRight size={15} /></button></div>
            </div>
            <div className="hero-art" aria-label="Dark fantasy forge illustration"><div className="rune rune-one">ᚠ</div><div className="rune rune-two">ᛟ</div><div className="sun-ring" /><div className="blade-shape" /><div className="hero-caption"><Flame size={14} /> A NEW AGE OF CRAFT</div></div>
          </section>

          <div className="section-heading" id="character"><div><span className="eyebrow">01 / CHARACTER FOUNDATION</span><h2>Character profile</h2></div><span className="pill">DRAFT BUILD</span></div>
          <section className="profile-grid">
            <div className="panel character-panel">
              <div className="panel-title"><div className="icon-tile"><Shield size={18} /></div><div><strong>Starting class</strong><small>Choose your origin</small></div></div>
              <label className="field-label" htmlFor="class-select">CHARACTER CLASS</label>
              <select id="class-select" defaultValue="vagabond"><option value="vagabond">Vagabond</option><option>Warrior</option><option>Hero</option><option>Bandit</option><option>Astrologer</option><option>Prophet</option><option>Samurai</option><option>Prisoner</option><option>Confessor</option><option>Wretch</option></select>
              <div className="level-row"><span>Rune level</span><strong>150</strong></div>
              <div className="level-track"><span /></div>
              <small className="muted-text">Level editor and class point validation are coming in the next milestone.</small>
            </div>
            <div className="panel attributes-panel">
              <div className="panel-title"><div className="icon-tile"><Activity size={18} /></div><div><strong>Attributes overview</strong><small>Illustrative draft distribution</small></div><span className="panel-tag">LEVEL 150</span></div>
              <div className="stat-grid">{stats.map((stat) => <div className="stat" key={stat.label}><div><span>{stat.label}</span><strong>{stat.value}</strong></div><div className="stat-track"><i className={stat.color} style={{ width: `${stat.value / 99 * 100}%` }} /></div></div>)}</div>
            </div>
          </section>

          <div className="section-heading" id="catalog"><div><span className="eyebrow">02 / ARMAMENT & LOADOUT</span><h2>Forge your arsenal</h2></div><button className="text-button">VIEW ALL ITEMS <ArrowUpRight size={14} /></button></div>
          <section className="arsenal-grid">
            <div className="panel equipment-card"><div className="equipment-art sword-art"><Swords size={38} /></div><div className="equipment-info"><span className="eyebrow">MAIN HAND</span><strong>Weapon slot</strong><small>Choose an armament</small></div><button className="add-button" aria-label="Add weapon"><Plus size={18} /></button></div>
            <div className="panel equipment-card"><div className="equipment-art shield-art"><Shield size={38} /></div><div className="equipment-info"><span className="eyebrow">OFF HAND</span><strong>Shield / Weapon</strong><small>Choose equipment</small></div><button className="add-button" aria-label="Add offhand"><Plus size={18} /></button></div>
            <div className="panel equipment-card"><div className="equipment-art magic-art"><WandSparkles size={38} /></div><div className="equipment-info"><span className="eyebrow">SPELLS & SKILLS</span><strong>Abilities</strong><small>Choose your arts</small></div><button className="add-button" aria-label="Add skill"><Plus size={18} /></button></div>
          </section>

          <section className="bottom-note" id="analysis"><div className="note-icon"><Compass size={20} /></div><div><strong>The forge is being prepared.</strong><p>This first milestone establishes the responsive workspace and API connection. Verified game data, interactive attribute editing, calculations and guided recommendations will be added in sequence.</p></div></section>
          <footer>ELDEN RING BUILD FORGE <span>UNOFFICIAL FAN PROJECT · NOT AFFILIATED WITH FROM SOFTWARE</span></footer>
        </div>
      </section>
    </main>
  )
}

export default App
