<template>
  <div id="app">
    <h1>My Library</h1>
    <h3>developed with Vue</h3>
    <b-container>
      <Library/>
      <NewBookForm/>
    </b-container>
  </div>
</template>

<script>
import Library from './components/Library.vue'
import NewBookForm from "@/components/NewBookForm";
import {storage} from './scripts/localStorage'
import store from './store/index'

export default {
  name: 'App',
  components: {
    Library,
    NewBookForm
  },
  created() {
    if(storage.isLocalStorageAvailable()){
      store.state.books = JSON.parse(storage.load("books"))
      if(store.state.books){
        console.log(JSON.stringify(store.state.books))
      }else {
        console.log("No books have been created yet...")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
