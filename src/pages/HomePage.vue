<template>
    <div style="text-align: center; margin: 2rem 0;">
        <h1 class="title">Star Wars</h1>
        <p>TypeScript, Services, Composition API, Rest API
            <router-link to="/about">and more</router-link>
        </p>
    </div>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-else>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Mass</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(person, index) in people.results" :key="index">
                    <td>{{ person.name }}</td>
                    <td>{{ person.gender }}</td>
                    <td>{{ person.mass }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Spinner from '@/components/UI/Spinner.vue'
import DataService from '@/services/DataService'
import ResponseData from '@/types/ResponseData'
import People from '@/types/People'

export default defineComponent({
    components: { Spinner },
    setup() {

        const loading = ref(true as boolean)
        const people = ref({} as People)
        onMounted(() => getPeople())

        const getPeople = () => {
            DataService.getAllCharacters()
                .then((res: ResponseData) => {
                    people.value = res.data
                    loading.value = false
                })
                .catch((e: Error) => console.log(e))
        }

        return {
            loading,
            people
        }
    }
})
</script>
