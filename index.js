const userInputString = prompt(
    "Please enter your favorite fryo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
 
  
  
  const stringArray = userInputString.split(",");
  
  const flavors = Array();
  for (let i = 0; i < stringArray.length; i++) {
    //console.log(stringArray[i]);
    const flavor = stringArray[i];
    flavors.push(flavor);
    //console.log(stringArray[i]);
  }

  const counter = {};

  stringArray.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});
  
  console.log(flavors);
  console.log(counter)