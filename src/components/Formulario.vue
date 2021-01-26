<template>
  <v-form lazy-validation ref="form">
    <v-container>
      <v-row justify="center">
        <v-col cols="7">
          <v-text-field
            label="Nombres"
            solo
            filled
            outlined
            v-model="nombres"
            :rules="nameRules"
            required
          >
          </v-text-field>
          <v-text-field
            label="Apellidos"
            solo
            filled
            outlined
            v-model="apellidos"
            :rules="nameRules"
          >
          </v-text-field>
          <v-text-field
            label="Teléfono"
            solo
            filled
            outlined
            v-model="telefono"
            type="number"
            :rules="phoneRules"
          >
          </v-text-field>
          <v-text-field label="Email" solo filled outlined v-model="email" :rules="emailRules">
          </v-text-field>
          <v-text-field
            label="Dirección"
            solo
            illed
            outlined
            v-model="direccion"
            :rules="addressRules"
          >
          </v-text-field>
          <v-text-field label="Ciudad" solo illed outlined v-model="ciudad" :rules="cityRules">
          </v-text-field>
          <v-select
            :items="items"
            label="Como escuchaste de nosotros"
            solo
            filled
            outlined
            v-model="referred"
            
          >
          </v-select>

          <v-btn block color="primary" @click="sendForm"> Enviar </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      items: ["Radio", "Televisión", "Internet"],
      nombres: "",
      apellidos: "",
      ciudad: "",
      telefono: "",
      direccion: "",
      email: "",
      ciudad: "",
      referred: "",
      nameRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) =>
          (v && v.length >= 10) ||
          "Este campo debe tener por lo menos 10 caracteres",
        (v) => v.split(" ").length <= 3 || "Demasiados espacios",
      ],
      phoneRules:[
            v => !! v || "El Número de teléfono es obligatorio"  
      ],
      emailRules: [
        (v) => !!v || "Este campo es obligatorio",
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe ser válido'
      ],
      addressRules:[
              v => !!v && v.lenght >=10 || "Dirección muy corta"
      ],
      cityRules:[
              v => !!v || "Este campo es obligatorio"
      ]
    };
  },
  methods: {
    sendForm() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
@import "../scss/_main.scss";

.border {
  border: 1px solid $black;
}
</style>