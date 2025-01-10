import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Co-Collab</Text>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            source="apple"
            color={styles.buttonText.color}
            size={20}
          />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            source="google"
            color={styles.buttonText.color}
            size={20}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton}>
        <View style={styles.buttonContent}>
          <Icon
            source="at"
            color={styles.emailButtonText.color}
            size={20}
          />
          <Text style={styles.emailButtonText}>Sign up with Email</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{color: "gray"}}>
          Already have an account?{" "}
          <Text style={styles.buttonText}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 38,
    paddingBottom: 40,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#7899d4",
    padding: 20,
    borderRadius: 40,
    marginBottom: 20,
    width: 250,
  },
  emailButton: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 40,
    marginBottom: 20,
    width: 250,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#080795",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  emailButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
});

export default Index;
