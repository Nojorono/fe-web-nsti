export default function ({ store, redirect }) {
  // If the user is not authenticated
  // console.log(store.actions, '==============')
  // eslint-disable-next-line no-unused-expressions
  store.dispatch('checkToken').then((r) => {
    if (!store.state.logReg.authenticated) {
      return redirect('/content-management/sign-in')
    }
  })
}
