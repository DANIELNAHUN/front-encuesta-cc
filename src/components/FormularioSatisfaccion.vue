<template>
  <v-card>
    <v-card-title>Califica Nuestra Atención</v-card-title>
    <v-card-text>
      <div v-for="opc in opciones" :key="opc.id_opcion">
        <v-card-subtitle class="title-option">{{ opc.texto_opcion }}</v-card-subtitle>
        <v-btn text class="emoji-option" @click="registrarRespuesta(opc.id_opcion)">{{
          opc.imagen_opcion
        }}</v-btn>
      </div>
    </v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{fecha_init:"", cliente:Number},
  computed: {
    opciones() {
      return this.$store.state.opciones;
    },
  },
  data(){
    return{
      option_selected: 0
    }
  },
  methods: {
    registrarRespuesta(id_opcion_s) {
      const fecha_end = new Date();
      const param={
        id_oficina: localStorage.getItem("id_oficina"),
        id_opcion_cliente: this.cliente,
        id_pregunta: 2,
        id_opcion: id_opcion_s,
        date_init: this.fecha_init.toISOString(),
        date_end: fecha_end.toISOString(),
        created_at: fecha_end.toISOString(),
      }
      console.log(param)
      this.$store.dispatch("setRespuestas", param)
      this.$emit("closeDialogEncuesta");
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
}
.v-card__title{
  background-image: url("../assets/encabezadofondo.png");
  background-size: cover;
  color: white;
}
.v-card__title,
.v-card__text{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.title-option{
  font-size: larger;
  font-weight: bolder;
  text-align: center;
}
.emoji-option{
  font-size: 50px;
  height: auto !important;
}
.v-card__actions{
  background-image: url("../assets/piefondo.png");
  min-height: 145px;
  background-size: cover;
  color: white;
}
</style>