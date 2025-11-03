import createMessage from "#twilio";
import { searchIphone16 } from "#search";
import { searchMacBookAir } from "#search";
import isEmpty from "#utils";

const startJob = async () => {
  searchIphone16().then((res) => {
    if (!isEmpty(res))
      createMessage("There is some refurbished Iphone 16 available !");
  });

  searchMacBookAir().then((res) => {
    if (!isEmpty(res))
      createMessage("There is some refurbished MacBook Air available !");
  });
};

startJob();
