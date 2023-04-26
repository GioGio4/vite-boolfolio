<script>
import { computed } from 'vue';

// import MyComponent from "./components/MyComponent.vue";

export default {

    props: {
        project: Object,
    },

    computed: {

        abstract() {
            return this.project.description.slice(0, 250) + "...";
        }
    },
};
</script>

<template>
    <div class="col-4">
        <div class="card h-100">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <hr>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type?.name }}</h6>
                <hr v-if="project.type">
                <p class="card-text">{{ abstract }}</p>

                <router-link :to="{ name: 'project-detail', params: { id: project.id } }"
                    class="btn btn-sm btn-primary">Detail</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>