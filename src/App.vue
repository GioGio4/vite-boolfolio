<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectsList from "./components/ProjectList.vue"

export default {
  data() {
    return {
      title: "Home",
      projectsList: {
        data: [],
        pages: [],
      },
    }
  },

  components: { AppHeader, ProjectsList },

  emits: ['changePage'],

  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects';

      axios.get(endpoint)
        .then((response) => {
          this.projectsList.data = response.data.data
          this.projectsList.pages = response.data.links

        })
    }
  },

  created() {
    this.fetchProjects();
  }

};
</script>

<template>
  <AppHeader />
  <main>
    <ProjectsList :projectsList="projectsList.data" :pages="projectsList.pages" @changePage="fetchProjects" />
  </main>
</template>

<style lang="scss" scoped></style>