

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Test1",
          amt: 120,
          transactionDt: "06-01-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 175,
          transactionDt: "05-30-2021"
        },
        {
          custid: 1,
          name: "Test1",
          amt: 94,
          transactionDt: "05-21-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 10,
          transactionDt: "06-01-2021"
        },
        {
          custid: 3,
          name: "Test3",
          amt: 75,
          transactionDt: "05-16-2021"
        },
        {
          custid: 1,
          name: "Test1",
          amt: 1260,
          transactionDt: "06-08-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 1750,
          transactionDt: "05-19-2021"
        },
        {
          custid: 1,
          name: "Test1",
          amt: 394,
          transactionDt: "05-7-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 1000,
          transactionDt: "06-13-2021"
        },
        {
          custid: 3,
          name: "Test3",
          amt: 65,
          transactionDt: "05-11-2021"
        },
        {
          custid: 3,
          name: "Test3",
          amt: 705,
          transactionDt: "05-14-2021"
        },
        {
          custid: 1,
          name: "Test1",
          amt: 1260,
          transactionDt: "06-03-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 1750,
          transactionDt: "05-02-2021"
        },
        {
          custid: 3,
          name: "Test3",
          amt: 394,
          transactionDt: "05-01-2021"
        },
        {
          custid: 2,
          name: "Test2",
          amt: 10,
          transactionDt: "06-13-2021"
        },
        {
          custid: 3,
          name: "Test3",
          amt: 65,
          transactionDt: "05-11-2021"
        },
    ]
  );
};