import axios from"axios"
const INSTANCES=axios.create({baseurl:"https://api.themoviedb.org/3"})
export default INSTANCES