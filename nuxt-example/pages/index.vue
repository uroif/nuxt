<template>
  <div>
    <Aside/>
    <!--main content-->
    <div class="main-content">

      <!--list-wrapper-->
      <div class="list-wrapper">

      </div>
      <!--end of list-wrapper-->

    </div>
    <!--end of main-content-->

  </div>
</template>

<script>
  import Aside from "@/components/Aside";
  import axios from "axios";

  export default {
    components: {
      Aside
    },

    async asyncData() {
      const { data } = await axios.get(
        ""
      );
      return { posts: data.articles };
    }

  };
</script>

<style>
  .main-content {
    width: 100%;
    min-height: 100vh;
    float: left;
    padding-left: 220px;
    background: #f5f5f5;

  }

  .list-wrapper {
    width: 100%;
    float: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

</style>
