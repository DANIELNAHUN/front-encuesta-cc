<template>
  <v-card>
    <v-card-title>Califica Nuestra Atención</v-card-title>
    <v-card-text>
        <div  v-for="i in options" :key="i">
            <p class="title-option">{{i.title}}</p>
            <p class="emoji-option">{{i.emoji}}</p>
        </div>
    </v-card-text>
    <v-card-actions>
        <v-btn color="red" @click="closeDialogEncuesta">Cancelar</v-btn>
        <v-btn color="blue">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import OpcionesEncuestaVue from "./OpcionesEncuesta.vue";
export default {
  components: { OpcionesEncuestaVue },
  methods:{
    closeDialogEncuesta(){
        console.log("Cerrando")
        this.$emit("closeDialogEncuesta")
    }
  },
  data(){
    return{
        options:[
            {title: "Pesimo", emoji:"😖"},
            {title: "Pesimo", emoji:"😖a"},
            {title: "Pesimo", emoji:"😖s"},
            {title: "Pesimo", emoji:"😖d"},
        ]
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
}
.v-card__text, .v-card__actions{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:50px;
}
</style>