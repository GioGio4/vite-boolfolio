<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    props: {
        projectsList: Array,
        pages: Array,
    },

    components: { ProjectCard },

};
</script>

<template>
    <section class="container my-4">
        <div class="row g-3">
            <ProjectCard v-for="project in projectsList" :key="project.id" :project="project" />
        </div>

        <!-- Pagination -->
        <nav aria-label="...">
            <ul class="pagination my-3">
                <li v-for="page in pages" class="page-item" aria-current="page">
                    <button type="button" class="page-link" @click="$emit('changePage', page.url)" v-html="page.label"
                        :class="{ disabled: !page.url, active: page.active }">
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<style lang="scss" scoped></style>