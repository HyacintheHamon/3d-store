import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Feather } from "@expo/vector-icons";
import { Object } from "./Object";

const { width } = Dimensions.get("window");

const ORIGINAL_BUTTON_WIDTH = width - 100;
const BUTTON_SIZE = 50;

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.navContainer}>
        <View style={styles.navButton}>
          <FontAwesome5 size={20} color="#000" name="chevron-left" />
        </View>
        <View style={styles.navButton}>
          <Feather name="shopping-bag" size={23} color="black" />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.flex}
      >
        <LinearGradient
          colors={["#F4F4F4", "#FFF"]}
          style={styles.imageContainer}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={styles.image} />
        </LinearGradient>
        <View style={styles.objectContainer}>
          <Object />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            Air Max 90 Trainers - White Hyper Pink Black College Grey
          </Text>
          <Text style={styles.description}>
            Iconic 90's silhouette the Air Max 90 is an essential for any Nike
            collection. This version sees a white, hyper pink, black and grey
            colourway. Constructed from a mix of leather, synthetic and textile
            uppers with pops of pastel colours. Featuring classic Air Max
            branding, mini Swoosh to the toe, padded collar, foam midsole,
            sitting on a rubber Waffle outsole with a visible Max air unit.
          </Text>
          <Text style={styles.description}>
            - Upper Material: Mixed Material
          </Text>
          <Text style={styles.description}>- Lining: Textile</Text>
          <Text style={styles.description}>- Sole: Rubber</Text>
          <Text style={styles.description}>- Fastening: Lace Up</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View>
          <View style={styles.divider} />
          <View style={styles.priceRow}>
            <Text style={styles.priceKey}>Was: </Text>
            <Text style={styles.priceOld}>$ 350</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceKey}>Price: </Text>
            <Text style={styles.price}>$ 199</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonLabel}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  navContainer: {
    top: 60,
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  navButton: {
    height: 44,
    width: 44,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  imageContainer: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    height: 300,
    width: "100%",
  },
  objectContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 390,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#8a8a8a",
    marginBottom: 10,
    opacity: 0.2,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2b2b2b",
    marginBottom: 10,
  },
  description: {
    color: "#454545",
    fontSize: 14,
    marginVertical: 5,
  },
  priceKey: {
    color: "#454545",
    width: 40,
  },
  priceContainer: {
    marginLeft: 20,
    marginTop: 30,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  priceOld: {
    color: "#595959",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  price: {
    color: "#454545",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: BUTTON_SIZE / 2,
    width: ORIGINAL_BUTTON_WIDTH,
    height: BUTTON_SIZE,
    alignSelf: "center",
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonLabel: {
    color: "white",
    width: ORIGINAL_BUTTON_WIDTH,
    textAlign: "center",
  },
  cartItemBall: {
    position: "absolute",
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: "#000",
  },
});
