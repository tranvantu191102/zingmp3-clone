import { } from '@fortawesome/free-regular-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'

import privateIcon from '../icons/music-private.svg'
import exploreIcon from '../icons/compass.svg'
import chartIcon from '../icons/bar-chart.svg'
import radioIcon from '../icons/music-1.svg'
import tabletIcon from '../icons/tablet.svg'

import musicIcon from '../icons/music.svg'
import starIcon from '../icons/star.svg'
import playIcon from '../icons/play.svg'

export const headerDataTop = [
    {
        display: 'Cá nhân',
        path: 'private',
        icon: privateIcon
    },
    {
        display: 'Khám phá',
        path: '/',
        icon: exploreIcon
    },
    {
        display: '#zingchart',
        path: 'zing-chart',
        icon: chartIcon
    },
    {
        display: 'Radio',
        path: 'radio',
        icon: radioIcon
    },
    {
        display: 'Theo dõi',
        path: 'the-loai-nghe-si',
        icon: tabletIcon
    }
]

export const headerDataBottom = [
    {
        display: 'Nhạc mới',
        path: 'new-song',
        icon: musicIcon
    },
    {
        display: 'Top 100',
        path: 'top-100',
        icon: starIcon
    },
    {
        display: 'MV',
        path: 'the-loai-video',
        icon: playIcon
    }
]