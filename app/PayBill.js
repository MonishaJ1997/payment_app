import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import MobileWrapper from "./MobileWrapper";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PayBill() {
  const router = useRouter();
  const [billNumber, setBillNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    if (!billNumber || !amount) return alert("Enter bill number and amount");

    alert(`Paid ₹${amount} for bill ${billNumber}`);

    // Reset after payment
    setBillNumber("");
    setAmount("");
  };


  const handleKeyPress = (digit) => setAmount(prev => prev + digit);
  const handleClear = () => setAmount("");

  return (
    <MobileWrapper>
      <View style={styles.container}>
        <TouchableOpacity style={styles.topBack} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#0F2A44" />
          <Text style={styles.topBackText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Pay Bill</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Bill Number"
          keyboardType="default"
          value={billNumber}
          onChangeText={setBillNumber}
        />

        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amountDisplay}>₹ {amount || "0"}</Text>

        {/* Keypad */}
        <View style={styles.keypad}>
          {["1","2","3","4","5","6","7","8","9","0"].map((d)=>(
            <TouchableOpacity key={d} style={styles.key} onPress={()=>handleKeyPress(d)}>
              <Text style={styles.keyText}>{d}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.key} onPress={handleClear}>
            <Text style={[styles.keyText,{fontSize:18}]}>⌫</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePay}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>


       <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => router.replace("/HomeScreen")}>
                  <Ionicons name="home" size={26} color="#0F2A44" />
                </TouchableOpacity>
      
                <TouchableOpacity onPress={() => router.push("/Wallet")}>
                  <Ionicons name="wallet" size={26} color="#0F2A44" />
                </TouchableOpacity>
      
                
      
                <TouchableOpacity onPress={() => router.push("/Profile")}>
                  <Ionicons name="person-circle" size={26} color="#0F2A44" />
                </TouchableOpacity>
              </View>
           
    </MobileWrapper>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:"#fff"},
  topBack:{flexDirection:"row",alignItems:"center",marginBottom:20},
  topBackText:{fontSize:16,color:"#0F2A44",marginLeft:5},
  title:{fontSize:24,fontWeight:"bold",marginBottom:20},
  input:{borderWidth:1,borderColor:"#ccc",borderRadius:6,padding:12,marginBottom:20},
  amountLabel:{fontSize:16,fontWeight:"500",marginBottom:5},
  amountDisplay:{fontSize:28,fontWeight:"bold",marginBottom:20},
  keypad:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginBottom:20},
  key:{width:"30%",padding:20,marginBottom:15,backgroundColor:"#eee",borderRadius:10,alignItems:"center"},
  keyText:{fontSize:20,fontWeight:"bold"},
  button:{backgroundColor:"#0F2A44",padding:15,borderRadius:8,alignItems:"center",marginBottom:50},
  buttonText:{color:"#fff",fontSize:16,fontWeight:"bold"},
   bottomNav: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: 1, borderColor: "#eee" },
});