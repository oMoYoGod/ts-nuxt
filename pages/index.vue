<template>
  <section class="container">
    <div>
      {{ message }}
      <b-button></b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BButton from '~/components/BButton.vue';
@Component({
  components: {
    BButton
  }
})
export default class extends Vue {
  message: string = 'Hello!！';
  init() {
    console.log(this);
  }

  mounted() {
    this.init();
  }
}
</script>

<style></style>
