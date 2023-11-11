import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Component7 = memo(() => {
  return (
    <View style={styles.component7}>
      <View style={styles.frame}>
        <Text style={styles.text}>.</Text>
        <View style={styles.frameChild} />
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <Text style={styles.enterOtpNumber}>
              Enter OTP Number sent to Mobile Number
            </Text>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.text1}>+27 697475448</Text>
          </View>
        </View>
        <View style={styles.frame5}>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame7}>
              <View style={styles.frameItem} />
            </View>
          </View>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame7}>
              <View style={styles.frameItem} />
            </View>
          </View>
          <View style={styles.frame}>
            <Text style={styles.text}>.</Text>
            <View style={styles.frame7}>
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
  enterOtpNumber: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  frame3: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorCornflowerblue_100,
    textAlign: "center",
  },
  frame4: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: -206,
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
  frame7: {
    width: 76,
    height: 110,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -110,
  },
  frame5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -188,
  },
  frame1: {
    width: 282,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  component7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default Component7;
