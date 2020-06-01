import {storage} from "@/scripts/localStorage";
import store from "@/store/index";

export default {
    m_addBook: (state, book) => {
        state["books"].push(book)
        storage.save("books", JSON.stringify(store.state.books))
    },
    m_removeBook: (state, book) => {
        console.log("Removing book: ", JSON.stringify(book))
        state["books"] = state["books"].filter( (item) => {
            return item !== book
        })
        console.log("state[\"books\"]: ", JSON.stringify(state["books"]))
        storage.save("books", JSON.stringify(store.state.books))
    }
}
