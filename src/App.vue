<template>
  <v-app>
    <div style="display: flex; justify-content: end; align-items: center; width: 100vw; position: absolute; margin-top: 5px; margin-left: -5px; z-index: 10;">
      <v-btn dark color="grey darken-3" to="/config" fab><v-icon>mdi-account-cog</v-icon></v-btn>
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
