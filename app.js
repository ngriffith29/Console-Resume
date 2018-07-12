console.log('Name: Nathan Griffith'.toUpperCase())
console.log(`Career: Full Stack Engineer`)
console.log(`Description: I am still a student learning the essentials of programming`)
console.log(`My Interests:`)
console.log(`* Distance running`)
console.log(`* Djing on the weekends`)
console.log(`* Photography`)
console.log("My Previous Expirence")
displayPosition('Foghorn Designs,','Graphic designer- print specialist, I worked closley with small businesses to curate and craft the perfect logo to help establish a brand and meet goals. I also ran large format printers and made custom signs by laying down vinyl.')
displayPosition('Applebees','Host','Greeted and served guests to ensure each customer was properly taken care of')
console.log('My skills:')
displaySkill('Graphic Design', true)
displaySkill('Guitar',false)
displaySkill('Javascript',true)

function displayPosition (companyName,jobtitle,description){
   console.log(`*${companyName} ${jobtitle} ${description}`)

}

function displaySkill (skillName,bam){
   
  if (bam === true) {
      console.log(`BAM: ${skillName}`)
  }else{
    console.log(`${skillName}`)
  }
   
}





