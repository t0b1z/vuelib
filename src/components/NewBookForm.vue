<template>
    <div class="newBookContainer">
        <button class="btn btn-dark" @click="toggleShowNewBookForm">New Book</button>

        <b-form @submit.prevent="handleAddNewBook" v-if="showNewBookForm" class="form">
            <b-form-group id="input-group-title" label="Title:" label-for="input-title">
                <b-form-input id="input-title" v-model="formData.title" required placeholder="Enter title"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-author" label="Author:" label-for="input-author">
                <b-form-input id="input-author" v-model="formData.author" required placeholder="Enter author name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-pages" label="Pages:" label-for="input-pages">
                <b-form-input id="input-pages" v-model="formData.pages" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "NewBookForm",
        data () {
            return {
                showNewBookForm: false,
                formData: {
                    title: '',
                    author: '',
                    pages: 0,
                    read: false
                }
            }
        },
        methods: {
            ...mapActions([
                'addBook'
            ]),
            toggleShowNewBookForm(){
                this.showNewBookForm = !this.showNewBookForm
            },
            handleAddNewBook () {
                const {title, author, pages} = this.formData
                const read = false
                const book = {
                    title, author, pages, read
                }
                this.addBook(book)
            }
        }
    }
</script>

<style scoped>

    .form {
        margin-top: 5px;
    }

    .btn {
        margin: 0 5px 0 5px;
    }
</style>
