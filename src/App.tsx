// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import { useState } from "react";
// import { BsFillCalendarFill } from "react-icons/bs";
// import Like from "./components/Like";

// function App() {
//   let items = ["New York", "London", "San Francisco", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       <>
//         <ListGroup
//           items={items}
//           heading="Cities"
//           onSelectedItem={handleSelectItem}
//         />
//         {alertVisible && (
//           <Alert onClose={() => setAlertVisibility(false)}>My Aler</Alert>
//         )}
//         <Button
//           color="primary"
//           children="My Button"
//           onClick={() => setAlertVisibility(true)}
//         />
//         <BsFillCalendarFill color="red" size={40} />
//         <Like onClick={(cnt) => console.log("Clicked", cnt)} />
//       </>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import GameButton from "./components/GameButton";
import GameNavBar from "./components/GameNavBar";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   setDrink({ ...drink, price: 6 });
  // };

  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });

  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 94112 },
  //   });
  // };

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const handleClick = () => {
  //   // Add
  //   setTags([...tags, "exciting"]);
  //   // Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));
  //   // Update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  //   console.log(tags);
  // };

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const handleClick = () => {
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  // return (
  //   <div>
  //     {/* {drink.price} */}
  //     {/* <button onClick={handleClick}>Click Me!</button> */}
  //     {/* {customer.address.zipCode} */}
  //     {bugs.map((bug) => (
  //       <p key={bug.id}>
  //         {bug.title} {bug.fixed ? "Fixed" : "New"}
  //       </p>
  //     ))}
  //     <button onClick={handleClick}>Click Me!</button>
  //   </div>
  // );

  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  // return (
  //   <div>
  //     <NavBar cartItemsCount={cartItems.length} />
  //     <Cart catrItems={cartItems} onClear={() => setCartItems([])} />
  //   </div>
  // );

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Martin" } });
  // };

  // return (
  //   <>
  //     <div>
  //       <GameNavBar name={game.player.name} />
  //       <GameButton onChange={handleClick} />
  //     </div>
  //   </>
  // );

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        distinctio iusto repellendus doloribus amet sequi itaque modi facere
        adipisci, magni illum unde laboriosam veniam fugit non voluptatum
        beatae. Voluptatem inventore error earum quo repellat perspiciatis
        expedita dolorem, quia consequuntur nobis non accusantium eligendi
        voluptatum ea enim maiores! Minima voluptas id consequuntur adipisci
        consequatur iusto iure praesentium, beatae itaque nobis sapiente eos
        tenetur, dolore laboriosam? Vel praesentium earum at quo. Earum dicta
        omnis, ipsa cumque soluta nihil dolorum pariatur, veniam quam
        voluptatibus eius eveniet reprehenderit atque animi consequatur
        similique totam reiciendis sint accusamus minus. Aliquid nobis, eos
        atque eaque alias accusantium?
      </ExpandableText>
    </div>
  );
};

export default App;
