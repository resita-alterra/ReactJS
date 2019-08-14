import createStore from "unistore";

export const store = createStore({
  count: 0,
  is_login: false,
  user_name: "",
  email: "",
  beritaTengah: [],
  beritaSamping: [],
  kategori: []
});

export const actions = store => ({
  login(state) {
    return { is_login: true };
  },

  increment(state) {
    return { count: state.count + 1 };
  },

  logout(state) {
    return { is_login: false };
  },
  setUser(state, nama) {
    return { user_name: nama };
  },
  setEmail(state, email) {
    return { email: email };
  },
  tambahTengah(state, arr) {
    return { beritaTengah: arr };
  },
  tambahSamping(state, arr) {
    return { beritaSamping: arr };
  },
  tambahKategori(state, arr) {
    return { kategori: arr };
  }
  //   tambahEntertainment(state, arr) {
  //     return { kategori.entertainment : arr };
  //   },
  //   tambahSports(state, arr) {
  //     return { kategori.sports : arr };
  //   }
});
