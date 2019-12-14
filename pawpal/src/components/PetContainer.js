import React from "react";
<<<<<<< HEAD
import PetFilter from "./Petfilter";
=======
import DogFilter from "./DogFilter";
>>>>>>> d9c9496484370c4455f2b29ce7bcb65a3d04aa6f
import PetList from "./PetList";
import Pets from "../pages/Pets"
import { withPetsConsumer, PetsConsumer } from "../context";
import Loading from "./Loading";

function PetContainer({ context }) {
 
  const { loading, sortedPets, pets } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <DogFilter pets={pets} />
     
    </>
  );
 
  
}

export default withPetsConsumer(PetContainer);


// //-----------------------------
// //Do not uncomment below lines
// //----------------------------
// // import React from "react";
// // import RoomsFilter from "./RoomFilter";
// // import RoomsList from "./RoomList";
// // import { RoomConsumer } from "../context";
// // import Loading from "./Loading";
// // export default function RoomContainer() {
// //   return (
// //     <RoomConsumer>
// //       {value => {
// //         const { loading, sortedRooms, rooms } = value;
// //         if (loading) {
// //           return <Loading />;
// //         }
// //         return (
// //           <div>
// //             Hello Froms Rooms Container
// //             <RoomsFilter rooms={rooms} />
// //             <RoomsList rooms={sortedRooms} />
// //           </div>
// //         );
// //       }}
// //     </RoomConsumer>
// //   );
// // }
