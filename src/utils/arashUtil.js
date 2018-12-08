export const areYouWell = (mode) => {
    return mode ? "Well" : "Not so well";
};

export const ArashGet = (pages, setRecords) => {
    let wholePages = [];
    let i = 0;
    pages.map((page, index, arr) => {
      i++;
      fetch(`https://reqres.in/api/users?page=${page}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data.data);
          wholePages = [...wholePages, ...data.data];
          console.log("W2:", wholePages);
          
          if (i === arr.length) {
            setRecords(wholePages)
          };
          return wholePages;
        });
    });
  };

  export async function ArashGet2(page) {
    let wholePages = [];
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    let data = await response.json();
    console.log("A3:", data);
    return data;
  }


 export function ArashGet3 (pages, setRecords)  {
    let wholePages = [];
    let response = "";
    let data = "";
    let i = 0;

    pages.map(async (page, index, arr) => {
      i++;
      response = await fetch(`https://reqres.in/api/users?page=${page}`);
      data = await response.json();
          // console.log(data.data);
          wholePages = [...wholePages, ...data.data];
          console.log("index:",  index);
          
          if (i === arr.length) {
            setRecords(wholePages)
          };
          return wholePages;
        });
      }
