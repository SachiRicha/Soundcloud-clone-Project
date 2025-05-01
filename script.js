document.addEventListener('DOMContentLoaded', function() {
    const playlistsContainer = document.getElementById('playlists');

    // Sample playlists data (mocked)
    const playlists = [
        { name: 'Chill Mix', tracks: ['track1', 'track2'] },
        { name: 'EDM Vibes', tracks: ['track3', 'track4'] }
    ];

    // Function to display playlists
    function displayPlaylists() {
        playlists.forEach(playlist => {
            const playlistElement = document.createElement('div');
            playlistElement.classList.add('playlist');

            const playlistTitle = document.createElement('h2');
            playlistTitle.textContent = playlist.name;
            playlistElement.appendChild(playlistTitle);

            playlist.tracks.forEach(trackId => {
                const trackElement = document.createElement('div');
                trackElement.textContent = `Track: ${trackId}`;
                playlistElement.appendChild(trackElement);
            });

            playlistsContainer.appendChild(playlistElement);
        });
    }

    // Call function to display playlists
    displayPlaylists();
});
