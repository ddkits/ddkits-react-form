import "./App.css";
import { Form } from "./lib";
import { useCallback, useState } from "react";

function App() {
  const [message, setmessage] = useState("");
  const thisActionCallback = useCallback(async (values) => {
    console.log(values);
    setmessage("Submitted Successfuly. Data in console..");
  });
  const formData = [
    {
      component: "page",
      label: "General",
      fields: [
        {
          component: "text",
          name: "firstname",
          label: "First Name",
          type: "text",
          required: true,
        },
        {
          component: "text",
          name: "lastname",
          label: "Last Name",
          type: "text",
          required: true,
        },
        {
          component: "text",
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          component: "text",
          name: "phone",
          label: "Phone",
          type: "text",
          required: true,
        },
      ],
    },
    {
      component: "page",
      label: "Location - Address",
      fields: [
        {
          component: "text",
          type: "text",
          name: "zipcode",
          label: "Zip-code",
          required: true,
        },
        {
          component: "text",
          type: "text",
          name: "state",
          label: "State",
          required: true,
        },
        {
          component: "text",
          type: "text",
          name: "address",
          label: "Address, ex. xxxx street",
          required: true,
        },
        {
          component: "text",
          type: "text",
          name: "apt",
          label: "Apartment # ex. 1234",
          required: false,
        },
      ],
    },
    {
      component: "page",
      label: "How can we help!",
      //   conditional: {
      //     value: "one",
      //     field:
      //       "first_name"
      //   },
      fields: [
        {
          component: "text",
          type: "text",
          name: "howdidyoufindus",
          label:
            "How did you hear about us? ex. Google, Yahoo, Joe D., client, ...",
          required: false,
        },
        {
          component: "text",
          type: "textarea",
          name: "message",
          label: "Tell us more about the project",
          required: false,
        },
      ],
    },
    {
      component: "page",
      label: "Final Comment",
      fields: [
        {
          component: "text",
          name: "comment",
          type: "textarea",
          required: false,
        },
      ],
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {message !== "" ? (
          <div className="alert alert-success alert-dismissible dismissible">
            {message}
          </div>
        ) : (
          <Form
            formData={formData}
            thisAction={thisActionCallback}
            btntext={"Testing DDKits"}
          />
        )}
      </header>
    </div>
  );
}

export default App;
