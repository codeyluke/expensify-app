import moment from "moment";

export default [
  {
    id: "1",
    description: "gum",
    amount: 112,
    note: "",
    createdAt: 0,
  },
  {
    id: "2",
    description: "rent",
    amount: 109500,
    note: "",
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "credit card",
    amount: 4500,
    note: "",
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
