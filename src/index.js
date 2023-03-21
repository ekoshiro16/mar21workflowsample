const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">Homepage</Link>
            </nav>

            <Routes>
                <Route to="/" element={<Homepage />} />
            </Routes>
        </div>
    )
}