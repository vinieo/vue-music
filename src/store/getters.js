//获取state 对数据进行映射 用getters取state的数据去到组件里  
//getters可以是个函数 类似于计算属性 可以根据state的不同值计算出新的值 可以在getters里写一些复杂的判断逻辑
export const singer = state => state.singer //简单包装  箭头划出的简写 实际是function return一个state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList
