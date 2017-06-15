<template>
<div>
  <h1>Home</h1>
</div>
</template>

<script>

export default {
  name: 'home-view',

  title () {
    return 'This is home'
  },

  description () { 
    return 'This is description for home'
  },
  card () {
  	return 'http://placehold.it/1280x768/f60/fff?text=HOME'
  }
}
</script>
