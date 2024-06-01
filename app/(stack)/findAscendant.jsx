import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../../Components/DropDown";
import PressableButton from "../../Components/Button";
import { useToast } from "react-native-toast-notifications";
import Loading from "../../Components/Loading";

const dateDay = [
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "28",
    value: 28,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "31",
    value: 31,
  },
  {
    lable: "30",
    value: 30,
  },
];

const dateMonth = [
  {
    lable: "Ocak",
    value: "Ocak",
  },
  {
    lable: "Şubat",
    value: "Şubat",
  },
  {
    lable: "Mart",
    value: "Mart",
  },
  {
    lable: "Nisan",
    value: "Nisan",
  },
  {
    lable: "Mayıs",
    value: "Mayıs",
  },
  {
    lable: "Haziran",
    value: "Haziran",
  },
  {
    lable: "Temmuz",
    value: "Temmuz",
  },
  {
    lable: "Ağustos",
    value: "Ağustos",
  },
  {
    lable: "Eylül",
    value: "Eylül",
  },
  {
    lable: "Ekim",
    value: "Ekim",
  },
  {
    lable: "Kasım",
    value: "Kasım",
  },
  {
    lable: "Aralık",
    value: "Aralık",
  },
];
const dateYear = [
  {
    lable: "1995",
    value: 1995,
  },
  {
    lable: "1996",
    value: 1996,
  },
  {
    lable: "1997",
    value: 1997,
  },
  {
    lable: "1998",
    value: 1998,
  },
  {
    lable: "1999",
    value: 1999,
  },
  {
    lable: "2000",
    value: 2000,
  },
  {
    lable: "2001",
    value: 2001,
  },
  {
    lable: "2002",
    value: 2002,
  },
  {
    lable: "2003",
    value: 2003,
  },
  {
    lable: "2004",
    value: 2004,
  },
  {
    lable: "2005",
    value: 2005,
  },
  {
    lable: "2006",
    value: 2006,
  },
  {
    lable: "2007",
    value: 2007,
  },
  {
    lable: "2008",
    value: 2008,
  },
  {
    lable: "2009",
    value: 2009,
  },
  {
    lable: "2010",
    value: 2010,
  },
  {
    lable: "2011",
    value: 2011,
  },
  {
    lable: "2012",
    value: 2012,
  },
  {
    lable: "2013",
    value: 2013,
  },
  {
    lable: "2014",
    value: 2014,
  },
  {
    lable: "2015",
    value: 2015,
  },
  {
    lable: "2016",
    value: 2016,
  },
  {
    lable: "2017",
    value: 2017,
  },
  {
    lable: "2018",
    value: 2018,
  },
  {
    lable: "2019",
    value: 2019,
  },
  {
    lable: "2020",
    value: 2020,
  },
  {
    lable: "2021",
    value: 2021,
  },
  {
    lable: "2022",
    value: 2022,
  },
  {
    lable: "2023",
    value: 2023,
  },
  {
    lable: "2024",
    value: 2024,
  },
];
const FindAscendant = () => {
  const [day, setDay] = useState(null);
  const [many, setMany] = useState([]);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [horoscope, setHoroscope] = useState(null);
  const [ascendant, setAscendant] = useState(null);
  const toast = useToast();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    console.log(year);
    console.log(typeof day);
  }, [year, day]);
  useEffect(() => {
    console.log(many);
    if (month) {
      setMany([]);
      for (
        let i = 1;
        i <=
        dateDay[dateMonth.findIndex((item) => item?.lable == month)]?.lable;
        i++
      ) {
        setMany((prev) => [
          ...prev,
          { lable: i.toString(), value: i.toString() },
        ]);
      }
    }
  }, [month]);

  useEffect(() => {
    if (horoscope) {
      findAscendant(horoscope, month, day);
    }
  }, [horoscope]);

  const findHoroscope = (month, day) => {
    if (month && day && year) {
      try {
        if (
          (month == "Aralık" && day >= 22) ||
          (month == "Ocak" && day <= 20)
        ) {
          setHoroscope("Oğlak");
          console.log(horoscope);
        } else if (
          (month == "Ocak" && day >= 21) ||
          (month == "Şubat" && day <= 19)
        ) {
          setHoroscope("Kova");
        } else if (
          (month == "Şubat" && day >= 20) ||
          (month == "Mart" && day <= 20)
        ) {
          setHoroscope("Balık");
        } else if (
          (month == "Mart" && day >= 21) ||
          (month == "Nisan" && day <= 20)
        ) {
          setHoroscope("Koç");
        } else if (
          (month == "Nisan" && day >= 21) ||
          (month == "Mayıs" && day <= 20)
        ) {
          setHoroscope("Boğa");
        } else if (
          (month == "Mayıs" && day >= 21) ||
          (month == "Haziran" && day <= 20)
        ) {
          setHoroscope("İkizler");
        } else if (
          (month == "Haziran" && day >= 21) ||
          (month == "Temmuz" && day <= 22)
        ) {
          setHoroscope("Yengeç");
        } else if (
          (month == "Temmuz" && day >= 23) ||
          (month == "Ağustos" && day <= 22)
        ) {
          setHoroscope("Aslan");
        } else if (
          (month == "Ağustos" && day >= 23) ||
          (month == "Eylül" && day <= 22)
        ) {
          setHoroscope("Başak");
        } else if (
          (month == "Eylül" && day >= 23) ||
          (month == "Ekim" && day <= 22)
        ) {
          setHoroscope("Terazi");
        } else if (
          (month == "Ekim" && day >= 23) ||
          (month == "Kasım" && day <= 22)
        ) {
          setHoroscope("Akrep");
        } else if (
          (month == "Kasım" && day >= 23) ||
          (month == "Aralık" && day <= 21)
        ) {
          setHoroscope("Yay");
        }
      } catch (e) {
        toast.show("A problem occurred, restart the application", {
          type: "danger",
          placement: "bottom",
          duration: 3000,
          offset: 30,
          animationType: "slide-in",
        });
      }
    } else {
      toast.show("Please select a options", {
        type: "warning",
        placement: "bottom",
        duration: 3000,
        offset: 30,
        animationType: "slide-in",
      });
    }
  };

  const findAscendant = (horos, month, day) => {
    console.log(horos, month, day);
    switch (horos) {
      case "Oğlak":
        if (
          (month == "Aralık" && day >= 21) ||
          (month == "Aralık" && day <= 31)
        ) {
          setAscendant("Balık");
          break;
        } else if (
          (month == "Ocak" && day >= 1) ||
          (month == "Ocak" && day <= 11)
        ) {
          setAscendant("Başak");
          break;
        } else if (
          (month == "Ocak" && day >= 11) ||
          (month == "Ocak" && day <= 20)
        ) {
          setAscendant("Terazi");
          break;
        }
      case "Kova":
        if ((month == "Ocak" && day >= 21) || (month == "Ocak" && day <= 31)) {
          setAscendant("Oğlak");
          break;
        } else if (
          (month == "Şubat" && day >= 1) ||
          (month == "Şubat" && day <= 11)
        ) {
          setAscendant("Akrep");
          break;
        } else if (
          (month == "Şubat" && day >= 11) ||
          (month == "Şubat" && day <= 20)
        ) {
          setAscendant("Balık");
          break;
        }
      case "Balık":
        if (
          (month == "Şubat" && day >= 21) ||
          (month == "Şubat" && day <= 31)
        ) {
          setAscendant("Kova");
          break;
        } else if (
          (month == "Mart" && day >= 1) ||
          (month == "Mart" && day <= 11)
        ) {
          setAscendant("Akrep");
          break;
        } else if (
          (month == "Mart" && day >= 11) ||
          (month == "Mart" && day <= 20)
        ) {
          setAscendant("Oğlak");
          break;
        }
      case "Koç":
        if ((month == "Mart" && day >= 21) || (month == "Mart" && day <= 31)) {
          setAscendant("Akrep");
          break;
        } else if (
          (month == "Nisan" && day >= 1) ||
          (month == "Nisan" && day <= 11)
        ) {
          setAscendant("Koç");
          break;
        } else if (
          (month == "Nisan" && day >= 11) ||
          (month == "Nisan" && day <= 20)
        ) {
          setAscendant("Yay");
          break;
        }
      case "Boğa":
        if (
          (month == "Nisan" && day >= 20) ||
          (month == "Nisan" && day <= 31)
        ) {
          setAscendant("Terazi");
          break;
        } else if (
          (month == "Mayıs" && day >= 1) ||
          (month == "Mayıs" && day <= 11)
        ) {
          setAscendant("Koç");
          break;
        } else if (
          (month == "Mayıs" && day >= 11) ||
          (month == "Mayıs" && day <= 20)
        ) {
          setAscendant("İkizler");
          break;
        }
      case "İkizler":
        if (
          (month == "Mayıs" && day >= 21) ||
          (month == "Mayıs" && day <= 31)
        ) {
          setAscendant("Başak");
          break;
        } else if (
          (month == "Haziran" && day >= 1) ||
          (month == "Haziran" && day <= 11)
        ) {
          setAscendant("Akrep");
          break;
        } else if (
          (month == "Haziran" && day >= 11) ||
          (month == "Haziran" && day <= 20)
        ) {
          setAscendant("Kova");
          break;
        }
      case "Yengeç":
        if (
          (month == "Haziran" && day >= 21) ||
          (month == "Haziran" && day <= 31)
        ) {
          setAscendant("Aslan");
          break;
        } else if (
          (month == "Temmuz" && day >= 1) ||
          (month == "Temmuz" && day <= 11)
        ) {
          setAscendant("Oğlak");
          break;
        } else if (
          (month == "Temmuz" && day >= 11) ||
          (month == "Temmuz" && day <= 20)
        ) {
          setAscendant("Yengeç");
          break;
        }
      case "Aslan":
        if (
          (month == "Temmuz" && day >= 21) ||
          (month == "Temmuz" && day <= 31)
        ) {
          setAscendant("Aslan");
          break;
        } else if (
          (month == "Ağustos" && day >= 1) ||
          (month == "Ağustos" && day <= 11)
        ) {
          setAscendant("Balık");
          break;
        } else if (
          (month == "Ağustos" && day >= 11) ||
          (month == "Ağustos" && day <= 20)
        ) {
          setAscendant("Yengeç");
          break;
        }
      case "Başak":
        if (
          (month == "Ağustos" && day >= 21) ||
          (month == "Ağustos" && day <= 31)
        ) {
          setAscendant("İkizler");
          break;
        } else if (
          (month == "Eylül" && day >= 1) ||
          (month == "Eylül" && day <= 11)
        ) {
          setAscendant("Terazi");
          break;
        } else if (
          (month == "Eylül" && day >= 11) ||
          (month == "Eylül" && day <= 20)
        ) {
          setAscendant("Balık");
          break;
        }
      case "Terazi":
        if (
          (month == "Eylül" && day >= 21) ||
          (month == "Eylül" && day <= 31)
        ) {
          setAscendant("Boğa");
          break;
        } else if (
          (month == "Ekim" && day >= 1) ||
          (month == "Ekim" && day <= 11)
        ) {
          setAscendant("Başak");
          break;
        } else if (
          (month == "Ekim" && day >= 11) ||
          (month == "Ekim" && day <= 20)
        ) {
          setAscendant("Kova");
          break;
        }
      case "Akrep":
        if ((month == "Ekim" && day >= 21) || (month == "Ekim" && day <= 31)) {
          setAscendant("Koç");
          break;
        } else if (
          (month == "Kasım" && day >= 1) ||
          (month == "Kasım" && day <= 11)
        ) {
          setAscendant("Yengeç");
          break;
        } else if (
          (month == "Kasım" && day >= 11) ||
          (month == "Kasım" && day <= 20)
        ) {
          setAscendant("Koç");
          break;
        }
      case "Yay":
        if (
          (month == "Kasım" && day >= 21) ||
          (month == "Kasım" && day <= 31)
        ) {
          setAscendant("Yay");
          break;
        } else if (
          (month == "Aralık" && day >= 1) ||
          (month == "Aralık" && day <= 11)
        ) {
          setAscendant("Kova");
          break;
        } else if (
          (month == "Aralık" && day >= 11) ||
          (month == "Aralık" && day <= 20)
        ) {
          setAscendant("Terazi");
          break;
        }
      default:
        toast.show("Geçersiz bir giriş yaptınız", {
          type: "warning",
          placement: "bottom",
          duration: 3000,
          offset: 30,
          animationType: "slide-in",
        });
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ flex: 1 }}
      >
        <View className="flex-1">
          <Text className="text-2xl text-center pt-3 text-white font-extrabold italic">
            Opsiyonları Seçmeye Başlayın
          </Text>
        </View>
        <View className="flex-4 ">
          <View className="flex-1 flex-row  ">
            <DropDown setChange={setYear} items={dateYear} />
            {year ? <DropDown setChange={setMonth} items={dateMonth} /> : ""}
          </View>
          {month && year ? (
            <View className="flex-1 items-center flex-row ">
              <DropDown setChange={setDay} items={many} />
            </View>
          ) : (
            ""
          )}
          <View className="items-center my-2">
            <PressableButton
              title="Araştır"
              onClick={() => {
                findHoroscope(month, day);
                setTimeout(() => {
                  setLoad(true);
                }, 2200);
              }}
            />
          </View>
        </View>
        <View className="flex-6 p-5">
          {horoscope ? (
            load ? (
              <View className="h-full w-full bg-[#b7b7b721] rounded-3xl">
                <Text className="text-[#d6dd6e] text-2xl text-center font-extrabold italic py-2">
                  Senin Burcun : "{horoscope}"
                </Text>
                {ascendant ? (
                  <Text className="text-[#d6dd6e] text-2xl text-center font-extrabold italic py-2">
                    Senin Yükselenin : "{ascendant}"
                  </Text>
                ) : (
                  ""
                )}
              </View>
            ) : (
              <Loading />
            )
          ) : (
            ""
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FindAscendant;
