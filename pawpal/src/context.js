import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

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
  };
  // getData
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom",
  //       // order: "sys.createdAt"
  //       order: "-fields.price"
  //     });
  //     let rooms = this.formatData(response.items);
  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));

  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.getData();
    let pets  = this.formatData(items);
    let newPets = pets.filter(pet => pet.featured === true);
    let typeDog = pets.filter(pet => pet.type === "Dog");
    let typeCat = pets.filter(pet => pet.type === "Cat");
    let maxAge = Math.max(...pets.map(item => item.age));

    this.setState({
      pets, 
      newPets,
      typeDog,
      typeCat,
      sortedPets: pets,
      loading: false,
      age: maxAge,
      maxAge,
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let pet = { ...item.fields, images, id };
      return pet;
    });
    return tempItems;
  }
  getPet = slug => {
    let tempPets = [...this.state.pets];
    const pet = tempPets.find(pet => pet.slug === slug);
    return pet;
  };
  getPetType = type => {
    let tempPetType = [...this.state.pets];
    const petType = tempPetType.find(pet => pet.type === type);
    return petType;
  }
  handleChange = event => {
    //const value = target.type === "checkbox" ? target.checked : target.value;
    const type = event.target.type;
    const value = event.target.value;
    const name = event.target.name;
    console.log(`this is ${name}, this is value ${value}, this is ${type}`);

    // this.setState(
    //   {
    //     [gender]: value
    //   },
    // );
  };
  filterPets = () =>{
    console.log("Hello filter pets");
  }
//   filterRooms = () => {
//     let {
//       rooms,
//       type,
//       capacity,
//       price,
//       minSize,
//       maxSize,
//       breakfast,
//       pets
//     } = this.state;
//     // all the rooms
//     let tempRooms = [...rooms];
//     // transform value
//     capacity = parseInt(capacity);
//     price = parseInt(price);

//     // filter by type
//     if (type !== "all") {
//       tempRooms = tempRooms.filter(room => room.type === type);
//     }

//     // filter by capacity
//     if (capacity !== 1) {
//       tempRooms = tempRooms.filter(room => room.capacity >= capacity);
//     }
//     // filter by price
//     tempRooms = tempRooms.filter(room => room.price <= price);
//     // filter by size
//     tempRooms = tempRooms.filter(
//       room => room.size >= minSize && room.size <= maxSize
//     );
//     // filter by breakfast
//     if (breakfast) {
//       tempRooms = tempRooms.filter(room => room.breakfast === true);
//     }
//     // filter by pets
//     if (pets) {
//       tempRooms = tempRooms.filter(room => room.pets === true);
//     }
//     // change state
//     this.setState({
//       sortedRooms: tempRooms
//     });
//   };
 render() {
    return (
      <PetContext.Provider
       value={{
         ...this.state,
           getPet: this.getPet,
           getPetType: this.getPetType,
           handleChange: this.handleChange
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
