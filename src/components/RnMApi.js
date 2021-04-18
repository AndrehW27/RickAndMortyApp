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
            },
            {
                slug: 'Episódios',
                items: await basicFetch('/episode')
            },
            {
                slug: 'Personagens pag2',
                items: await basicFetch('/location/2')
            }
            
        ];
    },

    getAllEpisodes: async () =>{
        return[
            {
                slug: 'Página 1',
                items: await basicFetch('/episode')
            },
            {
                slug: 'Página 2',
                items: await basicFetch('/episode?page=2')
            },
            {
                slug: 'Página 3',
                items: await basicFetch('/episode?page=3')
            }
        ]
    }
}