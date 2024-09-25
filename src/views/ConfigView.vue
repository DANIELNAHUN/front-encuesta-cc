<template>
  <v-container>
    <v-btn color="green" to="/">Inicio</v-btn>
    <v-card>
      <v-card-title>Selecciona tu Oficina</v-card-title>
      <v-card-text>
        <v-select
        required
        :items="oficinas"
        item-text="oficina_nombre"
        item-value="id_oficina"
        v-model="id_oficina_select"></v-select>
        <v-card-actions>
          <v-btn color="blue" @click="setOficina">Establecer {{ id_oficina_select }}</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.getParams();
  },
  computed: {
    oficinas() {
      return this.$store.state.oficinas;
    },
  },
  data() {
    return {
      id_oficina_select:0
    };
  },
  methods: {
    getParams() {
      this.$store.dispatch("getOficinas");
    },
    setOficina(){
      localStorage.setItem("id_oficina", this.id_oficina_select)
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>