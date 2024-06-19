import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { router } from "expo-router";
import { useToast } from "react-native-toast-notifications";
import PressableButton from "../../Components/Button";
import CountShower from "../../Components/CountShower";
import Header from "../../Components/Header";
import BackgroundImage from "../../Components/BackgroundImage";
import { useColorScheme } from "react-native";
const HomeScreen = () => {
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [day, setDay] = useState("GÜN");
  const [month, setMonth] = useState("AY");
  const [year, setYear] = useState("YIL");
  const colorScheme = useColorScheme();
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
    toast.show("Bir Tarih Seçildi", {
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
          toast.show("Bir hata oluştu lütfen uygulamayı yeniden başlatın", {
            type: "danger",
            placement: "bottom",
            duration: 7000,
            offset: 30,
            animationType: "slide-in",
          });
        });
    } catch (err) {
      toast.show("Lütfen bir tarih seçiniz", {
        type: "warning",
        placement: "bottom",
        duration: 7000,
        offset: 30,
        animationType: "slide-in",
      });
    }
  };

  return (
    <BackgroundImage>
      <Header />
      <View className="flex-10 ">
        <View className="flex-1 justify-end">
          <Text className="text-2xl text-primary text-center font-extrabold pt-4 italic ">
            GÖKYÜZÜNÜN SONSUZ {"\n"} SAHNESİNDE YERİNİZİ BULUN
          </Text>
        </View>
        <View className="flex-6 justify-end box-border">
          <View className="flex-2 pt-10  flex-col  items-center">
            <CountShower countValue={day} />
            <CountShower countValue={month} />
            <CountShower countValue={year} />
          </View>
          <View className="flex-1 gap-3 justify-end pb-8 ">
            <View className="justify-center my-1 items-center">
              <PressableButton
                title="Şanslı Tarihi Seç"
                onClick={showDatePicker}
              />
            </View>
            <View className="justify-center items-center">
              <PressableButton title="Yıldızlara Git" onClick={search} />
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            display="spinner"
            date={new Date("2004-05-30")}
            minimumDate={new Date("1995-06-16")}
            confirmButtonTestID={{
              text: {
                color: "red",
              },
            }}
            maximumDate={
              new Date(
                `${new Date().getFullYear()}-${
                  new Date().getMonth() + 1
                }-${new Date().getDate()}`
              )
            }
            positiveButton={{
              textColor: `${colorScheme == "dark" ? "white" : "black"}`,
            }}
            negativeButton={{
              textColor: `${colorScheme == "dark" ? "white" : "black"}`,
            }}
            isDarkModeEnabled={false}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    </BackgroundImage>
  );
};

export default HomeScreen;
