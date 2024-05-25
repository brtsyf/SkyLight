import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { router } from "expo-router";
import { useToast } from "react-native-toast-notifications";
import PressableButton from "../Components/Button";
import CountShower from "../Components/CountShower";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [day, setDay] = useState("DAY");
  const [month, setMonth] = useState("MONTH");
  const [year, setYear] = useState("YEAR");
  const toast = useToast();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
    console.log(date.getDate(), date.getFullYear(), date.getMonth() + 1);
    toast.show("Date a selected", {
      type: "success",
      placement: "bottom",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
    hideDatePicker();
  };
  const search = async () => {
    try {
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=7DChkcSwLmLU8Q5pHEOEZIGnW380N4QlEWeGBdCj&date=${
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()
        }`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.code) {
            router.push({ pathname: "/details", params: data });
          } else {
            toast.show(data.msg, {
              type: "danger",
              placement: "bottom",
              duration: 5000,
              offset: 30,
              animationType: "slide-in",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.show("An error has occurred please restart the application", {
            type: "danger",
            placement: "bottom",
            duration: 7000,
            offset: 30,
            animationType: "slide-in",
          });
        });
    } catch (e) {
      toast.show("Please choose a date", {
        type: "warning",
        placement: "bottom",
        duration: 7000,
        offset: 30,
        animationType: "slide-in",
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View className="flex-1">
          <View className="flex-1 justify-end">
            <Text className="text-2xl text-white text-center font-extrabold italic py-2">
              FIND YOUR PLACE ON THE {"\n"} INFINITE STAGE OF THE SKY
            </Text>
          </View>
          <View className="flex-5 justify-end box-border">
            <View className="flex-1 flex-col pb-2 items-center">
              <CountShower countValue={day} />
              <CountShower countValue={month} />
              <CountShower countValue={year} />
            </View>
            <View className="gap-4 justify-end pb-20">
              <View className="justify-center items-center">
                <PressableButton
                  title="Select a Date"
                  onClick={showDatePicker}
                />
              </View>
              <View className="justify-center items-center">
                <PressableButton title="SEARCH" onClick={search} />
              </View>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
