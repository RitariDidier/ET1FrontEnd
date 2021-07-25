<template>
  <v-responsive
    class="align-center mx-auto"
    max-width="750"
    height="100%"
    width="100%"
  >
    <v-card
      class="mt-0"
      outlined
      rounded
      height="86vh"
    >
      <v-container
        fluid
        class="fill-height px-4 py-16"
      >
        <v-row
          class="py-15"
          align="center"
          justify="center"
        >
          <div
            class="mx-auto"
            max-width="250"
            height="100%"
            width="100%"
          >
            <base-img
              :src="require(`@/assets/BusesMidy.png`)"
              fill
              max-width="150"
              width="100%"
            />
            <base-img
              :src="require(`@/assets/icon1.png`)"
              fill
              max-width="150"
              width="100%"
            />
            <base-body>
              Vuelve con nosotros
            </base-body>
          </div>
          <v-form
            class="px-15"
          >
            <v-text-field
              type="email"
              label="E-mail"
              required
              solo
              append-icon="mdi-email"
            />
            <v-btn
              class="primary"
              href="#"
              style="text-decoration: none;"
              to="/login"
            >
              Recuperar Contraseña
            </v-btn>
          </v-form>
        </v-row>
      </v-container>
    </v-card>
  </v-responsive>
</template>

<script>
  export default {
    name: 'RecoverForm',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
