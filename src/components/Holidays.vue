<template>
  <div id="holidays">
    <label for="countries"> Choose a country: </label>
    <select id="countries" v-model="currentCountry" @change="changeRoute">
      <option value=""></option>
      <option v-for="country in this.$store.state.countries" :key="country.country" :value='country'>{{country.country}}</option>
    </select>
     <div id="country-holiday" v-if="currentCountry">
        <ul>
         <li v-for="holiday of holidays" :key="holiday.name">
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      currentCountry: null,
      holidays:[]
    }
  },
  props:{
    someValueToPass: String
  },
  beforeMount(){
    this.setTitle()
  },
  methods:{
    setTitle(){
      
      document.title = `Holidays`
      console.log(this.someValueToPass)
    },
    getCountries(){
      console.log(this.$store.state.countries)
    },
    async getHolidays(countryCode){
      let date = new Date().getFullYear()
      this.holidays = []
      try{
        const data = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=de7eee7f32d4660a5a14cff44dbbad0dec117a15&country=${countryCode}&year=${date}`) 
        
        for(const holiday of data['data']['response']['holidays']){
          this.holidays.push(holiday)
        }
      } catch(error){
        alert(`Can't find country holidays`)
      }

    },
    changeRoute(){
      if(this.currentCountry){
        this.$router.push({path:'/holidays/' + this.currentCountry.country})
        this.getHolidays(this.currentCountry.shortName)
      } else{
        this.$router.push({path:'/holidays/'})
      }
      
    }
  }
}
</script>

<style>
#holidays {
  margin-top: 20px;
}
</style>