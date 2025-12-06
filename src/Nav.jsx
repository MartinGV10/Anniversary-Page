function Nav({ setPage }) {
    return (
        <>
        <div className="nav">
            <h2 className="nav-title">Our Little Happi Familia</h2>
            <div className="nav-items">
                <p className="nav-tit" onClick={() => setPage('about')}>❤️ About ❤️</p>
                <p className="nav-tit" onClick={() => setPage('trips')}>✈️ Trips ✈️</p>
                <p className="nav-tit" onClick={() => setPage('songs')}>🎶 Songs 🎶</p>
                <p className="nav-tit" onClick={() => setPage('pictures')}>📷 Pictures 📷</p>
                <p className="nav-tit" onClick={() => setPage('video')}>📽️ Video 📽️</p>
                <p className="nav-tit" onClick={() => setPage('notes')}>📝 Notes 📝</p>
            </div>
        </div>
        </>
    )
}

export default Nav