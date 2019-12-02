import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import infoStore from "../../stores/infoStore";

// Component
import SalfaItem from "./SalfaItem";
import CartButton from "../Buttons/CartButton";

const SwalefList = () => {
  const swalefnaList = infoStore.swalef.map(salfa => (
    <SalfaItem salfa={salfa} key={salfa.id} />
  ));
  return (
    <Content>
      <List>{swalefnaList}</List>
    </Content>
  );
};

SwalefList.navigationOptions = {
  title: "بياع حجي",
  headerRight: <CartButton />
};

export default observer(SwalefList);
