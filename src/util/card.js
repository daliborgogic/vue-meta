function getCard (vm) {
  const { card } = vm.$options
  if (card) {
    return typeof card === 'function'
      ? card.call(vm)
      : card
  }
}

const serverCardMixin = {
  created () {
    const card = getCard(this)
    if (card) {
      this.$ssrContext.card = card
    }
  }
}

// const clientCardMixin = {
//   mounted () {
//     const card = getCard(this)
//     if (card) {
//       document.card = card
//     }
//   }
// }

export default process.env.VUE_ENV === 'server' ? serverCardMixin : null
