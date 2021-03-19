const apiUrl = 'https://rickandmortyapi.com/api';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${apiUrl}${endpoint}`)
    const json = await req.json();
    return json;
}

export default {
    getAllRnmData: async () => {
        return [
            {
                slug: 'episodios',
                items: await basicFetch('/episode')
            },
            {
                slug: 'personagens',
                items: await basicFetch('/character')
            }
        ];
    },
}