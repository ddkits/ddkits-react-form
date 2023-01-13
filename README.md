# ddkits-react-form
DDKits React Form is a custom fully component to build a dynamic.
Fully functional form, with required, pagination and fields validation, all in one. Easy use by JSON or an object to pass. 
Conditional and progressive pages and fields, show if needed or hide if another value doesn't equal to another value.
Nice spinner between pages in loading

![DDKits Form Example 1](/assets/images/image1.png)
![DDKits Form Example 2](/assets/images/image2.png)
![DDKits Form Example 3](/assets/images/image3.png)



## Get started

```
npm i -s ddkits-react-form

```


## Options to use

1- Any HTML 5 type 
2- Any name of field, fields names must be unique as each one of them is the main value update
3- Page / Field group / Option components
4- Label 
5- Required if the field is required 
6- Conditional Case for a page or field to show depends on another field or page values


### Example:

```
{
    component: "page",
    label: "General",
    fields: [
    {
        component: "text",
        name: 'firstname',
        label: "First Name",
        type: "text",
        required: true,
    },
    {
        component: "text",
        name: 'lastname',
        label: "Last Name",
        type: "text",
        required: true,
    }
 }

```
### Conditional Example

```
 {
          component: "page",
          label: "If the first name is === sam this page will show",
           conditional: {
             value: "Sam",
             field:
               "first_name"
           },
          fields: [
            {
                component: "text",
                type: 'text',
                name: 'howdidyoufindus',
                label: 'How did you hear about us? ex. Google, Yahoo, Joe D., client, ...',
                required: true,
            },
            {
                component: "text",
                type: 'textarea',
                name: 'message',
                label: 'Tell us about Google experience',
                required: false,
                 conditional: {
                    value: "Google",
                    field:
                    "howdidyoufindus"
                },
            }
          ]
        },

```


## Example of usage

```
import './App.css';
import { Form } from 'ddkits-react-form'
import { useCallback, useState } from 'react';

function App() {
  const [message, setmessage] = useState('')
  const thisActionCallback = useCallback(
    
    async (values) => {
      console.log(values)
      setmessage('Submitted Successfuly. Data in console..')
    }
  )
  const formData = [
      {
        component: "page",
        label: "General",
        fields: [
          {
              component: "text",
              name: 'firstname',
              label: "First Name",
              type: "text",
              required: true,
          },
          {
              component: "text",
              name: 'lastname',
              label: "Last Name",
              type: "text",
              required: true,
          },
          {
            component: "text",
            name: 'email',
            label: "Email",
            type: "email",
            required: true,
          },
          {
            component: "text",
            name: 'phone',
            label: "Phone",
            type: "text",
            required: true,
          }
        ]
      },
      {
        component: "page",
        label: "Location - Address",
        fields: [
          {
              component: "text",
              type: 'text',
              name: 'zipcode',
              label: 'Zip-code',
              required: true,
          },
          {
              component: "text",
              type: 'text',
              name: 'state',
              label: 'State',
              required: true,
          },
          {
              component: "text",
              type: 'text',
              name: 'address',
              label: 'Address, ex. xxxx street',
              required: true,
          },
          {
              component: "text",
              type: 'text',
              name: 'apt',
              label: 'Apartment # ex. 1234',
              required: false,
          }
        ]
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
              type: 'text',
              name: 'howdidyoufindus',
              label: 'How did you hear about us? ex. Google, Yahoo, Joe D., client, ...',
              required: false,
          },
          {
              component: "text",
              type: 'textarea',
              name: 'message',
              label: 'Tell us more about the project',
              required: false,
          }
        ]
      },
      {
        component: "page",
        label: "Final Comment",
        fields: [
          {
            component: "text",
            name: 'comment',
            type: "textarea",
            required: false,
          }
        ]
      }
    ];
  return (
    <div className="App">
      <header className="App-header">
      {message !== '' ? <div className="alert alert-success alert-dismissible dismissible">{message}</div>
        : <Form formData={formData} thisAction={thisActionCallback} btntext={'Testing DDKits'} />}
      </header>
    </div>
  );
}

export default App;


```


Powered By:
www.reallexi.com
ReaLexi | The Real Word
