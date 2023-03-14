import { action, makeObservable, observable } from "mobx";
import { IRootStore } from "@/store/RootStore";


const auth = () =>
  new Promise<string>((resolve, reject) => {
    const baseUrl = 'https://api.netlify.com'
    const siteId = 'fe964a31-0c24-48c6-ba2a-fdaa771add03'
    const url = `${baseUrl}/auth?provider=github&site_id=${siteId}&scope=public_repo,read:user`
    const authorizeCallback = (event: MessageEvent) => {
      window.removeEventListener('message', authorizeCallback)
      const data = event.data as string
      const success = 'authorization:github:success:'
      if (!data.startsWith(success)) throw reject(data)
      const payload = JSON.parse(data.substring(success.length))
      const token = payload.token
      windowObjectReference?.close()
      resolve(token)
    }
    const handshakeCallback = (event: MessageEvent) => {
      if (event.data == 'authorizing:github' && event.origin == baseUrl) {
        window.removeEventListener('message', handshakeCallback)
        window.addEventListener('message', authorizeCallback, false)
        windowObjectReference?.postMessage(event.data, event.origin)
      }
    }
    window.addEventListener('message', handshakeCallback, false)
    const windowObjectReference = window.open(url)
  })

export class AuthStore {
  token: string = ''
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      token: observable,
      fetchToken: action,
      clearToken: action,
      setToken: action,

    });
    this.rootStore = rootStore;
  }

  fetchToken() {
    auth().then(token => this.setToken(token))
  }
  clearToken() {
    this.setToken('')
  }
  setToken(token: string) {
    localStorage.setItem("accessToken", token);
    this.token = token
  }
}
