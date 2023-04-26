<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
        };
    },
    created() {
        axios
            .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
            .then((response) => {
                this.project = response.data;
            });
    },
    components: { ProjectCard }
};
</script>

<template>
    <div class="container my-3">
        <ProjectCard :project="project" v-if="project" />
    </div>
</template>

<style lang="scss" scoped></style>