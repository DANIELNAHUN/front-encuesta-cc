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
        @change="getCajera($event)"
        v-model="id_oficina_select"></v-select>
        <v-select
        required
        :items="cajeras"
        item-text="cajera_nombre"
        item-value="id_cajera"
        v-model="id_cajera_select"></v-select>
        <v-card-actions>
          <v-btn color="blue" @click="setOficina">Establecer {{ id_oficina_select }} -- {{ id_cajera_select }}</v-btn>
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
    cajeras(){
      return this.$store.state.cajeras;
    }
  },
  data() {
    return {
      id_oficina_select:0,
      id_cajera_select: 0,
    };
  },
  methods: {
    getParams() {
      this.$store.dispatch("getOficinas");
    },
    getCajera(id_oficinaa){
      this.id_cajera_select = 0
      const params = {
        id_oficina: id_oficinaa
      }
      this.$store.dispatch("getCajeras", params)
    },
    setOficina(){
      localStorage.setItem("id_oficina", this.id_oficina_select)
      localStorage.setItem("id_cajera", this.id_cajera_select)
      if( this.id_cajera_select != 0 && this.id_oficina_select != 0){
        this.$router.push({ path: "/" });
      }
      else{
        console.log("Seleccione los parametros requeridos")
        alert("Seleccione los parametros requeridos")
      }
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