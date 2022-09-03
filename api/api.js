import axiosClient from './axios'

export const api = {
    getHome: async () => {

    }
}

export const getHome = async () => {
    try {
        console.log('Hello')
        const data = await axiosClient.get('/home')
        return data.items.filter(item => item.sectionType === 'banner' || item.sectionType === 'playlist' || item.sectionType === 'new-release' || item.sectionType === 'mix' || item.sectionType === 'event' || item.sectionType === 'weekChart' || item.sectionType === 'RTChart')
    } catch (error) {
        console.log(error);
    }
}
