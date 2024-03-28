 // Code your solut
 const drivers=['Ephy','joy','andrew','peter','ephy','elva','epstein']
function findMatching (array,name){
const newDrivers=[]
const nameCase= name.toLowerCase();
 for (let driverName of array){
    const driverNameCase = driverName.toLowerCase();
            if (driverNameCase === nameCase){
        newDrivers.push(driverName)
        }
 }
    return newDrivers
 }
 console.log(findMatching (drivers,'ephy'))
 function fuzzyMatch(array,name){
    const matchDriverName= []
     for (let driverName of array){
       if (driverName.startsWith(name)){
        console.log (driverName) 
        matchDriverName.push(driverName)
       }
    }
    return matchDriverName
}
 console.log(fuzzyMatch(drivers,'ep'))

 
 const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function filter (arrayObject,cb){
    const matching =[]
    for (let item of arrayObject){
        if (cb(item)){
            matching.push(item)
        }
    }
    return matching
 }
  function matchName (arrayObject,name){
    return filter(arrayObject,function(item){ 
    return (item.name=== name)
    })  
}
  console.log(matchName(driver, 'Bobby'))