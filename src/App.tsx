import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  let items = ["New York", "London", "San Francisco", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectItem}
        />
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Aler</Alert>
        )}
        <Button
          color="primary"
          children="My Button"
          onClick={() => setAlertVisibility(true)}
        />
        <BsFillCalendarFill color="red" size={40} />
        <Like onClick={() => console.log("Clicked!")} />
      </>
    </div>
  );
}

export default App;
