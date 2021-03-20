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
                slug: 'Personagens',
                items: await basicFetch('/character')
            },
            {
                slug: 'Locais',
                items: await basicFetch('/location')
            }
            ,
            {
                slug: 'Episódios',
                items: await basicFetch('/episode')
            }
        ];
    },
}