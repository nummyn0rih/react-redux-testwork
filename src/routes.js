const host = 'http://www.filltext.com';
const smallAmountOfData = '?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const largeAmountOfData = '?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


export default {
  dataSmall: [host, smallAmountOfData].join('/'),
  dataLarge: [host, largeAmountOfData].join('/'),
};
