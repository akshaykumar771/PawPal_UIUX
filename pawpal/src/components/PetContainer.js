import React from "react";
import Filter from "./Filter";
import { withPetsConsumer } from "../context";
import Loading from "./Loading";

function PetContainer({ context }) {
 
  const { loading, pets } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filter pets={pets} />
     
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
