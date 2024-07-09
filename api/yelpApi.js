import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        accept: 'application/json',
      Authorization : 'Bearer yxV1_87C0X5nfxs1X0M6wKntKDJOtawUNoMobXTdNrYhJPzdj5RHMcKUg3rdyyQOazS6mpZLZhhWLC2bUZNvckSHkEhmVu9h9QEINlRolfHLzbUBIMAC5SXYzaaLZnYx',
    },
})
