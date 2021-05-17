import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Listbox from 'primevue/listbox';
import TabMenu from 'primevue/tabmenu';
import Chip from 'primevue/chip';
import Card from 'primevue/card';
import VueGoogleMaps from '@fawmi/vue-google-maps'

import "primevue/resources/themes/bootstrap4-light-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(store);
app.use(router);

// PrimeVue UI
app.use(PrimeVue);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Listbox", Listbox);
app.component("TabMenu", TabMenu);
app.component("Chip", Chip);
app.component("Card", Card);

// GoogleMaps
app.use(VueGoogleMaps, { load: { key: '', }, });

app.mount("#app");
