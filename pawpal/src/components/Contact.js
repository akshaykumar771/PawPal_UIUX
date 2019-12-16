import React from 'react'

export default function Contact(contact) {
    return (
        <div>
        <Popup modal trigger={<a href="#"></a>}>
              {close => <MyForm uemail="nithinbs18@gmail.com" close={close}/>}
        </Popup>
        </div>
    )
}
