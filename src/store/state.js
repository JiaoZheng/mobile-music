// import {playMode} from 'common/js/config'
// import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  userInfo: {},
  playListInfo: [],
  CategoriesInfo: {},
  arrayInfo: [],
  isLoading: true,
  fullScreen: false,
  playList: [],
  currentSong: {album: {}},
  currentIndex: 0,
  playing: false,
  requestEnd: false,
  songIsReady: false
  // currentTime: 0
}

export default state
