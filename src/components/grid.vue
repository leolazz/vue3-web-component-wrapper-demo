<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { ref } from 'vue';

//import 'ag-grid-community/styles/ag-grid.css';
//import 'ag-grid-community/styles/ag-theme.css';

const rowData = ref([
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
  { field: 'electric' },
]);
</script>
<template>
  <div style="height: auto">
    <ag-grid-vue
      style="height: 500px"
      class="ag-theme-alpine"
      :columnDefs="colDefs"
      :modules="modules"
      :rowData="rowData"
    >
    </ag-grid-vue>
  </div>
</template>
