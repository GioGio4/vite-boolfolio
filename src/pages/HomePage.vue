<script>
import axios from "axios";
import ProjectsList from "../components/ProjectList.vue"

export default {

  data() {
    return {
      projectsList: {
        data: [],
        pages: [],
      },
    }
  },

  components: { ProjectsList },

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
  <ProjectsList :projectsList="projectsList.data" :pages="projectsList.pages" @changePage="fetchProjects" />
</template>

<style lang="scss" scoped></style>