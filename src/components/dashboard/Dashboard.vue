<template>
  <div class="q-pa-md">
    <div>
      <span class="table-title text-h6 q-ml-sm q-pb-xs" style="">Regions</span>
      <RegionTable
        class="q-my-md"
        :columns="regionColumns"
        :rows="regionRows"
      />
      <DashboardTable
        class="q-my-md"
        :columns="region2Columns"
        :rows="region2Rows"
      />
    </div>
    <div>
      <span class="table-title text-h6 q-ml-sm q-pb-xs">Countries</span>
      <div class="">
        <DashboardTable
          class="q-my-md"
          :columns="countriesColumns"
          :rows="contriesRows"
        />
        <DashboardTable
          class="q-my-md"
          :columns="noIntegratedColumns"
          :rows="contriesRows"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RegionTable from "./RegionTable.vue";
import DashboardTable from "./DashboardTable.vue";
const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 15,
});
const regionColumns = [
  {
    name: "regions",
    required: true,
    label: "Regions",
    field: "regions",
    align: "left",
  },
  {
    name: "total",
    align: "left",
    label: "Total",
    field: "total",
  },

  {
    name: "officialFree",
    label: "Free",
    align: "left",
    field: "officialFree",
  },
  {
    name: "officialPaid",
    label: "Paid",
    align: "left",
    field: "officialPaid",
  },
  {
    name: "unOfficialFree",
    label: "Free",
    align: "left",
    field: "unOfficialFree",
  },
  {
    name: "unOfficialPaid",
    label: "Paid",
    align: "left",
    field: "unOfficialPaid",
  },
];
const region2Columns = [
  {
    name: "region",
    required: true,
    label: "Regions",
    field: "region",
    align: "left",
  },
  {
    name: "total",
    align: "left",
    label: "Total",
    field: "total",
  },

  {
    name: "markedForIntegration",
    label: "Marked for Integration",
    align: "left",
    field: "markedForIntegration",
  },
  {
    name: "integratedIssues",
    label: "Integrated Issues",
    align: "left",
    field: "integratedIssues",
  },
  {
    name: "integratedDone",
    label: "Integrated Done",
    align: "left",
    field: "integratedDone",
  },
  {
    name: "inProcess",
    label: "In Process",
    align: "left",
    field: "inProcess",
  },
  {
    name: "pending",
    label: "Pending",
    align: "left",
    field: "pending",
  },
];

const countriesColumns = [
  {
    name: "country",
    required: true,
    label: "Countries",
    field: "country",
    align: "left",
  },
  {
    name: "region",
    align: "left",
    label: "Region",
    field: "region",
  },

  {
    name: "gdp",
    label: "GDP",
    align: "left",
    field: "gdp",
  },
  {
    name: "sourceCount",
    label: "Source Count",
    align: "left",
    field: "sourceCount",
  },
  {
    name: "duplicate",
    label: "Duplicate",
    align: "left",
    field: "duplicate",
  },
];

const noIntegratedColumns = [
  {
    name: "country",
    required: true,
    label: "Countries with no integration made",
    field: "country",
    align: "left",
  },
  {
    name: "region",
    align: "left",
    label: "Region",
    field: "region",
  },

  {
    name: "gdp",
    label: "GDP",
    align: "left",
    field: "gdp",
  },
  {
    name: "sourceCount",
    label: "Source Count",
    align: "left",
    field: "sourceCount",
  },
];
const regionRows = [
  {
    region: "LATAM",
    total: "122",
    officialFree: "French Polynesia",
    officialPaid: "Complete",
    unOfficialFree: "Official",
    unOfficialPaid: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    officialFree: "French Polynesia",
    officialPaid: "Complete",
    unOfficialFree: "Official",
    unOfficialPaid: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    officialFree: "French Polynesia",
    officialPaid: "Complete",
    unOfficialFree: "Official",
    unOfficialPaid: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    officialFree: "French Polynesia",
    officialPaid: "Complete",
    unOfficialFree: "Official",
    unOfficialPaid: "AML/P",
  },
];

const region2Rows = [
  {
    region: "LATAM",
    total: "122",
    markedForIntegration: "French Polynesia",
    integratedIssues: "Complete",
    integratedDone: "Official",
    inProcess: "AML/P",
    pending: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    markedForIntegration: "French Polynesia",
    integratedIssues: "Complete",
    integratedDone: "Official",
    inProcess: "AML/P",
    pending: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    markedForIntegration: "French Polynesia",
    integratedIssues: "Complete",
    integratedDone: "Official",
    inProcess: "AML/P",
    pending: "AML/P",
  },
  {
    region: "LATAM",
    total: "122",
    markedForIntegration: "French Polynesia",
    integratedIssues: "Complete",
    integratedDone: "Official",
    inProcess: "AML/P",
    pending: "AML/P",
  },
];

const contriesRows = [
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
  {
    country: "Pakistan",
    region: "French Polynesia",
    gdp: "lorem",
    sourceCount: "Complete",
    duplicate: "3l",
  },
];
</script>
<style scoped>
.table-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--q-text-color);
}
</style>
