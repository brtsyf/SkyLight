import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../../Components/DropDown";
import PressableButton from "../../Components/Button";
import { useToast } from "react-native-toast-notifications";
import Loading from "../../Components/Loading";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import { dateDay, dateMonth, dateYear } from "../../data";
import BackgroundImage from "../../Components/BackgroundImage";

const FindAscendant = () => {
  const [day, setDay] = useState(null);
  const [many, setMany] = useState([]);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [horoscope, setHoroscope] = useState(null);
  const [ascendant, setAscendant] = useState(null);
  const [active, setActive] = useState(false);
  const toast = useToast();
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
      toast.show("Lütfen Seçenekleri Doldurunuz", {
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
    <BackgroundImage>
      <Header />
      <View className="flex-4">
        <View className="flex-1   ">
          <DropDown setChange={setYear} items={dateYear} />
        </View>
        {year ? (
          <View className="flex-1 flex-row ">
            {year ? <DropDown setChange={setMonth} items={dateMonth} /> : ""}
            {month && year ? <DropDown setChange={setDay} items={many} /> : ""}
          </View>
        ) : (
          ""
        )}
        <View
          className={`${
            year ? "flex-1 justify-center" : "flex-2"
          } transition-all  items-center   `}
        >
          <PressableButton
            title="YILDIZLARA GİT"
            onClick={() => {
              findHoroscope(month, day);
              if (active) {
                setActive(false);
                setTimeout(() => {
                  setActive(true);
                }, 2200);
              } else {
                setTimeout(() => {
                  setActive(true);
                }, 2200);
              }
            }}
          />
        </View>
      </View>
      <View className="flex-5 px-5 pb-4">
        <View className="h-full px-2 py-5  w-full bg-[#9494941c] rounded-3xl flex-row">
          {horoscope && ascendant ? (
            active ? (
              <>
                <Card cardTitle="Burç" cardValue={horoscope} />
                <Card cardTitle="Yükselen" cardValue={ascendant} />
              </>
            ) : (
              <Loading />
            )
          ) : (
            ""
          )}
        </View>
      </View>
    </BackgroundImage>
  );
};

export default FindAscendant;
