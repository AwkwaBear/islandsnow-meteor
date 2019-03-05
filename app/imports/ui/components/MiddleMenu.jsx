import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu" centered>
          <Container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
                <Dropdown.Item>Aloha Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Bags & Wallets</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Sweatshirts & Jackets</Dropdown.Item>
                <Dropdown.Item>Shorts & Trunks</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Bags & Wallets</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Sweatshirts</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Onesies</Dropdown.Item>
                <Dropdown.Item>Sweatshirts</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>[LIST OF BRANDS HERE]</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
