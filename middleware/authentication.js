export default function ({ store, redirect }) {
  // If the user is not authenticated
  // console.log(store.actions, '==============')

  if (!store.state.logReg.authenticated) {
    return redirect('/content-management/sign-in')
  }
}
