import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful";
const PetContext = React.createContext();
class PetsProvider extends Component {
  state = {
    pets: [],
    sortedPets: [],
    newPets: [],
    loading: true,
    type: "all",
    age: "0",
    minAge: 0,
    maxAge: 0,
    gender: "all",
    breakfast: false,
    typeDog: [],
    typeCat: [],
    flag1: false,
    flag2: false,
    dogflag: false
  };
  //------------------contentful----------
     getData = async () => {
       try {
         let response = await Client.getEntries({
           content_type: "pawpal1",
           // order: "sys.createdAt"
           order: "-fields.age"
         });
       let pets = this.formatData(response.items);
       let newPets = pets.filter(pet => pet.featured === true);
       let typeDog = pets.filter(pet => pet.type === "Dog");
       let typeCat = pets.filter(pet => pet.type === "Cat");
       let maxAge = Math.max(...pets.map(item => item.age));
       let minAge = Math.min(...pets.map(item => item.age));
       this.setState({
         pets, 
         newPets,
         typeDog,
         typeCat,
         sortedPets: pets,
         loading: false,
         age: maxAge,
         maxAge,
         minAge,
       });
       } catch (error) {
         console.log(error);
       }
     };
     componentDidMount() {
       this.getData();
     }
  //------------------End of contentful----------

  //----------------Local Data------------------
    // componentDidMount() {
    //    let pets  = this.formatData(items);
    //    let newPets = pets.filter(pet => pet.featured === true);
    //    let typeDog = pets.filter(pet => pet.type === "Dog");
    //    let typeCat = pets.filter(pet => pet.type === "Cat");
    //    let maxAge = Math.max(...pets.map(item => item.age));
    //    let minAge = Math.min(...pets.map(item => item.age));
    //  this.setState({
    //      pets, 
    //      newPets,
    //      typeDog,
    //      typeCat,
    //      sortedPets: pets,
    //      loading: false,
    //      age: maxAge,
    //      maxAge,
    //      minAge,
    //    });
    //  }
//----------------End of Local Data------------------

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let pet = { ...item.fields, images, id };
      return pet;
    });
    return tempItems;
  }
  getPet = id => {
    let tempPets = [...this.state.pets];
    const pet = tempPets.find(pet => pet.id === id);
    return pet;
  };

  getPetType = type => {
    let tempPetType = [...this.state.pets];
    const petType = tempPetType.find(pet => pet.type === type);
    return petType;
  }
  refreshState = () => {
    let {
      pets,
      maxAge
    } = this.state;
    this.setState(
      {
        gender: "all",
        age: maxAge
      });
      let typeDogTemp = pets.filter(pet => pet.type === "Dog");
      let typeCatTemp = pets.filter(pet => pet.type === "Cat");
      this.setState({
       typeDog: typeDogTemp,
       typeCat: typeCatTemp
      });
  }
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(
       {
         [name]: value
       },
       this.filterPets   
     );
  };
   setFlag1 = () => {
    this.setState(
      {
        flag1: true
      }  
    );
   }
   setFlag2 = () => {
    this.setState(
      {
        flag2: true
      }  
    );
    
   }
   unsetFlag1 = () => {
    this.setState(
      {
        flag1: false
      }  
    );
   }
   unsetFlag2 = () => {
    this.setState(
      {
        flag2: false
      }  
    );
   }

   setDogFlag = () => {
    this.setState(
      {
        dogflag: true
      }  
    );   
   }
   unsetDogFlag = () => {
    this.setState(
      {
        dogflag: false
      }  
    );
   } 
   filterPets = () => {
     let {
       pets,
       gender,
       age
     } = this.state;
      let tempPets = [...pets];
      if (gender !== "all") {
       tempPets = tempPets.filter(pet => pet.gender === gender);
      }
     tempPets = tempPets.filter(pet => pet.age <= age);
     let typeDogTemp = tempPets.filter(pet => pet.type === "Dog");
     let typeCatTemp = tempPets.filter(pet => pet.type === "Cat");
      this.setState({
       typeDog: typeDogTemp,
       typeCat: typeCatTemp
      });
   };
 render() {
    return (
      <PetContext.Provider
       value={{
         ...this.state,
           getPet: this.getPet,
           getPetType: this.getPetType,
           handleChange: this.handleChange,
           refreshState: this.refreshState,
           setFlag1: this.setFlag1,
           setFlag2: this.setFlag2,
           unsetFlag1: this.unsetFlag1,
           unsetFlag2: this.unsetFlag2,
           unsetDogFlag: this.unsetDogFlag,
           setDogFlag: this.setDogFlag
         }}
       >
         {this.props.children}
       </PetContext.Provider>
     );
   }
}

const PetsConsumer = PetContext.Consumer;
export function withPetsConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PetsConsumer>
        {value => <Component {...props} context={value} />}
      </PetsConsumer>
    );
  };
}

export { PetsProvider, PetsConsumer, PetContext };
