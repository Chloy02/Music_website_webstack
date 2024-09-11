document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const artistContainer = document.getElementById('artistContainer');
    const sortOptions = document.getElementById('sortOptions');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');

    let currentPage = 1;
    let currentQuery = '';
    let currentSort = 'name';

    // Fetch artist data from MusicBrainz API
    async function fetchArtists(query, page = 1) {
        const limit = 10;
        const offset = (page - 1) * limit;
        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=${limit}&offset=${offset}`);
            if (!response.ok) throw new Error('Error fetching artist data');
            const data = await response.json();
            displayArtists(data.artists);
            updatePaginationControls(data.count);
        } catch (error) {
            artistContainer.innerHTML = `<p class="text-red-500">${error.message}</p>`;
        }
    }

    // Display artists in the UI
    function displayArtists(artists) {
        // Sort artists based on selected sorting option
        artists.sort((a, b) => {
            if (currentSort === 'name') {
                return a.name.localeCompare(b.name);
            } else if (currentSort === 'type') {
                return (a.type || '').localeCompare(b.type || '');
            }
        });

        artistContainer.innerHTML = artists.map(artist => `
            <div class="bg-white p-4 rounded shadow">
                <h2 class="text-xl font-semibold">${artist.name}</h2>
                <p>Type: ${artist.type || 'Unknown'}</p>
                <p>Country: ${artist.country || 'Unknown'}</p>
                <p>Life Span: ${artist['life-span'].begin || 'N/A'} - ${artist['life-span'].end || 'Present'}</p>
                <img src="https://commons.wikimedia.org/wiki/Special:FilePath/${artist.name.replace(/\s+/g, '_')}.jpg" alt="${artist.name}" class="w-full h-40 object-cover mt-2">
            </div>
        `).join('');
    }

    // Update pagination button states based on current data
    function updatePaginationControls(totalCount) {
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage * 10 >= totalCount; // Assuming 10 items per page
    }

    // Event listener for search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query.length > 2) {
            currentQuery = query;
            currentPage = 1; // Reset to the first page on new search
            fetchArtists(currentQuery, currentPage);
        } else {
            artistContainer.innerHTML = '<p class="text-gray-600">Enter at least 3 characters to search.</p>';
        }
    });

    // Event listener for sorting options
    sortOptions.addEventListener('change', () => {
        currentSort = sortOptions.value;
        fetchArtists(currentQuery, currentPage);
    });

    // Event listener for pagination controls
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchArtists(currentQuery, currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        currentPage++;
        fetchArtists(currentQuery, currentPage);
    });
});