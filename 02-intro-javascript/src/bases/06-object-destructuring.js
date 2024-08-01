const person = {
    firstname: 'Tony',
    age: 50,
    key: 'IronMan',
  };
  
  console.log(person.firstname);
  console.log(person.age);
  console.log(person.key);
  
  // Extract the keys inside {} from an object
  
  const { age } = person;
  const { firstname: personfirstname } = person;
  console.log(age);
  console.log(personfirstname);
  
  // Default values in function destructuring
  
  const getPerson = ({ key, firstname, age, range = 'Captain' }) => {
    return {
      keyName: key,
      years: age,
      coordinates: {
        lat: 14.3213,
        lng: -12.43243,
      },
    };
  };
  
  // Nested destructuring
  
  const {
    keyName,
    years,
    coordinates: { lat, lng },
  } = getPerson(person);
  
  console.log(keyName, years, lat, lng);
  