export default async function ({ store, redirect }) {
  // Check token on middleware execution
  try {
    await store.dispatch('logReg/checkToken')
    
    if (!store.state.logReg.authenticated) {
      return redirect('/content-management/sign-in')
    }
  } catch (error) {
    return redirect('/content-management/sign-in')
  }
}
