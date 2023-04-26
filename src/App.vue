<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectsList from "./components/ProjectList.vue"

export default {
  data() {
    return {
      title: "Home",
      projectsList: [],
    }
  },

  components: { AppHeader, ProjectsList },

  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
          this.projectsList = response.data
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
    <ProjectsList :projectsList="projectsList" />
  </main>
</template>

<style lang="scss" scoped></style>