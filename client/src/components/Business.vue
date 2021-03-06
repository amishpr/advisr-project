<template>
  <div class="business">
    <div class="card">
      <div class="p-grid">
        <div class="p-col-12">
          <h1>{{ this.name }}</h1>
        </div>
        <div class="p-col-12">
          <Chip
            :label="this.category"
            icon="pi pi-tag"
            class="p-m-2"
            style="background-color: #dcd2f0"
          />
          <Chip
            :label="'$' + this.averageCampaignBudget"
            icon="pi pi-money-bill"
            class="p-m-2"
            style="background-color: #dcd2f0"
          />
          <Chip
            :label="this.numberOfCampaigns"
            icon="pi pi-book"
            class="p-m-2"
            style="background-color: #dcd2f0"
          />
        </div>
      </div>
      <div class="p-grid">
        <div class="p-col-6">
          <DataTable
            :value="campaigns"
            selectionMode="single"
            dataKey="id"
            responsiveLayout="scroll"
          >
            <template #header>
              <h3>List of Campaigns</h3>
            </template>
            <template #empty> No campaigns found. </template>
            <Column field="name" header="Name" :sortable="true"></Column>
            <Column field="budget" header="Budget" :sortable="true">
              <template #body="slotProps">
                {{ formatMoney(slotProps.data.budget) }}
              </template>
            </Column>
          </DataTable>
        </div>

        <div class="p-col-6">
          <GMapMap
            :center="location"
            :zoom="20"
            map-type-id="terrain"
            style="height: 100%"
          >
            <GMapCluster>
              <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
            </GMapCluster>
          </GMapMap>
        </div>
      </div>
      <div class="p-grid">
        <div class="p-col-3">
          <Card style="background-color: #c5dcff">
            <template #title>
              <i class="pi pi-book" />
              {{ this.numberOfCampaigns }} Campaigns
            </template>
            <template #footer> Number of Opportunities </template>
          </Card>
        </div>
        <div class="p-col-3">
          <Card style="background-color: #c5f2fb">
            <template #title>
              <i class="pi pi-money-bill" />
              {{ formatMoney(this.averageCampaignBudget) }}
            </template>
            <template #footer> Average Deal Size </template>
          </Card>
        </div>
        <div class="p-col-3">
          <Card style="background-color: #fff0c3">
            <template #title>
              <i class="pi pi-star-o" />
              {{ this.winRate * 100 }}%
            </template>
            <template #footer> Win Rate </template>
          </Card>
        </div>
        <div class="p-col-3">
          <Card style="background-color: #ffe0c7">
            <template #title>
              <i class="pi pi-calendar" />
              {{ this.salesLength }} Days
            </template>
            <template #footer> Average Sales Cycle Length </template>
          </Card>
        </div>
        <div class="p-col-12">
          <Card style="background-color: #c9f2e6">
            <template #title>
              <i class="pi pi-money-bill" />
              {{ formatMoney(this.salesVelocity) }}
            </template>
            <template #footer> Sales Velocity </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessService from "../service/BusinessService";

export default {
  name: "Business",
  data() {
    return {
      businessId: this.$route.params.id,
      businessService: null,
      name: "",
      category: "",
      campaigns: [{ id: 1, name: "", budget: 1 }],
      location: { lat: 0, lng: 0 },
      averageCampaignBudget: 0,
      numberOfCampaigns: 0,
      winRate: 0.25,
      salesLength: 30,
      salesVelocity: 0,
      markers: [{ position: { lat: 51.093048, lng: 6.84212 } }],
    };
  },
  created() {
    this.businessService = new BusinessService();
  },
  mounted() {
    this.businessService.getBusinessById(this.businessId).then((data) => {
      this.name = data.name;
      this.category = data.category;
      this.campaigns = data.campaigns;
      this.location = data.location;
      this.markers[0].position = data.location;
      this.averageCampaignBudget = data.averageCampaignBudget;
      this.numberOfCampaigns = data.numberOfCampaigns.toString();

      if (this.numberOfCampaigns == 0) {
        this.winRate = 0;
        this.salesLength = 0;
        this.salesVelocity = 0;
      } else {
        this.calculateSalesVelocity();
      }
    });
  },
  methods: {
    formatMoney(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);
    },
    calculateSalesVelocity() {
      this.salesVelocity =
        (this.numberOfCampaigns * this.averageCampaignBudget * this.winRate) /
        this.salesLength;
    },
  },
};
</script>
