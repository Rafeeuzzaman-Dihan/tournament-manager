<script lang="ts" setup>
import { ref } from "vue";
import BlockUI from 'primevue/blockui';
const blocked = ref(false);
</script>

<template>

  <template>
    <div class="card">
      <div class="mb-4">
        <Button label="Block" @click="blocked = true" class="mr-2"></Button>
        <Button label="Unblock" @click="blocked = false"></Button>
      </div>
      <BlockUI :blocked="blocked">
        <Panel header="Basic">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </BlockUI>
    </div>
  </template>
</template>
