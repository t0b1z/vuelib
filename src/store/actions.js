export default {
    addBook: ({ commit }, book) => {
        commit('m_addBook', book)
    },
    removeBook: ({ commit }, book) => {
        commit('m_removeBook', book)
    }
}
