<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    props: {
        projectsList: Array,
    },

    components: { ProjectCard },

};
</script>

<template>
    <section class="container my-4">
        <div class="row g-3">
            <ProjectCard v-for="project in projectsList" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style lang="scss" scoped></style>