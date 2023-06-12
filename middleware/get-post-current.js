
// store.dispatchで、現在選択中のpostをvuexに保存
export default async ({ store, params }) => {
  return await store.dispatch('getCurrentPost', params)
}