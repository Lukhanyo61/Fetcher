import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Input } from "@rneui/themed";
import { Button, Icon } from "@ui-kitten/components";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component3 from "./Component3";
import Component15 from "./Component15";
import DontHaveAnAccountCreateA from "./DontHaveAnAccountCreateA";
import Component17 from "./Component17";
import Component18 from "./Component18";
import Component16 from "./Component16";

const Component19 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.component19}>
      <Component3
        component3Position="absolute"
        component3Top="0%"
        component3Left="0%"
        component3Width="100%"
        component3Height="24.95%"
        component3Right="0%"
        component3Bottom="75.05%"
      />
      <Component15 component15Position="unset" />
      <DontHaveAnAccountCreateA
        dontHaveAnAccountCreateAPosition="absolute"
        dontHaveAnAccountCreateAWidth="37.52%"
        dontHaveAnAccountCreateAHeight="2.81%"
        dontHaveAnAccountCreateATop="97.19%"
        dontHaveAnAccountCreateARight="50.23%"
        dontHaveAnAccountCreateABottom="0%"
        dontHaveAnAccountCreateALeft="12.25%"
        onDontHaveAnContainerPress={() =>
          navigation.navigate("IPhone1415ProMax2")
        }
      />
      <Component17
        component17Position="absolute"
        component17Width="59.84%"
        component17Height="2.44%"
        component17Top="52.72%"
        component17Right="38.29%"
        component17Bottom="44.84%"
        component17Left="1.86%"
        onForgotPasswordPress={() => navigation.navigate("IPhone1415ProMax3")}
      />
      <Component18
        devicongoogle={require("../assets/devicongoogle1.png")}
        component18Position="absolute"
        component18Width="61.86%"
        component18Height="33.4%"
        component18Top="60.6%"
        component18Right="38.14%"
        component18Bottom="6%"
        component18Left="0%"
        rectangleViewBackgroundColor="unset"
        component2BackgroundColor="unset"
        component2BorderColor="unset"
      />
      <Component16 component16Position="unset" />
    </View>
  );
});

const styles = StyleSheet.create({
  component15TextInputInput: {
    left: "0%",
    right: "38.29%",
    width: "61.71%",
    height: "10.32%",
    top: "27.58%",
    bottom: "62.1%",
    position: "absolute",
  },
  component2Text: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  component16TextInputInput: {
    left: "0.16%",
    right: "38.14%",
    width: "61.71%",
    height: "10.32%",
    top: "40.34%",
    bottom: "49.34%",
    position: "absolute",
  },
  component19: {
    position: "absolute",
    top: 128,
    left: 16,
    width: 645,
    height: 533,
  },
});

export default Component19;
