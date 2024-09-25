<template>
  <v-container>
    <v-dialog v-model="dialog_formulario" max-width="800px" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-img
          src="../assets/soycliente.png"
          max-height="350"
          max-width="350"
          @click="selectOptions"
          v-bind="attrs" v-on="on"
        ></v-img>
        <v-img
          src="../assets/visitante.png"
          max-height="350"
          max-width="350"
          @click="selectOptions"
          v-bind="attrs" v-on="on"
        ></v-img>
      </template>
      <FormularioSatisfaccionVue  @closeDialogEncuesta="dialog_formulario = false"/>
    </v-dialog>
  </v-container>
</template>

<script>
import FormularioSatisfaccionVue from "@/components/FormularioSatisfaccion.vue";
export default {
  components: { FormularioSatisfaccionVue },
  methods: {
    selectOptions() {
      console.log("Hola");
    },
  },
  data() {
    return {
      dialog_formulario: false,
    };
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