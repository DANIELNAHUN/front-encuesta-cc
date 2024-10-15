<template>
  <v-container>
    <v-dialog v-model="dialog_formulario" max-width="800px" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          src="../assets/soycliente.png"
          max-height="350"
          max-width="350"
          @click="selectOptions(1)"
          v-bind="attrs" v-on="on"
        ></v-img>
        <v-img
          src="../assets/visitante.png"
          max-height="350"
          max-width="350"
          @click="selectOptions(2)"
          v-bind="attrs" v-on="on"
        ></v-img>
      </template>
      <FormularioSatisfaccionVue :fecha_init="fecha_inicio" :cliente="cliente"  @closeDialogEncuesta="closeDialogEncuestaa"/>
    </v-dialog>
  </v-container>
</template>

<script>
import FormularioSatisfaccionVue from "@/components/FormularioSatisfaccion.vue";
import moment from 'moment-timezone'
export default {
  components: { FormularioSatisfaccionVue },
  data() {
    return {
      dialog_formulario: false,
      fecha_inicio: moment().tz('America/Lima').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      cliente: 0
    };
  },
  methods: {
    selectOptions(cliente) {
      const param = {
        id_pregunta:2
      }
      this.$store.dispatch('getOpciones', param)
      this.cliente = cliente
    },
    closeDialogEncuestaa(){
      this.dialog_formulario=false
      window.location.reload()
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>