import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Component6 = memo(() => {
  return (
    <View style={styles.component6}>
      <View style={styles.frame}>
        <Text style={styles.text}>.</Text>
        <View style={styles.frame1}>
          <View style={styles.frameChild} />
          <Text style={styles.viaEmail}>Via Email</Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <Text style={styles.johndoemailcom}>Johndoe@mail.com</Text>
          </View>
          <View style={styles.frame5}>
            <Text style={styles.enterOtpNumber}>
              Enter OTP Number sent to Email
            </Text>
          </View>
        </View>
        <View style={styles.frame6}>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame8}>
              <View style={styles.frameItem} />
            </View>
          </View>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame8}>
              <View style={styles.frameItem} />
            </View>
          </View>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame8}>
              <View style={styles.frameItem} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: FontSize.size_111xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
    width: 44,
    height: 188,
  },
  frameChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue_100,
    borderWidth: 1,
    width: 110,
    height: 79,
    marginBottom: 31,
  },
  viaEmail: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 25,
    height: 15,
    marginBottom: 10,
    marginTop: -25,
  },
  frame1: {
    width: 76,
    height: 110,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -110,
  },
  frame: {
    width: 76,
    height: 188,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  johndoemailcom: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorCornflowerblue_100,
    textAlign: "center",
  },
  frame4: {
    width: 274,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  enterOtpNumber: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  frame5: {
    width: 190,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame3: {
    width: 274,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frameItem: {
    position: "relative",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue_100,
    borderWidth: 1,
    width: 76,
    height: 79,
  },
  frame8: {
    width: 76,
    height: 110,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -110,
  },
  frame6: {
    width: 250,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame2: {
    width: 286,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  component6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default Component6;
