<template>
    <div>
        <b-table striped hover :items="books" :fields="fields">
            <template v-slot:cell(actions)="row">
                <b-button size="sm" class="mr-1" @click="removeBook(row.item)">
                    Remove
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    import store from '../store/index'
    import {mapActions} from "vuex";

    export default {
        name: "Library",
        data() {
            return {
                fields: [
                    { key: 'title', label: 'Titel', sortable: true},
                    { key: 'author', label: 'Author', sortable: true, class: 'text-center' },
                    { key: 'pages', label: 'Seiten', sortable: true, class: 'text-center' },
                    { key: 'actions', label: 'Actions' }
                ],
            }
        },
        computed:{
            books() {
                return store.state.books;
            }
        },
        methods: {
            ...mapActions([
                'removeBook'
            ])
        }
    }
</script>

<style scoped>

</style>
