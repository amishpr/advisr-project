<template>
  <div class="hello">
    <div class="card">
      <DataTable
        :value="businesses"
        responsiveLayout="scroll"
        selectionMode="single"
        :loading="loading"
        v-model:filters="filters"
        filterDisplay="menu"
        :globalFilterFields="['name']"
      >
        <template #header>
          <div class="p-fluid">
            <div class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Search Business Name"
              />
            </div>
          </div>
        </template>
        <template #empty> No businesses found. </template>
        <template #loading> Loading business data. Please wait. </template>
        <Column field="name" header="Business Name" :sortable="true">
          <template #body="slotProps">
            <Button
              :label="slotProps.data.name"
              @click="goToBusiness(slotProps.data.id)"
              icon="pi pi-link"
              iconPos="right"
            />
          </template>
        </Column>
        <Column field="category" header="Category" :sortable="true"></Column>
        <Column
          field="numberOfCampaigns"
          header="Number of Campaigns"
          :sortable="true"
        ></Column>
        <Column
          field="averageCampaignBudget"
          header="Average Campaign Budget"
          :sortable="true"
        >
          <template #body="slotProps">
            {{ formatMoney(slotProps.data.averageCampaignBudget) }}
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import BusinessService from "../service/BusinessService";
import { FilterMatchMode } from "primevue/api";

export default {
  name: "Table",
  props: {
    msg: String,
  },
  data() {
    return {
      businesses: null,
      businessService: null,
      filters: null,
      loading: true,
    };
  },

  created() {
    this.businessService = new BusinessService();
    this.initFilters();
  },
  mounted() {
    this.businessService.getAllBusinesses().then((data) => {
      this.businesses = data;
      this.loading = false;
    });
  },
  methods: {
    goToBusiness(businessId) {
      this.$router.push({ name: "business", params: { id: businessId } });
    },
    formatMoney(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>
