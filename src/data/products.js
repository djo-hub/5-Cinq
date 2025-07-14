import steam5 from '../data/steam5.png'
import steam10 from '../data/steam10.png'
import steam20 from '../data/steam20.png'
import steam30 from '../data/steam30.png'
import steam50 from '../data/steam50.png'
import ps5 from '../data/ps5.png'
import ps10 from '../data/ps10.png'
import ps25 from '../data/ps25.png'
import ps50 from '../data/ps50.png'
import ps100 from '../data/ps100.png'
import psp3 from '../data/psp3.png'
import psp6 from '../data/psp6.png'
import psp12 from '../data/psp12.png'
import gppc from '../data/gppc.png'
import gpxb from '../data/gpxb.png'
import xb from '../data/xb.png'
import xbgp from '../data/xbgp.png'
import valo from '../data/valo.png'
import valo20 from '../data/valo20.png'
import valo25 from '../data/valo25.png'
import valo50 from '../data/valo50.png'
import gp25 from '../data/gp25.png'
import gp50 from '../data/gp50.png'
import gp100 from '../data/gp100.png'
import as25 from '../data/as25.png'
import as50 from '../data/as50.png'
import ea from '../data/ea.png'

export const products = {
  PC: [
    { id:"1" , name: 'Steam Global Wallet $5',description: 'Steam digital gift card', price: 1150 , image :steam5},
    { id:"2" , name: 'Steam Global Wallet $10', description: 'Steam digital gift card', price: 2250 , image :steam10},
    { id:"3" ,name: 'Steam Global Wallet $20', description: 'Steam digital gift card', price: 4400 , image : steam20},
    { id:"4" , name: 'Steam Global Wallet $30', description: 'Steam digital gift card', price: 6600 , image :steam30},
    { id:"5" , name: 'Steam Global Wallet $50', description: 'Steam digital gift card', price: 10900 , image :steam50},
    { id:"6" , name: 'Valorant €5', description: 'Valorant Points', price: 1400  , image:valo },
    { id:"7" , name: 'Valorant €20', description: 'Valorant Points', price: 5200  , image:valo20 },
    { id:"8" , name: 'Valorant €25', description: 'Valorant Points', price: 6300  , image:valo25 },
    { id:"88" , name: 'Valorant €50', description: 'Valorant Points', price: 12800  , image:valo50 },
    { id:"9" , name: 'Ea Play 12 Months', description: 'Electronic Games subscription ', price: 21500 , image:ea }
  ],
  PlayStation: [
    { id:"10" , name: 'PSN Card $5', description: 'PlayStation Network credit', price: 1150, image:ps5},
    { id:"11" , name: 'PSN Card $10', description: 'PlayStation Network credit', price: 2250 , image:ps10},
    { id:"12" , name: 'PSN Card $25', description: 'PlayStation Network credit', price: 5400 ,  image:ps25},
    { id:"13" , name: 'PSN Card $50', description: 'PlayStation Network credit', price: 10800 ,  image:ps50},
    { id:"14" , name: 'PSN Card $100', description: 'PlayStation Network credit', price: 21500 ,  image:ps100},
    { id:"15" , name: 'PS Plus 3 Month', description: 'PlayStation Plus subscription', price:2250 , image:psp3},
    { id:"16" , name: 'PS Plus 6 Months', description: 'PlayStation Plus subscription', price: 12900 , image:psp6},
    { id:"17" , name: 'PS Plus 12 Months', description: 'PlayStation Plus subscription', price: 21500 , image:psp12}
    
  ],
  Xbox: [
    { id:"18" , name: 'Xbox Gift Card $10', description: 'Xbox Live credit', price: 2250 , image:xb},
    { id:"19" , name: 'Xbox Gift Card $25', description: 'Xbox Live credit', price: 5400 , image:xb},
    { id:"20" , name: 'Xbox Gift Card $50', description: 'Xbox Live credit', price: 10800 ,image:xb},
    { id:"21" , name: 'Xbox Gift Card $100', description: 'Xbox Live credit', price: 21500 ,image:xb},
    { id:"22" , name: 'Xbox Game Pass Ultimate 1 Month', description: 'Xbox Game Pass Ultimate subscription', price: 3300 , image:xbgp},
    { id:"23" , name: 'Xbox Game Pass Ultimate 3 Months', description: 'Xbox Game Pass Ultimate subscription', price: 8600 , image:xbgp},
    { id:"24" , name: 'Xbox Game Pass Ultimate 12 Months', description: 'Xbox Game Pass Ultimate subscription', price: 17200 , image:xbgp},
    { id:"25" , name: 'Xbox Game Pass 3 Months', description: 'Xbox Game Pass subscription', price: 8600 , image:gpxb},
    { id:"26" , name: 'Xbox Game Pass PC 1 Months', description: 'Xbox Game Pass PC subscription', price: 3300 , image:gppc },
    
  ],
  Mobile: [
    { id:"27" , name: 'Google Play $25', description: 'Google Play Store credit', price: 5400 ,image:gp25},
    { id:"28" , name: 'Google Play $50', description: 'Google Play Store credit', price: 10800 ,image:gp50},
    { id:"29" , name: 'Google Play $100', description: 'Google Play Store credit', price: 21500 ,image:gp100},
    { id:"30" ,name: 'App Store $25', description: 'Apple App Store credit', price: 5500 ,image:as25},
    { id:"31" , name: 'App Store $50', description: 'Apple App Store credit', price: 11000 ,image:as50},
  ]
};