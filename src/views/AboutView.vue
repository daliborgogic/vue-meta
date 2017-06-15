<template>
<div>
  <h1>About</h1>
</div>
</template>

<script>

export default {
  name: 'about-view',

  title () {
    return 'This is about'
  },

  description () { 
    return 'This is description for about'
  },
  card () {
  	return 'http://placehold.it/1280x768/f60/fff?text=ABOUT'
  }
}
</script>
