var playlist = { 
<<<<<<< HEAD
  artist: 'song'
}


function updatePlaylist(obj, key, value) {
  obj[key] = value
  
  return obj
}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi')

updatePlaylist(playlist, 'Slowdive', 'Alison')

console.log(playlist)


function removeFromPlaylist(obj, key) {
  
  delete playlist.Slowdive

  return obj
  
}

console.log(playlist)
=======
  artist: song
}


function updatePlaylist(obj, key, value) {
  
   return Object.assign({}, obj, {[key]: value })
   
}

var newPlaylist = updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi')

console.log(newPlaylist)

console.log(playlist)

>>>>>>> dfe687fce8c1857d5aaa23d1e3a22dfc0d73a987
