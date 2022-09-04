import axiosClient from './axios'

export const api = {
    getHome: async () => {

    }
}

export const getHome = async () => {
    try {
        const data = await axiosClient.get('/home')
        console.log(data)
        const banner = data.items.filter(item => item.sectionType === 'banner')
        const playlist = data.items.filter(item => item.sectionType === 'playlist')
        const event = data.items.filter(item => item.sectionType === 'event')
        const release = data.items.filter(item => item.sectionType === 'new-release')
        const mix = data.items.filter(item => item.sectionType === 'mix')
        const weekChart = data.items.filter(item => item.sectionType === 'weekChart')
        const rtChart = data.items.filter(item => item.sectionType === 'RTChart')
        const newReleaseChart = data.items.filter(item => item.sectionType === 'newReleaseChart')
        const artistSpotlight = data.items.filter(item => item.sectionType === 'artistSpotlight')
        return { banner, playlist, event, release, mix, weekChart, rtChart, newReleaseChart, artistSpotlight }
    } catch (error) {
        console.log(error);
    }
}
