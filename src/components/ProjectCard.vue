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
                <hr>
                <p class="card-text">{{ abstract }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>