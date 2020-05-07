<template>
  <div id="country-holiday" v-if="countryHolidays.length > 0">
        <ul>
         <li v-for="holiday of countryHolidays" :key="holiday.name">
            <p>Holiday: {{holiday.name}}</p>
            <p>Description: {{holiday.description}}</p>
            <p>Country:{{holiday.country.name}}, {{holiday.country.id}}</p>
            <p>Date: {{holiday.date.iso}}</p>
            <p>Datetime: {{holiday.date.datetime.year}}-{{holiday.date.datetime.month}}-{{holiday.date.datetime.day}}</p>
            <p>Type: {{holiday.type[0]}}</p>
            <p>Locations: {{holiday.locations}}</p>
            <p>States: {{holiday.states}}</p>
            <hr>
            </li>
        </ul>
     </div>
</template>

<script>
export default {
    props: {
        countryHolidays: {
            type: Array
        }
    }
}
</script>

<style>

</style>