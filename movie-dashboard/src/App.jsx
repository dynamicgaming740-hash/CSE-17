// inside App.js sidebar structure:
<ul className="menu-list">
  {['Dashboard', 'Movies', 'TV Shows', 'Genres', 'Actors', 'Watchlist', 'Reviews', 'Analytics', 'Settings'].map((item) => (
    <li
      key={item}
      className={`menu-item ${activeMenu === item ? 'active' : ''}`}
      onClick={() => setActiveMenu(item)}
    >
      {/* Dynamic text helper that media-queries hide safely if compressed */}
      <span className="menu-text">{item}</span>
    </li>
  ))}
</ul>