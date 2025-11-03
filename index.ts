import createMessage from "#twilio";
import { searchIphone16 } from "#search";
import { searchMacBookAir } from "#search";
import isEmpty from "#utils";

const startJob = async () => {
  searchIphone16()
    .then((res) => {
      if (!isEmpty(res))
        createMessage("There is some refurbished Iphone 16 available !");
    })
    .catch((e) => {
      throw new Error("Something went wrong looking for Iphones", e);
    });

  searchMacBookAir()
    .then((res) => {
      if (!isEmpty(res))
        createMessage("There is some refurbished MacBook Air available !");
    })
    .catch((e) => {
      throw new Error("Something went wrong looking for Macbooks", e);
    });
};

startJob();
